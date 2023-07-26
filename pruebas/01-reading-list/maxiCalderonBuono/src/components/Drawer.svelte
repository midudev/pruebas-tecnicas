<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	const drawerSettings: DrawerSettings = {
		id: 'example-3',
		bgDrawer: 'bg-slate-800 text-white',
		bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
		width: 'w-[280px] md:w-[480px]',
		height: 'h-screen',
		rounded: 'rounded-br-xl rounded-tr-xl'
	};

	function trigger(position: 'left' | 'top' | 'right' | 'bottom'): void {
		drawerStore.open(drawerSettings);
	}

	drawerStore.open(drawerSettings);
</script>

<Drawer />
<button class="btn variant-filled font-bold rounded-lg p-2 mx-auto mt-3 hover:bg-indigo-300" on:click={()=> trigger("right")}>ABRIR</button>
