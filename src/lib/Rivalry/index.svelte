<script>
    import Matchup from "$lib/Matchups/Matchup.svelte";
    import TradeTransaction from "$lib/Transactions/TradeTransaction.svelte";
    import { getLeagueRecords, getLeagueTransactions, getRivalryMatchups, loadPlayers, round } from "$lib/utils/helper";
    import { getRosterIDFromManagerIDAndYear } from "$lib/utils/helperFunctions/universalFunctions";
    import LinearProgress from '@smui/linear-progress';
    import { onMount } from "svelte";
    import ComparissonBar from "./ComparissonBar.svelte";
    import ManagerSelectors from "./ManagerSelectors.svelte";
    import RivalryControls from "./RivalryControls.svelte";
    import AllRivalriesTable from './AllRivalriesTable.svelte';

    export let leagueTeamManagers, playersInfo, transactionsInfo, recordsInfo, playerOne, playerTwo;

    // --- State variables for the view toggle ---
    let currentView = 'vs';
    let allRivalriesData = null;
    let isAllLoading = false;
    let leagueMinMax;

    // --- Asynchronous function to calculate all rivalry data ---
    const calculateAllRivalries = async () => {
        if (!leagueTeamManagers?.users) return [];

        const allRivalries = [];
        const managerIDs = Object.keys(leagueTeamManagers.users);

        for (const managerA_ID of managerIDs) {
            const managerA = leagueTeamManagers.users[managerA_ID];
            // The manager object itself might not have a managerID, but we have the ID (managerA_ID)
            // A simple check to see if it's a valid object is enough.
            if (typeof managerA !== 'object' || !managerA.display_name) continue;

            const managerRivalries = {
                manager: managerA,
                rivalries: []
            };

            for (const managerB_ID of managerIDs) {
                if (managerA_ID === managerB_ID) continue;
                const managerB = leagueTeamManagers.users[managerB_ID];
                if (typeof managerB !== 'object' || !managerB.display_name) continue;

                try {
                    // Use the IDs from the keys to get the matchup
                    const rivalry = await getRivalryMatchups(managerA_ID, managerB_ID);
                    managerRivalries.rivalries.push({
                        opponent: managerB,
                        stats: rivalry
                    });
                } catch (e) {
                    console.error(`Failed to get rivalry for ${managerA.display_name} vs ${managerB.display_name}:`, e);
                }
            }
            allRivalries.push(managerRivalries);
        }
        return allRivalries;
    }

    // --- Click handler for the "All" button ---
    const handleAllClick = async () => {
        currentView = 'all';
        if (!allRivalriesData) {
            isAllLoading = true;
            const data = await calculateAllRivalries();

            const allStats = data.flatMap(manager => manager.rivalries.map(r => {
                const games = r.stats.matchups?.length || 0;
                return {
                    winPct: games > 0 ? (r.stats.wins.one / games) : 0,
                    avgPF: games > 0 ? (r.stats.points.one / games) : 0,
                    avgPA: games > 0 ? (r.stats.points.two / games) : 0
                };
            }));

            leagueMinMax = {
                winPct: { min: Math.min(...allStats.map(s => s.winPct)), max: Math.max(...allStats.map(s => s.winPct)) },
                avgPF: { min: Math.min(...allStats.map(s => s.avgPF)), max: Math.max(...allStats.map(s => s.avgPF)) },
                avgPA: { min: Math.min(...allStats.map(s => s.avgPA)), max: Math.max(...allStats.map(s => s.avgPA)) }
            };

            allRivalriesData = data;
            isAllLoading = false;
        }
    }

    // --- Original "VS" view logic ---

    onMount(async () => {
        if(transactionsInfo.stale) {
            transactionsInfo = await getLeagueTransactions(false, true);
        }
        if(playersInfo.stale) {
            playersInfo = await loadPlayers(null, true);
        }
        if(recordsInfo.stale) {
            recordsInfo = await getLeagueRecords(true);
        }
    })

    let rivalry = null;
    let loading = true;

    const analyzeRivalry = async (p1, p2) => {
        loading = true;
        matchup = null;
        if(p1 && p2) {
            rivalry = await getRivalryMatchups(p1, p2);
            loading = false;
        } else {
            loading = false;
        }
    }

    $: analyzeRivalry(playerOne, playerTwo);

    let selected = 0;

    $: matchup = rivalry?.matchups[selected]?.matchup;
    $: displayWeek = rivalry?.matchups[selected]?.week;
    $: year = rivalry?.matchups[selected]?.year;
    
    const setTradeHistory = (p1, p2) => {
        if(!p1 || !p2) {
            return [];
        }
        const trades = transactionsInfo.transactions.filter( transaction => {
            if(transaction.type !== "trade") {
                return false;
            }
            const rosterIDOne = parseInt(getRosterIDFromManagerIDAndYear(leagueTeamManagers, playerOne, transaction.season));
            const rosterIDTwo = parseInt(getRosterIDFromManagerIDAndYear(leagueTeamManagers, playerTwo, transaction.season));
            if(rosterIDOne == rosterIDTwo) {
                return false;
            }
            return transaction.rosters.includes(rosterIDOne) && transaction.rosters.includes(rosterIDTwo);
        });
        const move = (arr, from, to) => {
            arr.splice(to, 0, arr.splice(from, 1)[0]);
        };
        return trades.map(t => {
            const rosterIDOne = parseInt(getRosterIDFromManagerIDAndYear(leagueTeamManagers, playerOne, t.season));
            const rosterIDTwo = parseInt(getRosterIDFromManagerIDAndYear(leagueTeamManagers, playerTwo, t.season));
            const rosterOneStartLocation = t.rosters.indexOf(rosterIDOne);
            if(rosterOneStartLocation > 0) {
                move(t.rosters, rosterOneStartLocation, 0);
                for(const tradeMove of t.moves) {
                    move(tradeMove, rosterOneStartLocation, 0);
                }
            }
            const rosterTwoStartLocation = t.rosters.indexOf(rosterIDTwo);
            const last = t.rosters.length - 1;
            if(rosterTwoStartLocation < last) {
                move(t.rosters, rosterTwoStartLocation, last);
                for(const tradeMove of t.moves) {
                    move(tradeMove, rosterTwoStartLocation, last);
                }
            }
            return t;
        })
    }

    $: tradeHistory = setTradeHistory(playerOne, playerTwo);

    const performanceOrderOne = [
        {field: "totalWins", label: "Wins", unit: "wins"},
        {field: "totalLosses", label: "Losses", unit: "losses"},
        {field: "totalTies", label: "Ties", unit: "ties"},
    ]

    const performanceOrderTwo = [
        {field: "fptsFor", label: "Points For", unit: "fpts"},
        {field: "fptsAgainst", label: "Points Against", unit: "fpts against"},
    ]

    $: playerOneRecords = recordsInfo?.regularSeasonData?.leagueManagerRecords ? recordsInfo.regularSeasonData.leagueManagerRecords[playerOne] : null;
    $: playerTwoRecords = recordsInfo?.regularSeasonData?.leagueManagerRecords ? recordsInfo.regularSeasonData.leagueManagerRecords[playerTwo] : null;
</script>

<style>
    .scoreBoard {
        width: 97%;
        border-radius: 20px;
        background-color: var(--rivalryBack);
        border: 1px solid var(--aaa);
        margin: 2em auto;
        padding: 2em 0;
        max-width: 1000px;
    }
    h2 {
        text-align: center;
        font-size: 2.4em;
        margin: 1.3em 0 0;
    }
    h3 {
        text-align: center;
        font-size: 1.9em;
        margin: 20px 0 16px;
    }
    .trades {
        width: 95%;
        max-width: 750px;
        margin: 2em auto;
    }
    .loading {
        display: block;
        width: 85%;
        max-width: 500px;
        margin: 80px auto;
    }
    .center {
        text-align: center;
    }
    .helmets {
        width: 80%;
        max-width: 800px;
        margin: 0 auto 2em;
    }
    @media (max-width: 650px) {
        h3 {
            font-size: 1.6em;
        }
    }
    @media (max-width: 400px) {
        h2 {
            font-size: 2em;
        }
        h3 {
            font-size: 1.3em;
        }
    }

    /* Styles for the toggle buttons */
	.button-group {
		display: inline-flex;
		border: 1px solid var(--grey-border);
		border-radius: 5px;
		overflow: hidden;
		margin-bottom: 2em;
	}
	.button {
		padding: 0.5em 1.5em;
		background-color: var(--fff);
		border: none;
		cursor: pointer;
		font-size: 1em;
		color: var(--text);
		transition: background-color 0.2s;
	}
	.button:first-child {
		border-right: 1px solid var(--grey-border);
	}
	.button:hover {
		background-color: var(--light-grey);
	}
	.button.selected {
		background-color: var(--blue);
		color: #fff;
	}
</style>

<h2>Rivalry</h2>

<div class="center">
	<div class="button-group">
		<button class="button" class:selected={currentView === 'vs'} on:click={() => currentView = 'vs'}>VS</button>
		<button class="button" class:selected={currentView === 'all'} on:click={handleAllClick}>All</button>
	</div>
</div>

{#if currentView === 'vs'}
    <div class="rivalrySelection">
        <ManagerSelectors bind:playerOne={playerOne} bind:playerTwo={playerTwo} {leagueTeamManagers} />
    </div>

    {#if loading }
        {#if playerOne && playerTwo }
            <div class="loading">
                <p>Analyzing rivalry...</p>
                <br />
                <LinearProgress indeterminate />
            </div>
        {:else}
            <div class="center">
                <img class="helmets" src="/helmets.png" alt="placeholder of helmets clashing" />
            </div>
        {/if}
    {:else}
        {#if rivalry?.matchups.length > 0 }
            <div class="scoreBoard">
                <h3>Head to Head</h3>
                <ComparissonBar sideOne={rivalry.wins.one} sideTwo={rivalry.wins.two} label="Wins" unit="wins" />
                <ComparissonBar sideOne={Math.round(rivalry.points.one/(rivalry.wins.one + rivalry.wins.two))} sideTwo={Math.round(rivalry.points.two/(rivalry.wins.one + rivalry.wins.two))} label="Points per Game" unit="pts/game" />
                <ComparissonBar sideOne={parseFloat(round(rivalry.points.one))} sideTwo={parseFloat(round(rivalry.points.two))} label="Total Points" unit="pts" />
                <h3>Matchups</h3>
                <RivalryControls bind:selected={selected} {year} {displayWeek} length={rivalry.matchups.length} />
                <Matchup key={`${playerOne}-${playerTwo}`} ix={selected} active={selected} {year} {matchup} players={playersInfo.players} {displayWeek} expandOverride={true} {leagueTeamManagers} />
            </div>
        {/if}
        <div class="scoreBoard">
            {#if playerOne && playerTwo }
                <h3>Trade History</h3>
                <div class="trades">
                    {#each tradeHistory as transaction }
                        <TradeTransaction players={playersInfo.players} {transaction} {leagueTeamManagers} />
                    {:else}
                        No trades yet...
                    {/each}
                </div>
            {/if}
        </div>
        {#if playerOne && playerTwo && playerOneRecords && playerTwoRecords }
            <div class="scoreBoard">
                <h3>Performance Comparisson</h3>
                <ComparissonBar sideOne={parseFloat(round(playerOneRecords.totalWins/(playerOneRecords.totalWins + playerOneRecords.totalTies + playerOneRecords.totalLosses) * 100))} sideTwo={parseFloat(round(playerTwoRecords.totalWins/(playerTwoRecords.totalWins + playerTwoRecords.totalTies + playerTwoRecords.totalLosses) * 100))} label="Win Percentage" unit="%" />
                {#each performanceOrderOne as stat }
                    <ComparissonBar sideOne={parseFloat(round(playerOneRecords[stat.field]))} sideTwo={parseFloat(round(playerTwoRecords[stat.field]))} label={stat.label} unit={stat.unit} />
                {/each}
                <ComparissonBar sideOne={parseFloat(round(playerOneRecords.fptsFor/(playerOneRecords.wins + playerOneRecords.ties + playerOneRecords.losses)))} sideTwo={parseFloat(round(playerTwoRecords.fptsFor/(playerTwoRecords.wins + playerTwoRecords.ties + playerTwoRecords.losses)))} label="Points per Game" unit="fpts/game" />
                {#each performanceOrderTwo as stat }
                    <ComparissonBar sideOne={parseFloat(round(playerOneRecords[stat.field]))} sideTwo={parseFloat(round(playerTwoRecords[stat.field]))} label={stat.label} unit={stat.unit} />
                {/each}
                <ComparissonBar sideOne={parseFloat(round(playerOneRecords.fptsFor/playerOneRecords.potentialPoints * 100))} sideTwo={parseFloat(round(playerTwoRecords.fptsFor/playerTwoRecords.potentialPoints * 100))} label="Lineup IQ" unit="%" />
            </div>
        {/if}
    {/if}
{:else if currentView === 'all'}
    {#if isAllLoading}
        <div class="loading">
            <p>Calculating all rivalries...</p>
            <br />
            <LinearProgress indeterminate />
        </div>
    {:else if allRivalriesData && leagueMinMax}
        {#each allRivalriesData as managerRivalry (managerRivalry.manager)}
            <AllRivalriesTable {managerRivalry} {leagueMinMax} {leagueTeamManagers} />
        {/each}
    {/if}
{/if}