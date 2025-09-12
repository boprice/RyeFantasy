<script>
    import { tabs } from '$lib/utils/tabs';
    import Tab, { Icon, Label } from '@smui/tab';
    import List, { Item, Graphic, Text, Separator } from '@smui/list';
    import TabBar from '@smui/tab-bar';
    import { page } from '$app/stores'; // <-- Updated import from $app/stores
    import { goto, preloadData } from '$app/navigation';
    import { enableBlog, managers } from '$lib/utils/leagueInfo';

    // Reactive state for the active tab
    let active = $state(tabs.find(tab => $page.url.pathname == tab.dest || (tab.nest && tab.children.find(subTab => $page.url.pathname == subTab.dest))));

    // State for submenu visibility and positioning
    let display = $state(false);
    let subMenuPosition = $state({ top: 0, left: 0, width: 0 });
    
    // Element references
    let menuContainerEl = $state();
    let triggerEl = $state();

    // This is our new positioning function
    const updateSubMenuPosition = () => {
        if (!menuContainerEl || !triggerEl) return;

        const containerRect = menuContainerEl.getBoundingClientRect();
        const triggerRect = triggerEl.getBoundingClientRect();

        subMenuPosition = {
            // Position it directly below the container
            top: containerRect.height,
            // The KEY FIX: calculate left relative to the container, not the window
            left: triggerRect.left - containerRect.left,
            // Match the width of the trigger tab
            width: triggerRect.width
        };
    };

    // Recalculate position when the trigger element is available or active tab changes
    $effect(() => {
        if (triggerEl) {
            updateSubMenuPosition();
        }
    });

    // Handle opening/closing when the 'League Info' tab is active
    $effect(() => {
        if(active?.key === 'league_info') {
            // A short delay can help ensure elements are rendered
            setTimeout(() => {
                display = true;
            }, 0);
        } else {
            display = false;
        }
    });

    const toggleSubMenu = () => {
        display = !display;
    }

    const subGoto = (dest) => {
        display = false;
        goto(dest);
    }

    // Simplified logic for getting sub-menu children
    const tabChildren = tabs.find(tab => tab.nest)?.children || [];
</script>

<svelte:window onresize={() => updateSubMenuPosition()} />

<style>
    :global(.navBar) {
		display: inline-flex;
		position: relative;
    	justify-content: center;
    }

	:global(.navBar .material-icons) {
		font-size: 1.8em;
		height: 25px;
		width: 22px;
	}

	.parent {
		position: relative;
	}

	.subMenu {
		overflow-y: hidden;
		display: block;
		position: absolute;
		z-index: 5;
		background-color: var(--fff);
		transition: all 0.4s;
	}

	.overlay {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		height: 100vh;
		z-index: 4;
	}

	:global(.mdc-deprecated-list) {
		padding: 0;
	}

	:global(.subText) {
		font-size: 0.8em;
	}

	:global(.dontDisplay) {
		display: none;
	}
</style>

<div tabindex="0" role="button" class="overlay" style="display: {display ? "block" : "none"};" onclick={toggleSubMenu}></div>

<div class="parent" bind:this={menuContainerEl}>
	<TabBar class="navBar" {tabs} key={(tab) => tab.key} bind:active>
        {#snippet tab(tab)}
            {#if tab.nest}
                <div bind:this={triggerEl}>
                    <Tab {tab} minWidth onclick={toggleSubMenu}>
                        <Icon class="material-icons">{tab.icon}</Icon>
                        <Label>{tab.label}</Label>
                    </Tab>
                </div>
			{:else}
				<Tab
					class="{tab.label == 'Blog' && !enableBlog ? 'dontDisplay' : ''}"
					{tab}
					onTouchstart={() => preloadData(tab.dest)}
					onMouseover={() => preloadData(tab.dest)}
					href={tab.dest}
					minWidth
				>
					<Icon class="material-icons">{tab.icon}</Icon>
					<Label>{tab.label}</Label>
				</Tab>
			{/if}
		{/snippet}
	</TabBar>
	<div 
        class="subMenu" 
        style="
            max-height: {display ? 49 * tabChildren.length - 1 - (managers.length ? 0 : 48) : 0}px; 
            width: {subMenuPosition.width}px; 
            top: {subMenuPosition.top}px; 
            left: {subMenuPosition.left}px; 
            box-shadow: 0 0 {display ? '3px' : '0'} 0 #00316b; 
            border: {display ? '1px' : '0'} solid #00316b; 
            border-top: none;
        "
    >
		<List>
			{#each tabChildren as subTab, ix}
				{#if subTab.label == 'Managers'}
					<Item class="{managers.length ? '' : 'dontDisplay'}" onSMUIAction={() => subGoto(subTab.dest)} ontouchstart={() => preloadData(subTab.dest)} onmouseover={() => preloadData(subTab.dest)}>
						<Graphic class="material-icons">{subTab.icon}</Graphic>
						<Text class="subText">{subTab.label}</Text>
					</Item>
					{#if ix != tabChildren.length - 1}
						<Separator />
					{/if}
				{:else}
					<Item onSMUIAction={() => subGoto(subTab.dest)} ontouchstart={() => {if(subTab.label != 'Go to Sleeper') preloadData(subTab.dest)}} onmouseover={() => {if(subTab.label != 'Go to Sleeper') preloadData(subTab.dest)}}>
						<Graphic class="material-icons">{subTab.icon}</Graphic>
						<Text class="subText">{subTab.label}</Text>
					</Item>
					{#if ix != tabChildren.length - 1}
						<Separator />
					{/if}
				{/if}
			{/each}
		</List>
	</div>
</div>