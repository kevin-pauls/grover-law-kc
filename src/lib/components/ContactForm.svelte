<script lang="ts">
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMsg = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		status = 'submitting';
		errorMsg = '';

		try {
			const formData = new FormData();
			formData.append('name', name);
			formData.append('email', email);
			formData.append('phone', phone);
			formData.append('message', message);

			const res = await fetch('/contact', {
				method: 'POST',
				body: formData
			});

			if (res.ok) {
				status = 'success';
				name = '';
				email = '';
				phone = '';
				message = '';
			} else {
				const data = await res.json() as { error?: string };
				errorMsg = data.error ?? 'Something went wrong. Please try again.';
				status = 'error';
			}
		} catch {
			errorMsg = 'Network error. Please call us directly at (816) 533-3969.';
			status = 'error';
		}
	}
</script>

<div class="contact-form-wrap">
	{#if status === 'success'}
		<div class="success-msg">
			<div class="success-icon">✓</div>
			<h3>Message Received!</h3>
			<p>Thank you for contacting GroverLawKC. We will reach out within 24 hours. For urgent matters, call us at <a href="tel:8165333969">(816) 533-3969</a>.</p>
		</div>
	{:else}
		<form onsubmit={handleSubmit} class="contact-form">
			<div class="form-group">
				<label for="contact-name">Full Name *</label>
				<input
					id="contact-name"
					type="text"
					bind:value={name}
					placeholder="Your full name"
					required
					disabled={status === 'submitting'}
				/>
			</div>

			<div class="form-row">
				<div class="form-group">
					<label for="contact-email">Email Address *</label>
					<input
						id="contact-email"
						type="email"
						bind:value={email}
						placeholder="your@email.com"
						required
						disabled={status === 'submitting'}
					/>
				</div>
				<div class="form-group">
					<label for="contact-phone">Phone Number</label>
					<input
						id="contact-phone"
						type="tel"
						bind:value={phone}
						placeholder="(816) 555-0100"
						disabled={status === 'submitting'}
					/>
				</div>
			</div>

			<div class="form-group">
				<label for="contact-message">Briefly describe your injury or case *</label>
				<textarea
					id="contact-message"
					bind:value={message}
					placeholder="Tell us what happened and how we can help..."
					rows="5"
					required
					disabled={status === 'submitting'}
				></textarea>
			</div>

			{#if status === 'error'}
				<div class="error-msg">{errorMsg}</div>
			{/if}

			<button type="submit" class="submit-btn" disabled={status === 'submitting'}>
				{#if status === 'submitting'}
					Sending...
				{:else}
					Get My Free Consultation
				{/if}
			</button>

			<p class="form-note">
				⚖️ <strong>No fee unless we win.</strong> Your information is 100% confidential.
			</p>
		</form>
	{/if}
</div>

<style>
	.contact-form-wrap {
		background: var(--white);
		border-radius: var(--card-radius);
		padding: 2rem;
		box-shadow: var(--card-shadow);
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.2rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	label {
		font-family: var(--font-primary);
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: var(--dark);
	}

	input,
	textarea {
		font-family: var(--font-primary);
		font-size: 0.95rem;
		color: var(--text-dark);
		background: var(--off-white);
		border: 1px solid var(--light-gray);
		border-radius: 4px;
		padding: 12px 16px;
		transition: all 0.2s;
		width: 100%;
		resize: vertical;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--gold);
		background: var(--white);
		box-shadow: 0 0 0 3px rgba(201, 151, 0, 0.1);
	}

	input:disabled,
	textarea:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.submit-btn {
		background: var(--cta-gradient);
		background-size: 100% 200%;
		color: #000;
		font-family: var(--font-primary);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 18px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.3s ease;
		width: 100%;
	}

	.submit-btn:hover:not(:disabled) {
		background-position: bottom;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(251, 196, 8, 0.4);
	}

	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.form-note {
		font-size: 0.8rem;
		color: var(--gray);
		text-align: center;
		line-height: 1.5;
	}

	.error-msg {
		background: #fff3cd;
		border: 1px solid #ffc107;
		color: #664d03;
		padding: 12px 16px;
		border-radius: 4px;
		font-size: 0.875rem;
	}

	.success-msg {
		text-align: center;
		padding: 2rem;
	}

	.success-icon {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: #d1e7dd;
		color: #0f5132;
		font-size: 1.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
	}

	.success-msg h3 {
		font-family: var(--font-heading);
		color: var(--dark);
		margin-bottom: 0.8rem;
	}

	.success-msg p {
		color: var(--gray);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	.success-msg a {
		color: var(--gold);
		font-weight: 600;
	}

	@media (max-width: 600px) {
		.form-row {
			grid-template-columns: 1fr;
		}
	}
</style>
