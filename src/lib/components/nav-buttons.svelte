<script lang="ts">
	import { step } from '$lib/stores/step-store';
</script>

<nav class={$step === 1 ? 'justify-end' : $step === 5 ? 'justify-center' : 'justify-between'}>
	{#if $step === 5}
		<button on:click={() => step.updateStep('res')} class={'btn-confirm'}>{'Reset'}</button>
	{:else}
		{#if $step > 1}
			<button on:click={() => step.updateStep('dec')} class={'btn-back'}>{'Go Back'}</button>
		{/if}
		{#if $step === 4}
			<button on:click={() => step.updateStep('inc')} class={'btn-confirm'}>{'Confirm'}</button>
		{:else}
			<button on:click={() => step.updateStep('inc')} class={'btn-next'}>{'Next Step'}</button>
		{/if}
	{/if}
</nav>

<style lang="postcss">
	nav {
		@apply flex w-full items-end bg-msf-white p-5 pb-3;
		grid-area: navbuttons;
	}

	button {
		@apply cursor-pointer rounded-md pb-3 pl-5 pr-5 pt-3 font-msf-font-medium;
	}

	.btn-back {
		@apply text-msf-cool-gray hover:text-msf-marine-blue;
	}

	.btn-next {
		@apply bg-msf-marine-blue text-msf-white hover:bg-msf-marine-blue/80;
	}

	.btn-confirm {
		@apply bg-msf-purplish-blue text-msf-white hover:bg-msf-purplish-blue/80;
	}
</style>
