<script>
    import List, { Item, Graphic, Separator, Text } from '@smui/list';
import { dynasty } from './utils/helper';

    const today = new Date();
    const resources = [
        {
            name: "FantasyCalc",
            url: "https://www.fantasycalc.com/league/dashboard?leagueId=1049732316240723968&site=Sleeper",
            icon: "calculate",
            premium: false,
            separator: false,
            dynastyOnly: false,
        },
        {
            name: "KeepTradeCut",
            url: "https://keeptradecut.com/dynasty/power-rankings/league-overview?leagueId=1049732316240723968&platform=2&viewMode=1&viewSort=0",
            icon: "trending_up",
            premium: false,
            separator: false,
            dynastyOnly: false,
        },
        {
            name: "FantasyPros",
            url: "https://www.fantasypros.com/nfl/rankings/dynasty-overall.php",
            icon: "sports_football",
            premium: false,
            separator: false,
            dynastyOnly: false,
        },
    ];
</script>

<style>
    .pageBody {
        position: relative;
        z-index: 1;
    }

    :global(.list) {
        width: 90%;
        max-width: 800px;
        /* border: 1px solid */
        /* var(--mdc-theme-text-hint-on-background, var(--d7d7d7)); */
        margin: 15px auto;
        padding: 0 !important;
        /* box-shadow: 0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree); */
    }


    :global(.linkText) {
        font-size: 1.1em;
    }

    a {
        color: var(--g555);
        font-size: 1.1em;
        text-decoration: none;
    }

    h4 {
        text-align: center;
    }

    .disclaimer {
        color: #888;
        text-align: center;
    }
</style>

<div class="pageBody">
    <div class="banner">
        <h4>Helpful Dynasty Resources</h4>
    </div>

    <List class="list" dense>
        {#each resources as resource}
            {#if resource.dynastyOnly && dynasty}
                <a target="_blank" href="{resource.url}">
                    <Item>
                        {#if resource.icon}
                            <Graphic class="material-icons">{resource.icon}</Graphic>
                        {/if}
                        <Text class="linkText">{resource.name}{resource.premium ? "*" : ""}</Text>
                    </Item>
                    {#if resource.separator}
                        <Separator />
                    {/if}
                </a>
            {:else if resource.redraftOnly && !dynasty}
                <a target="_blank" href="{resource.url}">
                    <Item>
                        {#if resource.icon}
                            <Graphic class="material-icons">{resource.icon}</Graphic>
                        {/if}
                        <Text class="linkText">{resource.name}{resource.premium ? "*" : ""}</Text>
                    </Item>
                    {#if resource.separator}
                        <Separator />
                    {/if}
                </a>
            {:else if !resource.redraftOnly && !resource.dynastyOnly}
                <a target="_blank" href="{resource.url}">
                    <Item>
                        {#if resource.icon}
                            <Graphic class="material-icons">{resource.icon}</Graphic>
                        {/if}
                        <Text class="linkText">{resource.name}{resource.premium ? "*" : ""}</Text>
                    </Item>
                    {#if resource.separator}
                        <Separator />
                    {/if}
                </a>
            {/if}
        {/each}
    </List>
</div>
