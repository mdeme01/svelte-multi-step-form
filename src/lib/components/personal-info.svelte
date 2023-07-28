<section>
	<h1>Personal info</h1>
	<p>Please provide your name, email address and phone number.</p>
	<form>
		<div class="text-field">
			<label for="name">Name</label>
			<input type="text" name="name" id="name" placeholder="e.g. Stephen King" />
		</div>
		<div class="text-field">
			<label for="email">Email Address</label>
			<input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" />
		</div>
		<div class="text-field">
			<label for="phone">Phone Number</label>
			<input type="tel" name="phone" id="phone" placeholder="e.g +1 234 567 890" />
		</div>
	</form>
</section>

<style lang="postcss">
	form {
		@apply flex flex-col gap-5;
	}
	.text-field {
		@apply flex flex-col;
	}
</style>
