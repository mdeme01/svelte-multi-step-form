<script lang="ts">
	import { step } from '$lib/stores/step-store';
</script>

<nav>
	{#if $step !== 5}
		<button on:click={() => step.updateStep('dec')} hidden={$step === 1}>Go Back</button>
		<button on:click={() => step.updateStep('inc')}>{$step === 4 ? 'Confirm' : 'Next step'}</button>
	{:else}
		<button on:click={() => step.updateStep('res')}>Reset</button>
	{/if}
</nav>
