<script lang="ts">
	import ToggleSlider from '$lib/components/toggle-slider.svelte';
	import { step } from '$lib/stores/step-store';
	import { plans, subscription } from '$lib/stores/subscription-store';
</script>

<div class="form-step">
	<section class={'form-content'}>
		<h1>Select your plan</h1>
		<p class="mb-5 text-msf-cool-gray md:mb-8">You have the option of monthly or yearly billing.</p>
		<div class="mb-8 flex flex-col gap-3 md:flex-row">
			{#each plans as plan (plan.id)}
				<button
					class={$subscription.plan.id === plan.id ? 'active radio-button' : 'radio-button'}
					on:click={() => subscription.changePlan(plan)}
				>
					<img src={`/images/icon-${plan.id}.svg`} alt={`${plan.id} plan`} />
					<div class="flex flex-col gap-1 text-left">
						<p class="text-lg font-msf-font-bold text-msf-marine-blue">{plan.props.name}</p>
						<p class="font-msf-font-medium text-msf-cool-gray">
							{$subscription.billing === 'monthly'
								? '$' + plan.props.monthlyPrice + '/mo'
								: '$' + plan.props.yearlyPrice + '/yr'}
						</p>
						{#if $subscription.billing === 'yearly'}
							<p class="w-max text-sm font-msf-font-medium text-msf-marine-blue">2 months free</p>
						{/if}
					</div>
				</button>
			{/each}
		</div>
		<div class="flex w-full items-center justify-center gap-5 rounded-md bg-msf-alabaster p-3">
			<p
				class={$subscription.billing === 'monthly'
					? 'font-msf-font-medium text-msf-marine-blue'
					: 'font-msf-font-medium text-msf-cool-gray'}
			>
				Monthly
			</p>
			<label class="relative inline-flex cursor-pointer items-center">
				<input
					type="checkbox"
					name="billing"
					id="billing"
					checked={$subscription.billing === 'yearly'}
					on:change={() =>
						subscription.changeBilling($subscription.billing === 'monthly' ? 'yearly' : 'monthly')}
					class="peer sr-only"
				/>
				<ToggleSlider />
			</label>
			<p
				class={$subscription.billing === 'yearly'
					? 'font-msf-font-medium text-msf-marine-blue'
					: 'font-msf-font-medium text-msf-cool-gray'}
			>
				Yearly
			</p>
		</div>
	</section>
	<nav class="form-button-wrapper justify-between">
		<button on:click={() => step.updateStep('dec')} class="btn-back">Go Back</button>
		<button on:click={() => step.updateStep('inc')} class="btn-next">Next Step</button>
	</nav>
</div>

<style lang="postcss">
	.radio-button {
		@apply flex cursor-pointer items-center gap-3 rounded-md border border-msf-cool-gray p-3 hover:border-msf-purplish-blue md:w-1/3 md:flex-col md:items-start md:gap-5 md:pr-10;
	}

	.radio-button.active {
		@apply border-msf-purplish-blue bg-msf-magnolia;
	}
</style>
