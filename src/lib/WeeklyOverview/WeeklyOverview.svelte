<script>
    import LinearProgress from '@smui/linear-progress';
    import { MatchupsAndBrackets, Standings, Transactions } from '$lib/components';
    import { getNflState } from '$lib/utils/helper';
    import { slide } from 'svelte/transition';

    export let data;
    const {
        queryWeek,
        matchupsData,
        bracketsData,
        standingsData,
        leagueTeamManagersData,
        playersData
    } = data;

    const nflState = getNflState();

    let transactionsVisible = false;
    let lastWeekVisible = false;
    let thisWeekVisible = false;
    let standingsVisible = false;

    function toggleTransactions() {
        transactionsVisible = !transactionsVisible;
    }

    function toggleLastWeek() {
        lastWeekVisible = !lastWeekVisible;
    }

    function toggleThisWeek() {
        thisWeekVisible = !thisWeekVisible;
    }

    function toggleStandings() {
        standingsVisible = !standingsVisible;
    }
</script>

<style>
    .section {
        margin-bottom: 2rem;
    }
    .section-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .homeBanner {
        background-color: var(--blueOne);
        color: #fff;
        padding: 0.5em 0;
        font-weight: 500;
        font-size: 2em;
        text-align: center;
        margin-bottom: 1rem;
        width: 25%;
        margin-left: auto;
        margin-right: auto;
    }
    .transactions {
        display: block;
        width: 95%;
        margin: 10px auto;
    }
    .arrow {
        margin-left: 10px;
        transition: transform 0.3s ease;
        font-size: 1rem;
    }
    .arrow.up {
        transform: rotate(180deg);
    }
    h1 {
        font-size: 2.2em;
        line-height: 1.3em;
        margin: 1.5em 0 2em;
    }
</style>

<div class="weekly-overview">
    <div class="homeBanner">
        {#await nflState}
            <div>Retrieving NFL state...</div>
        {:then nflStateData}
            <div>{nflStateData.season} 
                {#if nflStateData.season_type == 'pre'}
                    Preseason
                {:else if nflStateData.season_type == 'post'}
                    Postseason
                {:else}
                    - {nflStateData.week > 0 ? `Week ${nflStateData.week}` : "Preseason"}
                {/if}
            </div>
        {:catch error}
            <div>Something went wrong: {error.message}</div>
        {/await}
    </div>

    {#await nflState}
        <LinearProgress indeterminate />
    {:then nflStateData}
        {#if nflStateData.week > 1}
            <div class="section">
                <h1 class="section-title">Last Week's Matchups</h1>
                <MatchupsAndBrackets queryWeek={nflStateData.week - 1} {matchupsData} {bracketsData} {playersData} {leagueTeamManagersData} />
            </div>
        {/if}

        {#if nflStateData.week > 1}
        <div class="section">
            <h1 class="section-title" on:click={toggleStandings}>
                Current Standings
                <span class="arrow" class:up={!standingsVisible}>▼</span>
            </h1>
            {#if standingsVisible}
                <div class="transactions" transition:slide={{ duration: 10}}>
                    <Standings {standingsData} {leagueTeamManagersData} />
                </div>
            {/if}
        </div>
        {/if}

        <div class="section">
            <h1 class="section-title" on:click={toggleTransactions}>
                Recent Transactions
                <span class="arrow" class:up={!transactionsVisible}>▼</span>
            </h1>
            {#if transactionsVisible}
                <div class="transactions" transition:slide={{ duration: 10 }}>
                    <Transactions />
                </div>
            {/if}
        </div>

        <div class="section">
            <h1 class="section-title">Upcoming Matchups</h1>
            <MatchupsAndBrackets queryWeek={nflStateData.week} {matchupsData} {bracketsData} {playersData} {leagueTeamManagersData} />
        </div>
    {:catch error}
        <p>Error loading NFL state: {error.message}</p>
    {/await}
</div>