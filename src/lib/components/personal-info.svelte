<script lang="ts">
	import { personalInfo } from '$lib/stores/personal-info-store';
	import { step } from '$lib/stores/step-store';

	let nameError = false;
	let emailError = false;
	let phoneError = false;
</script>

<form on:submit|preventDefault={() => step.updateStep('inc')} class="form-step">
	<section class="form-content">
		<h1>Personal info</h1>
		<p class="mb-8 text-msf-cool-gray">Please provide your name, email address and phone number.</p>
		<label>
			<div class="flex items-center justify-between">
				<p>Name</p>
				<p hidden={!nameError} class="font-bold text-msf-strawberry-red">This field is required</p>
			</div>
			<input
				required
				type="text"
				id="name"
				placeholder="e.g. Stephen King"
				bind:value={$personalInfo.name}
				on:invalid={() => (nameError = true)}
				class={nameError
					? 'text-input border-msf-strawberry-red focus:border-msf-strawberry-red'
					: 'text-input border-msf-cool-gray/60 focus:border-msf-purplish-blue'}
			/>
		</label>
		<label class="mb-5">
			<div class="flex items-center justify-between">
				<p>Email</p>
				<p hidden={!emailError} class="font-bold text-msf-strawberry-red">This field is required</p>
			</div>
			<input
				required
				type="email"
				id="email"
				placeholder="e.g. stephenking@lorem.com"
				bind:value={$personalInfo.email}
				on:invalid={() => (emailError = true)}
				class={emailError
					? 'text-input border-msf-strawberry-red focus:border-msf-strawberry-red'
					: 'text-input border-msf-cool-gray/60 focus:border-msf-purplish-blue'}
			/>
		</label>
		<label>
			<div class="flex items-center justify-between">
				<p>Phone Number</p>
				<p hidden={!phoneError} class="font-bold text-msf-strawberry-red">This field is required</p>
			</div>
			<input
				required
				type="tel"
				id="phone"
				placeholder="e.g +1 234 567 890"
				bind:value={$personalInfo.phone}
				on:invalid={() => (phoneError = true)}
				class={phoneError
					? 'text-input border-msf-strawberry-red focus:border-msf-strawberry-red'
					: 'text-input border-msf-cool-gray/60 focus:border-msf-purplish-blue'}
			/>
		</label>
	</section>
	<nav class="form-button-wrapper justify-end">
		<button type="submit" class="btn-next">Next Step</button>
	</nav>
</form>
