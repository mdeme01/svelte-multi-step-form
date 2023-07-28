<script lang="ts">
	import { plans, subscription } from '$lib/stores/subscription-store';
</script>

<section>
	<h1>Select your plan</h1>
	<p>You have the option of monthly or yearly billing.</p>
	<form>
		{#each plans as plan (plan.id)}
			<label>
				<input
					class={'radio-button'}
					type={'radio'}
					name={'plan'}
					id={plan.id}
					value={plan.id}
					checked={$subscription.plan.id === plan.id}
					on:change={() => subscription.changePlan(plan)}
				/>
				{plan.props.name} ({$subscription.billing === 'monthly'
					? '$' + plan.props.monthlyPrice + '/mo'
					: '$' + plan.props.yearlyPrice + '/yr'})
			</label>
		{/each}
		<div class="billing-toggle">
			<div
				class={$subscription.billing === 'monthly' ? 'text-msf-marine-blue' : 'text-msf-cool-gray'}
			>
				{'Monthly'}
			</div>
			<label class={'relative inline-flex cursor-pointer items-center'}>
				<input
					class="peer sr-only"
					type={'checkbox'}
					name={'billing'}
					id={'billing'}
					checked={$subscription.billing === 'yearly'}
					on:change={() =>
						subscription.changeBilling($subscription.billing === 'monthly' ? 'yearly' : 'monthly')}
				/>
				<div
					class={`peer h-6 w-11 rounded-full bg-msf-marine-blue after:absolute
          after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 
          after:bg-white after:transition-all after:content-[''] peer-checked:bg-msf-marine-blue peer-checked:after:translate-x-full 
          peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          `}
				/>
			</label>
			<div
				class={$subscription.billing === 'yearly' ? 'text-msf-marine-blue' : 'text-msf-cool-gray'}
			>
				{'Yearly'}
			</div>
		</div>
	</form>
</section>

<style lang="postcss">
	form {
		@apply flex flex-col gap-5;
	}

	.billing-toggle {
		@apply flex w-full items-center justify-center gap-5 rounded-md bg-msf-alabaster p-3;
	}

	.billing-toggle > div {
		@apply font-msf-font-medium;
	}

	.radio-button {
		@apply h-full w-full p-5;
	}
</style>
