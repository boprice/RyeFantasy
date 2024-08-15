<script>
	import { goto } from '$app/navigation';
    import { managers } from '$lib/utils/helper';
	import { tabs } from '$lib/utils/tabs';
	import { onMount } from 'svelte';

	let outOfDate = false;

    let el, footerHeight;

    let innerWidth;

    const resize = (e, delay) => {
        const bottom = el?.getBoundingClientRect().bottom;
        const top = el?.getBoundingClientRect().top;
        if(delay) {
            setTimeout(() => {
                resize(e, false);
            }, 100)
        } else {
            footerHeight = bottom - top;
        }
    }

	onMount(async () => {
		const res = await fetch('/api/checkVersion', {compress: true})
		const needUpdate = await res.json();
		outOfDate = needUpdate;
        resize(el?.getBoundingClientRect(), true);
	})

    let managersOutOfDate = false;
    if(managers) {
        for(const manager of managers) {
            if(manager.roster && !manager.managerID) {
                managersOutOfDate = true;
                resize(el?.getBoundingClientRect(), true);
                break;
            }
        }
    }

	const year = new Date().getFullYear();

    $: resize(el?.getBoundingClientRect(), false, innerWidth);
</script>

<svelte:window bind:innerWidth={innerWidth} />

<style>
	footer {
		background-color: var(--f8f8f8);
		width: 100%;
        display: block;
        position: absolute;
        bottom: 0;
		z-index: 1;
		border-top: 1px solid #920505;
		padding: 30px 0 60px;
		text-align: center;
		color: #777;
	}

	#navigation {
		margin: 0 0 2em;
	}

	#navigation ul {
		margin: 0;
		padding: 0;
	}

	#navigation ul li {
		list-style-type: none;
		display: inline;
	}

	#navigation li:not(:first-child):before {
		content: " | ";
	}

	.navLink {
		display: inline-block;
		cursor: pointer;
		padding: 6px 10px;
	}

	.navLink:hover {
		color: #920505;
	}

	.updateNotice {
		color: var(--g999);
		font-style: italic;
		font-size: 0.8em;
		margin-top: 0;
	}
</style>

<div class="footerSpacer" style="height: {footerHeight}px;" />

<footer bind:this={el}>
	<div id="navigation">
		<ul>
			{#each tabs as tab}
				{#if !tab.nest}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li><div class="navLink" on:click={() => goto(tab.dest)}>{tab.label}</div></li>
				{:else}
					{#each tab.children as child}
				        {#if child.label != "Managers" || managers.length > 0}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <li><div class="navLink" on:click={() => goto(child.dest)}>{child.label}</div></li>
                        {/if}
					{/each}
				{/if}
			{/each}
		</ul>
	</div>
</footer>
