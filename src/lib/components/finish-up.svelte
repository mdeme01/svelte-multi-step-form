<script lang="ts">
	import { step } from '$lib/stores/step-store';
	import { subscription } from '$lib/stores/subscription-store';
</script>

<section>
	<h1>Finishing up</h1>
	<p>Double-check everything looks OK before confirming.</p>
	<div class={'mt-5 flex flex-col bg-msf-magnolia p-5'}>
		<div class={'flex items-center justify-between'}>
			<div>
				<div class={'text-lg font-msf-font-medium text-msf-marine-blue'}>
					{$subscription.plan.props.name}
					{$subscription.billing === 'monthly' ? '(Monthly)' : '(Yearly)'}
				</div>
				<button
					class={'cursor-pointer text-msf-cool-gray underline hover:text-msf-purplish-blue'}
					on:click={() => step.backToPlanStep()}>Change</button
				>
			</div>
			<div class={'font-msf-font-bold text-msf-marine-blue'}>
				{$subscription.billing === 'monthly'
					? `$${$subscription.plan.props.monthlyPrice}/mo`
					: `$${$subscription.plan.props.yearlyPrice}/yr`}
			</div>
		</div>
		<hr class="mb-3 mt-3" />
		<div class={'flex flex-col gap-1'}>
			{#each $subscription.addons as addon (addon.id)}
				<div class={'flex items-center justify-between'}>
					<div class={'text-msf-cool-gray'}>{addon.props.name}</div>
					<div class={'font-msf-font-medium text-msf-marine-blue'}>
						{$subscription.billing === 'monthly'
							? `+$${addon.props.monthlyPrice}/mo`
							: `+$${addon.props.yearlyPrice}/yr`}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class={'mt-5 flex items-center justify-between'}>
		<div>
			Total {$subscription.billing === 'monthly' ? '(per month)' : '(per year)'}
		</div>
		<div class={'text-lg font-msf-font-bold text-msf-purplish-blue'}>
			+${subscription.getTotalCost($subscription)}{$subscription.billing === 'monthly'
				? '/mo'
				: '/yr'}
		</div>
	</div>
</section>
