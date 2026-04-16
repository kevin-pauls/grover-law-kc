<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
	import { Phone, MapPin, Clock, Check } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Contact Us — Free Consultation | GroverLawKC Kansas City Injury Lawyer</title>
	<meta
		name="description"
		content="Contact GroverLawKC for a free case evaluation. No fees unless we win. Available 24/7. Call (816) 533-3969 or (913) 432-1000."
	/>
</svelte:head>

<Hero
	title="Injured? You Deserve Answers — <span class='gold'>And You Deserve Them Now</span>"
	subtitle="Contact us today for a free, no-obligation consultation. We respond within 24 hours. Available 24/7."
	compact={true}
	showCTA={false}
/>

<section class="contact-page">
	<div class="container contact-layout">
		<!-- Contact Info Column -->
		<div class="contact-info-col">
			<h2>Contact GroverLawKC</h2>
			<p class="contact-intro">
				Whether you were in a car accident, suffered a slip and fall, or lost a loved one to someone
				else's negligence, we are here to help. Reach out to us today — the consultation is free and
				we charge no fees unless we win.
			</p>

			<div class="info-cards">
				<div class="info-card">
					<div class="info-card-icon"><Phone size={28} strokeWidth={1.5} color="#C99700" /></div>
					<div class="info-card-content">
						<h3>Kansas City</h3>
						<a href="tel:8165333969">(816) 533-3969</a>
					</div>
				</div>

				<div class="info-card">
					<div class="info-card-icon"><Phone size={28} strokeWidth={1.5} color="#C99700" /></div>
					<div class="info-card-content">
						<h3>Overland Park</h3>
						<a href="tel:9134321000">(913) 432-1000</a>
					</div>
				</div>

				<div class="info-card">
					<div class="info-card-icon"><MapPin size={28} strokeWidth={1.5} color="#C99700" /></div>
					<div class="info-card-content">
						<h3>Office Address</h3>
						<p>7221 W 79th St, Ste 100</p>
						<p>Overland Park, KS 66204</p>
					</div>
				</div>

				<div class="info-card">
					<div class="info-card-icon"><Clock size={28} strokeWidth={1.5} color="#C99700" /></div>
					<div class="info-card-content">
						<h3>Office Hours</h3>
						<p>Monday – Friday: 8am – 6pm</p>
						<p>Emergency: Available 24/7</p>
					</div>
				</div>
			</div>

			<div class="promises">
				<h3>Our Promise To You</h3>
				<div class="promise-list">
					<div class="promise-item">
						<span class="promise-check"><Check size={16} strokeWidth={2} color="#C99700" /></span>
						<p><strong>We respond within 24 hours</strong> — often much sooner</p>
					</div>
					<div class="promise-item">
						<span class="promise-check"><Check size={16} strokeWidth={2} color="#C99700" /></span>
						<p><strong>No fee unless we win</strong> your case</p>
					</div>
					<div class="promise-item">
						<span class="promise-check"><Check size={16} strokeWidth={2} color="#C99700" /></span>
						<p><strong>Your information is completely confidential</strong></p>
					</div>
					<div class="promise-item">
						<span class="promise-check"><Check size={16} strokeWidth={2} color="#C99700" /></span>
						<p><strong>No pressure, no obligation</strong> — just honest advice</p>
					</div>
					<div class="promise-item">
						<span class="promise-check"><Check size={16} strokeWidth={2} color="#C99700" /></span>
						<p><strong>We will come to you</strong> if you cannot come to us</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Form Column -->
		<div class="form-col">
			<div class="form-header">
				<h2>Send Us a Message</h2>
				<p>Fill out the form below and we will be in touch promptly.</p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>

<CTABanner />

<style>
	.contact-page {
		padding: 60px 0;
		background: var(--off-white);
	}

	.contact-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.contact-info-col h2,
	.form-header h2 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		color: var(--dark);
		margin-bottom: 1rem;
	}

	.contact-intro {
		color: var(--text-dark);
		font-size: 0.95rem;
		line-height: 1.8;
		margin-bottom: 2rem;
	}

	.info-cards {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2.5rem;
	}

	.info-card {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		background: var(--white);
		padding: 1.2rem;
		border-radius: var(--card-radius);
		box-shadow: var(--card-shadow);
	}

	.info-card-icon {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.info-card-content h3 {
		font-family: var(--font-heading);
		font-size: 0.9rem;
		color: var(--dark);
		margin-bottom: 0.3rem;
	}

	.info-card-content a {
		color: var(--gold-dark);
		font-family: var(--font-heading);
		font-size: 1.2rem;
		font-weight: 700;
		text-decoration: none;
		transition: color 0.2s;
	}

	.info-card-content a:hover {
		color: var(--gold);
	}

	.info-card-content p {
		color: var(--text-dark);
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.promises {
		background: var(--dark);
		padding: 1.8rem;
		border-radius: var(--card-radius);
		color: var(--white);
	}

	.promises h3 {
		font-family: var(--font-heading);
		font-size: 1rem;
		color: var(--gold-light);
		margin-bottom: 1.2rem;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.promise-list {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	.promise-item {
		display: flex;
		align-items: flex-start;
		gap: 0.8rem;
	}

	.promise-check {
		display: flex;
		align-items: center;
		flex-shrink: 0;
		margin-top: 0.1rem;
	}

	.promise-item p {
		color: rgba(255, 255, 255, 0.8);
		font-size: 0.875rem;
		line-height: 1.5;
	}

	.promise-item strong {
		color: var(--white);
	}

	.form-header p {
		color: var(--gray);
		margin-bottom: 1.5rem;
	}

	@media (max-width: 900px) {
		.contact-layout {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
