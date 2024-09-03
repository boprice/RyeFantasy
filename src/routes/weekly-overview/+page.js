import { 
    getBrackets, 
    getLeagueMatchups, 
    getLeagueTeamManagers, 
    loadPlayers, 
    getLeagueStandings
} from '$lib/utils/helper';

export async function load({ url, fetch }) {
    const queryWeek = url?.searchParams?.get('week');
    
    try {
        const [
            matchupsData,
            bracketsData,
            standingsData,
            leagueTeamManagersData,
            playersData
        ] = await Promise.all([
            getLeagueMatchups(),
            getBrackets(),
            getLeagueStandings(),
            getLeagueTeamManagers(),
            loadPlayers(fetch)
        ]);

        console.log('Loaded data:', { matchupsData, bracketsData, standingsData, leagueTeamManagersData, playersData });

        return {
            queryWeek: isNaN(queryWeek) ? null : queryWeek,
            matchupsData,
            bracketsData,
            standingsData,
            leagueTeamManagersData,
            playersData
        };
    } catch (error) {
        console.error('Error loading data:', error);
        return {
            queryWeek: isNaN(queryWeek) ? null : queryWeek,
            error: error.message
        };
    }
}