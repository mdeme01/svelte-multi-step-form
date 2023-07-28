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
		<li class={s.n === $step || (s.n === 4 && $step === 5) ? 'bg-msf-pastel-blue' : ''}>
			Step {s.n}
			{s.text}
		</li>
	{/each}
</ol>
