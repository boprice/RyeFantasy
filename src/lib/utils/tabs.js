import {leagueID} from '$lib/utils/leagueInfo';

export const tabs = [
    {
        icon: 'home',
        label: 'Home',
        dest: '/',
    },
    {
        icon: 'sports',
        label: 'Matchups',
        dest: '/matchups',
    },
    {
        icon: 'swap_horiz',
        label: 'Trades & Waivers',
        dest: '/transactions',
    },
    // {
    //     icon: 'article',
    //     label: 'Blog',
    //     dest: '/blog',
    // },
    {
        icon: 'view_comfy',
        label: 'League Info',
        nest: true,
        children: [
            {
                icon: 'groups',
                label: 'Managers',
                dest: '/managers',
            },
            {
                icon: 'storage',
                label: 'Rosters',
                dest: '/rosters',
            },
            {
                icon: 'leaderboard',
                label: 'Standings',
                dest: '/standings',
            },
            {
                icon: 'view_comfy',
                label: 'Drafts',
                dest: '/drafts',
            },
            {
                icon: 'history_edu',
                label: 'Constitution',
                dest: '/constitution',
            },
            // {
            //     icon: 'sports_football',
            //     label: 'Go to Sleeper',
            //     dest: `https://sleeper.app/leagues/${leagueID}`,
            // },
            {
                icon: 'sports_football',
                label: 'Stats',
                dest: `/stats`,
            },
            {
                icon: 'local_fire_department',
                label: 'Rivalry',
                dest: '/rivalry',
            },
            {
                icon: 'military_tech',
                label: 'Records',
                dest: '/records',
            },
            {
                icon: 'emoji_events',
                label: 'Trophy Room',
                dest: '/awards',
            },
        ]
    },
    // {
    //     icon: 'lightbulb',
    //     label: 'Resources',
    //     dest: '/resources',
    // },
];