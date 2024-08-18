<script>
    import { dues } from '$lib/utils/helper';
    import { bind } from 'svelte/internal';
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree, oneFour;
    let two, twoOne, twoTwo, twoTwoTwo, twoThree, twoFour, twoFive;
    let three, threeOne;
    let four, fourOne, fourTwo, fourThree, fourFour;
    let five, fiveOne;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo, sevenThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2.8em;
        line-height: 1em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">CONSTITUTION</h1>
    
    <!-- <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: Roster</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 Positional Breakdown</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneOneOne)}>1.1.1 Position Maximums</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Trading</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoOne)}>1.2.1 Trade Collusion</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoTwo)}>1.2.2 Lending Players Prohibition</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoThree)}>1.2.3 Trade Deadline</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoFour)}>1.2.4 Trade Restrictions</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoFive)}>1.2.5 Veto/Trade Process</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Waiver Wire</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: Drafting</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Draft Order</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Rookie Drafts</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>2.3 Draft Day Trades</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: Scoring System</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Voting on Scoring System</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: Postseason</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Playoffs</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 Playoff Tiebreakers</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: Tanking Policy</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 League Tanking Policy</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 6: Replacing Managers</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 Removing Managers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>6.2 Replacing Managers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>6.3 Replacement Incentive</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 7: League Finances</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>7.1 League Dues</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>7.2 Payout</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>7.3 Raising Dues</h4>
    
    -->
    <!-- <hr />  -->
    
    <h2 class="sectionHeading" bind:this={one}>Section 1 Roster Breakdown</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 Positional Breakdown</h3>
    
    <p>28 Total Players</p>
    <p>8 Starters:</p>
    <ul>
        <li>QB</li>
        <li>RB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX</li>
        <li>FLEX</li>
    </ul>
    <p>14 Bench</p>
    <p>3 IR (Player must be labeled as IR, Out, or PUP on Sleeper.)</p>
    <p>3 Taxi Squad</p>


    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Taxi Squad</h3>

    <p>Taxi squads offer the option of stashing players that don't count against your roster limit.</p>

    <ul>
        <li>Rookie & Sophomores Only</li>
        <li>Taxi Deadline: Start of the Season</li>
        <ul>
            <li>Players cannot be added to the Taxi once the season starts.</li>
            <li>Players can be moved to the active roster at any time.</li>
        </ul>
    </ul>

        
    <h3 class="subSectionHeading" bind:this={oneThree}>1.3 Trading</h3>
    
    <p>Trades are allowed year round and will process immediately. We have all agreed to not be dorks that collude.</p>

    <ul>
        <li>Future rookie draft picks can be used in trades.</li>
        <ul>
            <li>3 years ahead</li>
            <li>4 rounds per year</li>
        </ul>
        <li class="underscore">No Trade Deadline</li>
    </ul>
    
    
    <h3 bind:this={oneFour}>1.4 Waiver Wire</h3>
    
    <p>FAAB Waiver wire system. $0 bids are allowed.</p>
    <p class="underscore">Daily Waivers</p>
    <ul>
        <li>In Season:</li>
        <ul>
            <li>Tue-Sat: Waivers process at 7PM EST</li>
            <li>Sun-Mon: Free Agents</li>
            <li>Players still lock at gametime, and will be available for the Tuesday night waivers.</li>
        </ul>
        <li>Offseason: Every day at 7PM EST</li>
    </ul>

    <p>FAAB budgets will reset at the start of the season, start of the offseason, & after the rookie draft.</p>



    <h2 class="sectionHeading" bind:this={two}>Section 2 Scheduling</h2>

    <h3 bind:this={twoOne}>2.1 Regular Season</h3>
    <p>The regular season will be weeks 1-14.</p>


    <h3 bind:this={twoTwo}>2.2 Divisions</h3>
    <p>There will be 2 divisions, Top & Bottom. Top & Bottom will consist of the previous year's Top 5 and Bottom 5 finishers.</p>
    <p>The divisions will be set every year, based on the previous season's finishers.</p>

    <h4 bind:this={twoTwoTwo}>2.2.2 Division Schedules</h4>
    <div class="subBlock">
        <p>You will play your division teams 2 times per year, and non-division teams 1 time per year.</p>
        <p>This should balance the schedules with the Bottom teams getting an "easier" schedule, only having to play the Top teams one time each.</p>
    </div>


    <h3 bind:this={twoThree}>2.3 Rivals</h3>
    <p>The last week of the season will be "Rivals Week". The rivals have the potential to change every year, and will be narrative based. (ex. Colt vs Chris, because he's 0-10 lol)</p>
    <p>The rivals will be finalized pre-season, and will not change once the season begins.</p>


    <h3 bind:this={twoFour}>2.4 Median</h3>
    <p>Each team faces an extra matchup against the league's median score weekly. This levels the playing field by rewarding strong performances regardless of matchup luck.</p>
    <ul>
        <li>2-0 and 0-2 is the exact same as 1-0 and 0-1 in a league without the median.</li>
        <li>1-1 is the only new outcome:</li>
        <ol>
            <li>Lost head to head but beat the median. This is good, you scored great but got shafted by an unlucky schedule.</li>
            <li>Won head to head but lost to the median. You got lucky on the schedule, but you still scored poorly. This is the only "bad" outcome.</li>
        </ol>
        <!-- ADD AFTER LINKING GOOGLE SHEETS TO WEBSITE -->
        <!-- <li>Check "Other Schedules" chart for evidence of lucky/unlucky schedules.</li> -->
    </ul>


    <h3 bind:this={twoFive}>2.5 Playoffs</h3>
    <p>Playoffs will be weeks 15-17. The top 6 teams, based on OVERALL record, will make the playoffs.</p>
    <p>The top 2 teams will receive a Round 1 bye. Each playoff matchup will only last one week and the winner will advance.</p>
    <p>Week 18 will not be used.</p>
    <p class="underscore">Seeding Tie Breakers:</p>
    <ol>
        <li>Points For</li>
        <li>Head 2 Head Record (Current Year)</li>
        <li>Division Record</li>
        <li>Total Points Against (Highest)</li>
        <li>Coin Flip</li>
        <li>Duel to the death</li>
    </ol>
    <p>A playoff tie will go to the higher seed.</p>




    <h2 class="sectionHeading" bind:this={three}>Section 3 Scoring System</h2>

    <h3 bind:this={threeOne}>3.1 Scoring System</h3>
    <p class="underscore">Passing</p>
    <ul>
        <li>Per Yard: 0.05</li>
        <li>Int: -3</li>
        <li>40+ Yard Completion: 1</li>
        <li>40+ Yard TD: 1</li>
    </ul>

    <p class="underscore">Rushing</p>
    <ul>
        <li>Per Yard: 0.1</li>
        <li>40+ Yard Rush: 2</li>
        <li>40+ Yard TD: 1</li>
    </ul>

    <p class="underscore">Receiving</p>
    <ul>
        <li>Per Yard: 0.1</li>
        <li>PPR: 0.5</li>
        <li>40+ Yard Rec: 1</li>
        <li>40+ Yard TD: 1</li>
    </ul>

    <p class="underscore">Misc</p>
    <ul>
        <li>TD: 6</li>
        <li>2pt Conv: 2</li>
        <li>Fumble: -1</li>
        <li>Fumble: -1</li>
        <li>Punt Return Per Yard: 0.1</li>
        <li>Kick Return Per Yard: 0.05</li>
    </ul>

    <p>Scoring settings can also be viewed on Sleeper.</p>
    

    
    
    <h2 class="sectionHeading" bind:this={four}>Section 4 Offseason</h2>

    <h3 bind:this={fourOne}>4.1 League Renewal</h3>
    <p>The league will be renewed after the championship game has been finalized.</p>
    <p>Waivers will be set to daily at 7PM EST. FAAB will be reset to $100.</p>
    <p>The 3 IR slots will be converted to 3 bench spots due to the NFL not tracking injuries through the offseason.</p>


    <h3 bind:this={fourTwo}>4.2 Rookie Draft</h3>
    <p>The Rookie Draft will be a linear draft, 4 rounds long, and take place after the NFL Draft.</p>
    <p class="underscore">Draft Order:</p>
    <ul>
        <li>1-4: Reverse order of regular season finish</li>
        <li>5-6: Teams eliminated Round 1, reverse order of regular season finish</li>
        <li>7-8: Teams eliminated in the Semifinals, reverse order of regular season finish</li>
        <li>9: Championship loser</li>
        <li>10: Champion</li>
    </ul>
    <p>Roster size will increase by x amount (dependent on who has the most picks).</p>
    <p>FAAB will be reset to $100 once Rookie Draft concludes.</p>

    
    <h3 bind:this={fourThree}>4.3 Roster Cuts</h3>
    <p>There will be 2 cut weeks leading up the the regular season to get the bench back down to 14 spots.</p>
    <p class="underscore">If you do not have a valid lineup once Week 1 begins, you will take an 0-2 loss for your Week 1 game.</p>


    <h3 bind:this={fourFour}>4.4 Regular Season Start</h3>
    <p>3 Bench slots will be converted back to IR slots.</p>
    <p>Waivers set back to In Season settings and FAAB is reset to $100.</p>

</div>