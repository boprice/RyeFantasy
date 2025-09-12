import {leagueID} from '$lib/utils/leagueInfo';

export const tabs = [
    {
        icon: 'home',
        label: 'Home',
        dest: '/',
        key: 'home',
    },
    // {
    //     icon: 'format_list_numbered',
    //     label: 'The Stats',
    //     nest: true,
    //     key: 'the_stats',
    //     children: [
            {
                icon: 'sports_football',
                label: 'Stats',
                dest: `/stats`,
                key: 'stats',
            },
            {
                icon: 'local_fire_department',
                label: 'Rivalry',
                dest: '/rivalry',
                key: 'rivalry',
            },
            {
                icon: 'military_tech',
                label: 'Records',
                dest: '/records',
                key: 'records',
            },
            {
                icon: 'emoji_events',
                label: 'Awards',
                dest: '/awards',
                key: 'awards',
            
            },
        // ]
    // },
    {
        icon: 'view_comfy',
        label: 'League Info',
        nest: true,
        key: 'league_info',
        children: [
            {
                icon: 'groups',
                label: 'Managers',
                dest: '/managers',
                key: 'managers',
            },
            {
                icon: 'leaderboard',
                label: 'Standings',
                dest: '/standings',
                key: 'standings',
            },
            {
                icon: 'swap_horiz',
                label: 'Transactions',
                dest: '/transactions',
                key: 'transactions',
            },
            {
                icon: 'sports',
                label: 'Matchups',
                dest: '/matchups',
                key: 'matchups',
            },
            {
                icon: 'storage',
                label: 'Rosters',
                dest: '/rosters',
                key: 'rosters',
            },
            {
                icon: 'view_comfy',
                label: 'Drafts',
                dest: '/drafts',
                key: 'drafts',
            },
            {
                icon: 'history_edu',
                label: 'Constitution',
                dest: '/constitution',
                key: 'constitution',
            },
            {
                icon: 'description',
                label: 'Weekly RYE',
                dest: '/weekly-overview',
                key: 'weekly-overview',
            },
            {
                icon: 'lightbulb',
                label: 'Resources',
                dest: '/resources',
                key: 'resources',
            },
        ]
    },
];