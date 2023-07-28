<script lang="ts">
	import { step } from '$lib/stores/step-store';

	const steps = [
		{ n: 1, text: 'Your info' },
		{ n: 2, text: 'Select plan' },
		{ n: 3, text: 'Add-ons' },
		{ n: 4, text: 'Summary' }
	];
</script>

<ol>
	{#each steps as s (s.n)}
		<li>
			<div
				class={s.n === $step || (s.n === 4 && $step === 5)
					? 'active list-item-number'
					: 'list-item-number'}
			>
				{s.n}
			</div>
			<div class={'list-item-text'}>
				<div class={'text-msf-cool-gray'}>Step {s.n}</div>
				<div class={'font-msf-font-bold text-msf-white'}>{s.text}</div>
			</div>
		</li>
	{/each}
</ol>

<style lang="postcss">
	ol {
		@apply flex h-[172px] w-full items-center justify-center gap-5 bg-sidebar-mobile bg-cover bg-no-repeat p-8 sm:h-[568px] sm:w-[274px] sm:flex-col sm:items-start sm:justify-start sm:bg-sidebar-desktop sm:bg-contain;
	}

	li {
		@apply flex items-center gap-5;
	}

	.list-item-number {
		@apply flex h-10 w-10 items-center justify-center rounded-full border border-msf-white font-msf-font-bold text-msf-white;
	}

	.list-item-text {
		@apply hidden flex-col uppercase sm:flex;
	}

	.active {
		@apply border-msf-light-blue bg-msf-light-blue text-msf-marine-blue;
	}
</style>
