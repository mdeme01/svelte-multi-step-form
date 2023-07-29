<script lang="ts">
	import { addons, subscription } from '$lib/stores/subscription-store';

	const updateAddons = (addon: (typeof $subscription.addons)[0]) => {
		subscription.changeAddOns(
			$subscription.addons.map((a) => a.id).includes(addon.id)
				? $subscription.addons.filter((a) => a.id !== addon.id)
				: [...$subscription.addons, addon]
		);
	};
</script>

<section>
	<h1>Pick add-ons</h1>
	<p>Add-ons help enchance your gaming experience.</p>
	<form>
		{#each addons as addon (addon.id)}
			<div
				class={$subscription.addons.map((a) => a.id).includes(addon.id)
					? 'active checkbox-wrapper'
					: 'checkbox-wrapper'}
			>
				<div class={'desc'}>
					<input
						type={'checkbox'}
						name={addon.id}
						id={addon.id}
						checked={$subscription.addons.map((a) => a.id).includes(addon.id)}
						on:change={() => updateAddons(addon)}
					/>
					<label for="online">
						<h2>{addon.props.name}</h2>
						<p>{addon.props.desc}</p>
					</label>
				</div>
				<div class={'price'}>
					{$subscription.billing === 'monthly'
						? `+$${addon.props.monthlyPrice}/mo`
						: `+$${addon.props.yearlyPrice}/yr`}
				</div>
			</div>
		{/each}
	</form>
</section>

<style lang="postcss">
	form {
		@apply flex flex-col gap-3;
	}

	.checkbox-wrapper {
		@apply flex items-center justify-between gap-5 rounded-lg border border-msf-light-gray pb-3 pl-5 pr-5 pt-3;
	}

	.checkbox-wrapper.active {
		@apply border-msf-marine-blue bg-msf-magnolia;
	}

	.desc {
		@apply flex items-center gap-5;
	}
	.price {
		@apply text-sm text-msf-purplish-blue;
	}

	input[type='checkbox'] {
		@apply h-5 w-5 cursor-pointer rounded-md border-msf-light-gray bg-msf-light-gray accent-msf-purplish-blue;
	}

	label {
		@apply flex flex-col justify-center;
	}

	label h2 {
		@apply text-lg font-msf-font-medium text-msf-marine-blue;
	}

	label p {
		@apply text-msf-cool-gray;
	}
</style>
