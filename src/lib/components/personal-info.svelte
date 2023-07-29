<script lang="ts">
	import { personalInfo } from '$lib/stores/personal-info-store';
</script>

<h1>Personal info</h1>
<p>Please provide your name, email address and phone number.</p>
<form id={'personal-info-form'}>
	<div class="text-field">
		<label for="name">Name</label>
		<input
			required
			type="text"
			name="name"
			id="name"
			placeholder="e.g. Stephen King"
			bind:value={$personalInfo.name}
		/>
	</div>
	<div class="text-field">
		<label for="email">Email Address</label>
		<input
			required
			type="email"
			name="email"
			id="email"
			placeholder="e.g. stephenking@lorem.com"
			bind:value={$personalInfo.email}
		/>
	</div>
	<div class="text-field">
		<label for="phone">Phone Number</label>
		<input
			required
			type="tel"
			name="phone"
			id="phone"
			placeholder="e.g +1 234 567 890"
			bind:value={$personalInfo.phone}
		/>
	</div>
</form>

<style lang="postcss">
	form {
		@apply flex flex-col gap-5;
	}
	.text-field {
		@apply flex flex-col;
	}
</style>
