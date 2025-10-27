<script>
	import ManagerRow from '$lib/Managers/ManagerRow.svelte';

	// This component receives all the data it needs as props
	export let managerRivalry;
	export let leagueTeamManagers;
	export let leagueMinMax;

	// Helper function to get the color for a cell based on its value and range
	const getColor = (value, min, max) => {
		if (min === max || value == null) return 'transparent';
		const percentage = (value - min) / (max - min);
		const hue = (percentage * 120).toString(10); // 0 (red) to 120 (green)
		return `hsl(${hue}, 100%, 45%)`;
	};

	// Sort this manager's rivalries by win percentage (descending)
	const sortedRivalries = [...managerRivalry.rivalries].sort((a, b) => {
		const winPctA = a.stats.matchups?.length > 0 ? (a.stats.wins.one / a.stats.matchups.length) : 0;
		const winPctB = b.stats.matchups?.length > 0 ? (b.stats.wins.one / b.stats.matchups.length) : 0;
		return winPctB - winPctA;
	});

	// Find the max wins and losses within this specific table for highlighting
	const maxWins = Math.max(...sortedRivalries.map((r) => r.stats.wins.one));
	const minWins = Math.min(...sortedRivalries.map((r) => r.stats.wins.one));
	const maxLosses = Math.max(...sortedRivalries.map((r) => r.stats.wins.two));
	const minLosses = Math.min(...sortedRivalries.map((r) => r.stats.wins.two));
</script>

<div class="table-container">
	<div class="manager-header">
        <ManagerRow managerID={managerRivalry.manager.managerID} {leagueTeamManagers} />
	</div>

	<table>
		<thead>
			<tr>
				<th>Opponent</th>
				<th>Games</th>
				<th>Wins</th>
				<th>Losses</th>
				<th>Win %</th>
				<th>Avg PF</th>
				<th>Avg PA</th>
			</tr>
		</thead>
		<tbody>
			{#each sortedRivalries as rivalry (rivalry.opponent.managerID)}
				{@const stats = rivalry.stats}
				{@const games = stats.matchups?.length || 0}
				{@const winPct = games > 0 ? (stats.wins.one / games) : 0}
				{@const avgPF = games > 0 ? (stats.points.one / games) : 0}
				{@const avgPA = games > 0 ? (stats.points.two / games) : 0}
				<tr>
					<td class="opponent-name">
						<a href={`/rivalry?player_one=${managerRivalry.manager.managerID}&player_two=${rivalry.opponent.managerID}`}>
							{leagueTeamManagers.users[rivalry.opponent.managerID]?.display_name || 'Unknown'}
						</a>
					</td>
					<td>{games}</td>
					<td style:background-color={stats.wins.one === maxWins && maxWins != minWins ? 'var(--green)' : stats.wins.one === minWins && maxWins != minWins ? 'var(--red)' : 'transparent'}>
						{stats.wins.one}
					</td>
					<td style:background-color={stats.wins.two === minLosses && minLosses != maxLosses ? 'var(--green)' : stats.wins.two === maxLosses && minLosses != maxLosses ? 'var(--red)' : 'transparent'}>
						{stats.wins.two}
					</td>
					<td style:background-color={getColor(winPct, leagueMinMax.winPct.min, leagueMinMax.winPct.max)}>
						{winPct.toFixed(2)}
					</td>
					<td style:background-color={getColor(avgPF, leagueMinMax.avgPF.min, leagueMinMax.avgPF.max)}>
						{avgPF.toFixed(2)}
					</td>
					<td style:background-color={getColor(avgPA, leagueMinMax.avgPA.max, leagueMinMax.avgPA.min)}>
						{avgPA.toFixed(2)}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.table-container {
		margin-bottom: 2em;
		background-color: var(--fff);
		border: 1px solid var(--grey-border);
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}
	.manager-header {
		padding: 0.5em 1em;
		background-color: var(--light-grey);
		border-bottom: 1px solid var(--grey-border);
	}
	table {
		width: 100%;
		border-collapse: collapse;
	}
	th, td {
		padding: 0.75em;
		text-align: center;
		border-bottom: 1px solid var(--grey-border);
	}
	tbody tr:last-child td {
		border-bottom: none;
	}
	thead {
		background-color: var(--off-white);
	}
	th {
		font-weight: 600;
		color: var(--text-dark);
	}
	.opponent-name {
		text-align: left;
	}
	.opponent-name a {
		color: var(--blue);
		text-decoration: none;
		font-weight: 500;
	}
	.opponent-name a:hover {
		text-decoration: underline;
	}
</style>