<script>
    import { page } from '$app/stores';
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import Select, { Option } from '@smui/select';
    import Button, { Group, Label } from '@smui/button';
    import Icon from '@smui/icon-button';

    // Get the data from our +page.js load function
    let { data } = $props();
    const { allScores, filterOptions } = data;

    // --- State Management ---

    // Toggle state
    let seasonType = $state('regular'); // 'regular' or 'playoff'

    // Sort state
    let sortBy = $state('score');
    let sortOrder = $state('desc'); // 'desc' or 'asc'

    // Filter state
    let selectedYears = $state([]);
    let selectedWeeks = $state([]);
    let selectedOwners = $state([]);

    // --- Reactive Logic ($derived) ---
    // This derived value will automatically re-calculate whenever its dependencies change (seasonType, filters, sortOrder, etc.)
    let filteredAndSortedScores = $derived(() => {
        // 1. Filter
        let filtered = allScores.filter(score => {
            // Filter by season type
            if (score.seasonType !== seasonType) return false;

            // Filter by selected years (if any)
            if (selectedYears.length > 0 && !selectedYears.includes(score.year)) return false;

            // Filter by selected weeks (if any)
            if (selectedWeeks.length > 0 && !selectedWeeks.includes(score.week)) return false;

            // Filter by selected owners (if any)
            if (selectedOwners.length > 0 && !selectedOwners.includes(score.owner)) return false;

            // If it passed all filters, keep it
            return true;
        });

        // 2. Sort
        filtered.sort((a, b) => {
            if (sortBy === 'score') {
                return sortOrder === 'desc' ? b.score - a.score : a.score - b.score;
            }
            // Add other sortable columns here if needed
            return 0;
        });

        // 3. Add Rank
        return filtered.map((score, index) => ({
            ...score,
            rank: index + 1
        }));
    });

    // --- Helper Functions ---
    function handleSort(column) {
        if (sortBy === column) {
            // Toggle sort order
            sortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
        } else {
            // Set new sort column, default to desc
            sortBy = column;
            sortOrder = 'desc';
        }
    }
</script>

<svelte:head>
    <title>All Scores</title>
</svelte:head>

<div class="page-container">
    <h1>All Scores</h1>

    <div class="controls-container">
        <Group variant="outlined" style="margin-right: 2rem;">
            <Button on:click={() => seasonType = 'regular'} variant={seasonType == 'regular' ? "raised" : "outlined"}>
                <Label>Regular Season</Label>
            </Button>
            <Button on:click={() => seasonType = 'playoff'} variant={seasonType == 'playoff' ? "raised" : "outlined"}>
                <Label>Playoffs</Label>
            </Button>
        </Group>

        <div class="filters">
            <Select multiple label="Year" bind:value={selectedYears} style="min-width: 150px; margin-right: 1rem;">
                {#each filterOptions.years as year}
                    <Option value={year}>{year}</Option>
                {/each}
            </Select>

            <Select multiple label="Week" bind:value={selectedWeeks} style="min-width: 150px; margin-right: 1rem;">
                {#each filterOptions.weeks as week}
                    <Option value={week}>Week {week}</Option>
                {/each}
            </Select>

            <Select multiple label="Owner" bind:value={selectedOwners} style="min-width: 200px;">
                {#each filterOptions.owners as owner}
                    <Option value={owner}>{owner}</Option>
                {/each}
            </Select>
        </div>
    </div>

    <DataTable table$aria-label="All weekly scores" style="width: 100%;">
        <Head>
            <Row>
                <Cell numeric>Rank</Cell>
                <Cell numeric class="sortable-header" on:click={() => handleSort('score')} style="cursor: pointer;">
                    Score
                    {#if sortBy === 'score'}
                        <Icon class="material-icons" style="font-size: 1.2em; vertical-align: middle; margin-left: 4px;">
                            {sortOrder === 'desc' ? 'arrow_downward' : 'arrow_upward'}
                        </Icon>
                    {/if}
                </Cell>
                <Cell>Owner</Cell>
                <Cell numeric>Year</Cell>
                <Cell numeric>Week</Cell>
            </Row>
        </Head>
        <Body>
            {#each filteredAndSortedScores as score (score.rank)}
                <Row>
                    <Cell numeric>{score.rank}</Cell>
                    <Cell numeric>{score.score.toFixed(2)}</Cell>
                    <Cell>{score.owner}</Cell>
                    <Cell numeric>{score.year}</Cell>
                    <Cell numeric>{score.week}</Cell>
                </Row>
            {:else}
                <Row>
                    <Cell colspan={5} style="text-align: center;">No scores match the selected filters.</Cell>
                </Row>
            {/each}
        </Body>
    </DataTable>
</div>

<style>
    .page-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 1rem;
    }

    .controls-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .filters {
        display: flex;
        flex-wrap: wrap;
    }

    /* Make SMUI Selects play nice in a flex container */
    :global(.filters .mdc-select) {
        margin-bottom: 0.5rem;
    }

    h1 {
        color: var(--primary-color); /* Or your theme's header color */
    }

    /* Style for the sortable header */
    :global(.sortable-header) {
        user-select: none;
    }
</style>