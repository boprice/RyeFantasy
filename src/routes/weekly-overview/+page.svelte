<script>
    import { WeeklyOverview } from '$lib/components';

    export let data;
</script>

<style>
    #main {
        position: relative;
        z-index: 1;
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 60px 0;
    }
</style>

<div id="main">
    <WeeklyOverview {data} />
</div>