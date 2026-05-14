import { getLeagueRecords } from '$lib/utils/helperFunctions/leagueRecords';
import { getLeagueTeamManagers } from '$lib/utils/helperFunctions/leagueTeamManagers';
import { getNflState } from '$lib/utils/helperFunctions/nflState';
import { leagueID } from '$lib/utils/leagueInfo';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
    // Fetch all the data concurrently
    const [nflState, leagueTeamManagers, leagueRecords] = await Promise.all([
        getNflState(fetch),
        getLeagueTeamManagers(fetch),
        getLeagueRecords(fetch, leagueID, true, true), // true, true to fetch both regular season and playoffs
    ]).catch((err) => {
        throw error(500, 'Error fetching league data: ' + err.message);
    });

    // We only want to process records up to the *previous* week
    const currentWeek = nflState.week;

    const processScores = (records, seasonType) => {
        let scores = [];
        
        // If records is null or undefined, just return an empty array
        if (!records) {
            return scores;
        }

        // records are { year: { week: { roster_id: score, ... }, ... }, ... }
        for (const [year, weeklyData] of Object.entries(records)) {
            for (const [week, weekData] of Object.entries(weeklyData)) {
                // Filter out the current week
                if (parseInt(year) === nflState.season && parseInt(week) >= currentWeek) {
                    continue; // Skip this week's data
                }

                for (const [roster_id, score] of Object.entries(weekData)) {
                    // Find the manager for this roster_id
                    const manager = leagueTeamManagers.managers.find(m => m.roster_id == roster_id);
                    const ownerName = manager ? manager.name : `Roster ${roster_id}`;

                    scores.push({
                        year: parseInt(year),
                        week: parseInt(week),
                        roster_id: parseInt(roster_id),
                        score: score,
                        owner: ownerName,
                        seasonType: seasonType,
                    });
                }
            }
        }
        return scores;
    };

    // Process both regular season and playoff scores
    const regularScores = processScores(leagueRecords.regular, 'regular');
    const playoffScores = processScores(leagueRecords.playoff, 'playoff');

    const allScores = [...regularScores, ...playoffScores];

    // We can also extract the filter options here so the component doesn't have to
    const allYears = [...new Set(allScores.map(s => s.year))].sort((a, b) => b - a);
    const allWeeks = [...new Set(allScores.map(s => s.week))].sort((a, b) => a - b);
    const allOwners = [...new Set(allScores.map(s => s.owner))].sort();

    return {
        allScores,
        filterOptions: {
            years: allYears,
            weeks: allWeeks,
            owners: allOwners,
        }
    };
}