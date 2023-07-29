<script lang="ts">
	import { step } from '$lib/stores/step-store';
</script>

<div class="form-step place-self-center">
	<section class="form-content">
		<div class="flex h-full flex-col items-center justify-center">
			<img src="/images/icon-thank-you.svg" alt="checkmark" />
			<h1 class="mt-5">Thank you!</h1>
			<p class="text-center">
				Thanks for confirming your subscription! We hope you have fun using our platform. If you
				ever need support, please feel free to email us at support@loremgaming.com
			</p>
		</div>
	</section>
	<nav class="form-button-wrapper justify-center">
		<button on:click={() => step.updateStep('res')} class={'btn-confirm'}>{'Reset'}</button>
	</nav>
</div>
