<script lang="ts">
	import AddOns from '$lib/components/add-ons.svelte';
	import Confirmed from '$lib/components/confirmed.svelte';
	import FinishUp from '$lib/components/finish-up.svelte';
	import PersonalInfo from '$lib/components/personal-info.svelte';
	import SelectPlan from '$lib/components/select-plan.svelte';
	import { step } from '$lib/stores/step-store';
</script>

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
