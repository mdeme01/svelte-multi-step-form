<script lang="ts">
	import { step } from '$lib/stores/step-store';
</script>

<div class="form-step md:place-self-center">
	<section class="form-content text-center">
		<div class="mt-20 flex justify-center">
			<img src="/images/icon-thank-you.svg" alt="checkmark" />
		</div>
		<h1 class="mb-5 mt-5">Thank you!</h1>
		<p class="mb-16 text-msf-cool-gray">
			Thanks for confirming your subscription! We hope you have fun using our platform. If you ever
			need support, please feel free to email us at support@loremgaming.com
		</p>
	</section>
	<nav class="form-button-wrapper justify-center">
		<button on:click={() => step.updateStep('res')} class={'btn-confirm'}>{'Reset'}</button>
	</nav>
</div>
