<script lang="ts">
	import { personalInfo } from '$lib/stores/personal-info-store';
	import { step } from '$lib/stores/step-store';
</script>

<form on:submit={() => step.updateStep('inc')} class="form-step">
	<section class="form-content">
		<h1>Personal info</h1>
		<p class="text-msf-cool-gray">Please provide your name, email address and phone number.</p>
		<label>
			<p>Name</p>
			<input
				required
				type="text"
				name="name"
				id="name"
				placeholder="e.g. Stephen King"
				bind:value={$personalInfo.name}
				class="w-full"
			/>
		</label>
		<label>
			<p>Email</p>
			<input
				required
				type="email"
				name="email"
				id="email"
				placeholder="e.g. stephenking@lorem.com"
				bind:value={$personalInfo.email}
				class="w-full"
			/>
		</label>
		<label>
			<p>Phone Number</p>
			<input
				required
				type="tel"
				name="phone"
				id="phone"
				placeholder="e.g +1 234 567 890"
				bind:value={$personalInfo.phone}
				class="w-full"
			/>
		</label>
	</section>
	<nav class="form-button-wrapper justify-end">
		<button type="submit" class="btn-next">Next Step</button>
	</nav>
</form>
