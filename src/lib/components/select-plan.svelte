<script lang="ts">
	import { plans, subscription } from '$lib/stores/subscription-store';
</script>

<h1>Select your plan</h1>
<p>You have the option of monthly or yearly billing.</p>
<form>
	<div class={'plans'}>
		{#each plans as plan (plan.id)}
			<button
				class={$subscription.plan.id === plan.id ? 'active radio-button' : 'radio-button'}
				on:click={() => subscription.changePlan(plan)}
			>
				<img src={`/images/icon-${plan.id}.svg`} alt={`${plan.id}-icon`} />
				<div>
					<div class={'plan-name'}>{plan.props.name}</div>
					<div class={'plan-price'}>
						{$subscription.billing === 'monthly'
							? '$' + plan.props.monthlyPrice + '/mo'
							: '$' + plan.props.yearlyPrice + '/yr'}
					</div>
					{#if $subscription.billing === 'yearly'}
						<div class={'note'}>{'2 months free'}</div>
					{/if}
				</div>
			</button>
		{/each}
	</div>
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
		<div class={$subscription.billing === 'yearly' ? 'text-msf-marine-blue' : 'text-msf-cool-gray'}>
			{'Yearly'}
		</div>
	</div>
</form>

<style lang="postcss">
	form {
		@apply flex flex-col gap-8;
	}

	.billing-toggle {
		@apply flex w-full items-center justify-center gap-5 rounded-md bg-msf-alabaster p-3;
	}

	.billing-toggle > div {
		@apply font-msf-font-medium;
	}

	.radio-button {
		@apply flex cursor-pointer items-center gap-3 rounded-md border border-msf-cool-gray p-3 hover:border-msf-purplish-blue md:w-1/3 md:flex-col md:items-start md:gap-5 md:pr-10;
	}

	.radio-button.active {
		@apply border-msf-purplish-blue bg-msf-magnolia;
	}

	.radio-button > div {
		@apply flex flex-col gap-1 text-left;
	}

	.plans {
		@apply flex flex-col gap-3 md:flex-row;
	}

	.plan-name {
		@apply text-lg font-msf-font-bold text-msf-marine-blue;
	}

	.plan-price {
		@apply font-msf-font-medium text-msf-cool-gray;
	}

	.note {
		@apply text-sm font-msf-font-medium text-msf-marine-blue;
	}
</style>
