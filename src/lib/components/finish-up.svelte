<script lang="ts">
	import { step } from '$lib/stores/step-store';
	import { subscription } from '$lib/stores/subscription-store';
</script>

<div class="form-step">
	<section class="form-content">
		<h1>Finishing up</h1>
		<p class="mb-5 text-msf-cool-gray md:mb-8">
			Double-check everything looks OK before confirming.
		</p>
		<div class="mt-5 flex flex-col rounded-md bg-msf-alabaster p-5">
			<div class="flex items-center justify-between">
				<div>
					<p class="text-lg font-msf-font-medium text-msf-marine-blue">
						{$subscription.plan.props.name}
						{$subscription.billing === 'monthly' ? '(Monthly)' : '(Yearly)'}
					</p>
					<button
						class="cursor-pointer text-msf-cool-gray underline hover:text-msf-purplish-blue"
						on:click={() => step.backToPlanStep()}>Change</button
					>
				</div>
				<p class="font-msf-font-bold text-msf-marine-blue">
					{$subscription.billing === 'monthly'
						? `$${$subscription.plan.props.monthlyPrice}/mo`
						: `$${$subscription.plan.props.yearlyPrice}/yr`}
				</p>
			</div>
			{#if $subscription.addons.length}
				<hr class="mb-3 mt-3" />
			{/if}
			<div class="flex flex-col gap-2">
				{#each $subscription.addons as addon (addon.id)}
					<div class="flex items-center justify-between">
						<p class="text-msf-cool-gray">{addon.props.name}</p>
						<p class="font-msf-font-medium text-msf-marine-blue">
							{$subscription.billing === 'monthly'
								? `+$${addon.props.monthlyPrice}/mo`
								: `+$${addon.props.yearlyPrice}/yr`}
						</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="mt-5 flex items-center justify-between pl-3 pr-3">
			<p class="text-msf-cool-gray">
				{$subscription.billing === 'monthly' ? 'Total (per month)' : 'Total (per year)'}
			</p>
			<p class="text-lg font-msf-font-bold text-msf-purplish-blue">
				{`+$${subscription.getTotalCost($subscription)}`}{$subscription.billing === 'monthly'
					? '/mo'
					: '/yr'}
			</p>
		</div>
	</section>
	<nav class="form-button-wrapper justify-between">
		<button on:click={() => step.updateStep('dec')} class="btn-back">Go Back</button>
		<button on:click={() => step.updateStep('inc')} class="btn-confirm">Confirm</button>
	</nav>
</div>
