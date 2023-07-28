<script lang="ts">
	import AddOns from '$lib/components/add-ons.svelte';
	import Confirmed from '$lib/components/confirmed.svelte';
	import FinishUp from '$lib/components/finish-up.svelte';
	import PersonalInfo from '$lib/components/personal-info.svelte';
	import SelectPlan from '$lib/components/select-plan.svelte';
	import { step } from '$lib/stores/step-store';
</script>

<section>
	{#if $step === 1}
		<PersonalInfo />
	{:else if $step === 2}
		<SelectPlan />
	{:else if $step === 3}
		<AddOns />
	{:else if $step === 4}
		<FinishUp />
	{:else}
		<Confirmed />
	{/if}
</section>

<style lang="postcss">
	section {
		@apply relative bottom-36 z-10 ml-5 mr-5 rounded-md bg-msf-white p-8 md:static md:ml-0 md:mr-0 md:p-0 md:pt-8;
		grid-area: form;
	}
</style>
