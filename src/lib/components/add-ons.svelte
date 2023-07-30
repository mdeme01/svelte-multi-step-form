<script lang="ts">
	import { step } from '$lib/stores/step-store';
	import { addons, subscription } from '$lib/stores/subscription-store';

	const updateAddons = (addon: (typeof $subscription.addons)[0]) => {
		subscription.changeAddOns(
			$subscription.addons.map((a) => a.id).includes(addon.id)
				? $subscription.addons.filter((a) => a.id !== addon.id)
				: [...$subscription.addons, addon]
		);
	};
</script>

<div class="form-step">
	<section class="form-content">
		<h1>Pick add-ons</h1>
		<p class="mb-5 text-msf-cool-gray md:mb-8">Add-ons help enchance your gaming experience.</p>
		{#each addons as addon (addon.id)}
			<div
				class={$subscription.addons.map((a) => a.id).includes(addon.id)
					? 'active checkbox-wrapper'
					: 'checkbox-wrapper'}
			>
				<div class="flex items-center gap-5">
					<input
						type="checkbox"
						name={addon.id}
						id={addon.id}
						checked={$subscription.addons.map((a) => a.id).includes(addon.id)}
						on:change={() => updateAddons(addon)}
						class="h-5 w-5 cursor-pointer rounded-md border-msf-light-gray bg-msf-light-gray accent-msf-purplish-blue"
					/>
					<label for="online">
						<h2 class="text-lg font-msf-font-medium text-msf-marine-blue">{addon.props.name}</h2>
						<p class="text-msf-cool-gray">{addon.props.desc}</p>
					</label>
				</div>
				<p class="text-sm text-msf-purplish-blue">
					{$subscription.billing === 'monthly'
						? `+$${addon.props.monthlyPrice}/mo`
						: `+$${addon.props.yearlyPrice}/yr`}
				</p>
			</div>
		{/each}
	</section>
	<nav class="form-button-wrapper justify-between">
		<button on:click={() => step.updateStep('dec')} class="btn-back">Go Back</button>
		<button on:click={() => step.updateStep('inc')} class="btn-next">Next Step</button>
	</nav>
</div>

<style lang="postcss">
	.checkbox-wrapper {
		@apply mb-3 flex items-center justify-between gap-5 rounded-lg border border-msf-light-gray pb-3 pl-5 pr-5 pt-3;
	}

	.checkbox-wrapper.active {
		@apply border-msf-marine-blue bg-msf-magnolia;
	}
</style>
