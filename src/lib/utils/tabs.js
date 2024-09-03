import {leagueID} from '$lib/utils/leagueInfo';

export const tabs = [
    {
        icon: 'home',
        label: 'Home',
        dest: '/',
    },
    {
        icon: 'format_list_numbered',
        label: 'The Stats',
        nest: true,
        children: [
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
                label: 'Awards',
                dest: '/awards',
            },
        ]
    },
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
                icon: 'leaderboard',
                label: 'Standings',
                dest: '/standings',
            },
            {
                icon: 'swap_horiz',
                label: 'Transactions',
                dest: '/transactions',
            },
            {
                icon: 'sports',
                label: 'Matchups',
                dest: '/matchups',
            },
            {
                icon: 'storage',
                label: 'Rosters',
                dest: '/rosters',
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
                icon: 'description',
                label: 'Weekly RYE',
                dest: '/weekly-overview',
            },
            {
                icon: 'lightbulb',
                label: 'Resources',
                dest: '/resources',
            },
        ]
    },
    // {
    //     icon: 'lightbulb',
    //     label: 'Resources',
    //     dest: '/resources',
    // },
    // {
    //     icon: 'article',
    //     label: 'Blog',
    //     dest: '/blog',
    // },
];