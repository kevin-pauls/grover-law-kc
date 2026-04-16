<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
	import AwardBadges from '$lib/components/AwardBadges.svelte';
	import TestimonialCarousel from '$lib/components/TestimonialCarousel.svelte';
	import PracticeAreaCard from '$lib/components/PracticeAreaCard.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { vehicleAreas, injuryAreas } from '$lib/data/practice-areas';

	const featuredAreas = [
		...vehicleAreas.slice(0, 5),
		...injuryAreas.slice(0, 5)
	];

	const faqs = [
		{
			question: 'How much does it cost to hire GroverLawKC?',
			answer:
				'Nothing upfront. We work on a contingency fee basis — no fees unless we win your case. You pay nothing out of pocket to get started. We advance all costs of the case, including investigation, expert witnesses, and court filing fees.'
		},
		{
			question: 'What should I do after an accident?',
			answer:
				'First, seek medical attention immediately — even if you feel fine. Some serious injuries, including traumatic brain injuries and internal injuries, may not be immediately apparent. Document the scene with photos, get contact information from witnesses, file a police report, and then contact us for a free consultation before speaking with any insurance adjuster.'
		},
		{
			question: 'How long do I have to file a personal injury claim?',
			answer:
				'Missouri has a 5-year statute of limitations for most personal injury claims; Kansas has 2 years from the date of injury. However, there are exceptions that can shorten these deadlines — for example, claims against government entities often require notice within 90 days. Do not wait to consult with an attorney. Evidence disappears and memories fade quickly after an accident.'
		},
		{
			question: 'What types of damages can I recover?',
			answer:
				'You may be entitled to recover economic damages including medical expenses (past and future), lost wages and reduced earning capacity, and property damage. Non-economic damages include pain and suffering, emotional distress, loss of enjoyment of life, and loss of consortium. In cases of intentional or egregiously reckless conduct, punitive damages may also be available.'
		},
		{
			question: 'How long does a personal injury case take?',
			answer:
				'Every case is different. Many cases settle without going to trial within 6–18 months. More complex cases or those that proceed to trial can take longer. We keep you informed throughout the process and move as efficiently as possible while ensuring we build the strongest possible case for you.'
		},
		{
			question: 'Will my case go to trial?',
			answer:
				'The vast majority of personal injury cases settle before trial. However, we prepare every case as if it will go to trial — because insurance companies offer better settlements when they know an attorney is fully prepared and willing to fight in court. We are experienced trial lawyers and are not afraid to take your case before a jury if that is what it takes to get you a fair result.'
		}
	];
</script>

<svelte:head>
	<title>Kansas City Personal Injury Lawyer | GroverLawKC — No Fee Unless We Win</title>
	<meta
		name="description"
		content="Award-winning injury law firm serving Kansas City & Overland Park. 20+ years fighting for accident victims. Free consultation — call (816) 533-3969. No fees unless we win."
	/>
	<meta property="og:title" content="GroverLawKC — Kansas City Personal Injury Lawyer" />
	<meta
		property="og:description"
		content="Award-winning injury law firm serving Kansas City & Overland Park. Voted Best Injury Lawyer KC 2022–2025. Free consultation."
	/>
	<meta property="og:url" content="https://groverlawkc.com/" />
</svelte:head>

<Hero
	title="Kansas City's <span class='gold'>Best Injury Lawyer</span>"
	subtitle="Millions won for injured victims across Kansas City and Overland Park. No fees unless we win — that's our promise to you."
	showCTA={true}
/>

<section class="stats-bar">
	<div class="container stats-grid">
		<div class="stat-item">
			<div class="stat-icon">⚖️</div>
			<div class="stat-content">
				<strong>No Fees Unless You Win</strong>
				<p>Zero upfront cost — ever</p>
			</div>
		</div>
		<div class="stat-divider"></div>
		<div class="stat-item">
			<div class="stat-icon">💰</div>
			<div class="stat-content">
				<strong>Millions Won For Victims</strong>
				<p>Maximum compensation, always</p>
			</div>
		</div>
		<div class="stat-divider"></div>
		<div class="stat-item">
			<div class="stat-icon">📞</div>
			<div class="stat-content">
				<strong>Free Consultation 24/7</strong>
				<p>We're here when you need us</p>
			</div>
		</div>
	</div>
</section>

<CTABanner />

<section class="awards-section">
	<div class="container">
		<div class="section-header-centered">
			<p class="eyebrow">Recognition</p>
			<h2>Voted Best Injury Lawyer in KC</h2>
			<p class="subtitle">Four consecutive years of recognition from the Kansas City community.</p>
		</div>
		<AwardBadges />
	</div>
</section>

<TestimonialCarousel />

<section class="bio-section">
	<div class="container bio-grid">
		<div class="bio-image-col">
			<div class="bio-image-placeholder">
				<div class="attorney-icon">⚖️</div>
				<p class="attorney-name">Mark Grover</p>
				<p class="attorney-title">Personal Injury Attorney</p>
				<p class="attorney-location">Kansas City, Missouri</p>
			</div>
			<div class="bio-credentials">
				<div class="credential">
					<span class="cred-icon">🎓</span>
					<span>Licensed in Missouri & Kansas</span>
				</div>
				<div class="credential">
					<span class="cred-icon">⏱️</span>
					<span>20+ Years of Experience</span>
				</div>
				<div class="credential">
					<span class="cred-icon">⭐</span>
					<span>Voted Best KC Injury Lawyer 2022–2025</span>
				</div>
			</div>
		</div>
		<div class="bio-content">
			<span class="bio-eyebrow">Meet Your Attorney</span>
			<h2>Mark Grover — Fighting For Kansas City's Injured</h2>
			<p>
				For more than two decades, Mark Grover has dedicated his career to fighting for people who
				have been hurt through no fault of their own. As a Kansas City native, he understands the
				roads, the courts, and the insurance companies that operate here — and he uses that knowledge
				every day to advocate for accident victims and their families throughout the metro area.
			</p>
			<p>
				Mark's approach is straightforward: treat every client like family, investigate every case
				thoroughly, and never back down when insurance companies try to lowball a settlement. This
				philosophy has resulted in millions of dollars recovered for clients injured in car accidents,
				truck collisions, motorcycle crashes, slip and falls, and a wide range of other accidents
				caused by others' negligence.
			</p>
			<p>
				When you hire GroverLawKC, you hire a firm that works for you — not for a quick settlement
				fee. Mark and his team will communicate with you directly, answer your questions honestly, and
				prepare your case with the same dedication whether it settles for a fair amount or goes all
				the way to trial. His four consecutive "Best Injury Lawyer in Kansas City" awards reflect what
				his clients already know: Mark Grover fights and wins.
			</p>
			<div class="bio-ctas">
				<a href="/contact" class="btn-primary">Schedule Free Consultation</a>
				<a href="tel:8165333969" class="btn-phone">(816) 533-3969</a>
			</div>
		</div>
	</div>
</section>

<section class="practice-areas-section">
	<div class="container">
		<div class="section-header-centered">
			<p class="eyebrow">What We Handle</p>
			<h2>Practice Areas</h2>
			<p class="subtitle">
				From car accidents to catastrophic injuries, we fight for victims across a wide range of
				personal injury claims.
			</p>
		</div>
		<div class="practice-grid">
			{#each featuredAreas as area}
				<PracticeAreaCard
					title={area.menuTitle}
					slug={area.slug}
					description={area.intro.slice(0, 120) + '...'}
					icon={area.icon}
				/>
			{/each}
		</div>
		<div class="view-all">
			<a href="/practice-areas" class="btn-primary">View All Practice Areas</a>
		</div>
	</div>
</section>

<section class="faq-section">
	<div class="container faq-layout">
		<div class="faq-header">
			<p class="eyebrow">Common Questions</p>
			<h2>Frequently Asked Questions</h2>
			<p class="faq-subtitle">
				Honest answers about how personal injury cases work in Kansas City and Overland Park.
			</p>
			<a href="/contact" class="btn-primary" style="margin-top: 1.5rem; display: inline-block;">
				Ask Us Directly
			</a>
		</div>
		<div class="faq-content">
			<FAQAccordion items={faqs} />
		</div>
	</div>
</section>

<section class="contact-section">
	<div class="container contact-layout">
		<div class="contact-intro">
			<p class="eyebrow contact-eyebrow">Free Consultation</p>
			<h2>Get Your Free Case Evaluation Today</h2>
			<p>
				Don't wait. Insurance companies start building their case immediately after an accident.
				Contact us now and let us start fighting for you.
			</p>
			<div class="contact-info">
				<div class="info-item">
					<span class="info-icon">📞</span>
					<div>
						<p class="info-label">Kansas City</p>
						<a href="tel:8165333969" class="info-value">(816) 533-3969</a>
					</div>
				</div>
				<div class="info-item">
					<span class="info-icon">📞</span>
					<div>
						<p class="info-label">Overland Park</p>
						<a href="tel:9134321000" class="info-value">(913) 432-1000</a>
					</div>
				</div>
				<div class="info-item">
					<span class="info-icon">📍</span>
					<div>
						<p class="info-label">Office</p>
						<p class="info-value">7221 W 79th St, Ste 100<br />Overland Park, KS 66204</p>
					</div>
				</div>
				<div class="info-item">
					<span class="info-icon">⏰</span>
					<div>
						<p class="info-label">Availability</p>
						<p class="info-value">24 Hours / 7 Days a Week</p>
					</div>
				</div>
			</div>
		</div>
		<div class="contact-form-col">
			<ContactForm />
		</div>
	</div>
</section>

<CTABanner text="HAVE QUESTIONS? WE HAVE ANSWERS — CALL NOW" />

<style>
	.stats-bar {
		background: var(--dark);
		padding: 30px 0;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: 1fr auto 1fr auto 1fr;
		align-items: center;
		gap: 1rem;
	}

	.stat-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: center;
	}

	.stat-icon {
		font-size: 1.8rem;
	}

	.stat-content strong {
		display: block;
		font-family: var(--font-heading);
		font-size: 1rem;
		color: var(--white);
		margin-bottom: 0.2rem;
	}

	.stat-content p {
		font-size: 0.8rem;
		color: var(--gray);
	}

	.stat-divider {
		width: 1px;
		height: 50px;
		background: rgba(255, 255, 255, 0.15);
	}

	.awards-section {
		background: var(--off-white);
		padding: var(--section-padding);
	}

	.section-header-centered {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-header-centered h2 {
		font-family: var(--font-heading);
		font-size: 2rem;
		color: var(--dark);
		margin-bottom: 0.8rem;
	}

	.eyebrow {
		font-family: var(--font-primary);
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 3px;
		color: var(--gold);
		margin-bottom: 0.8rem;
		display: block;
	}

	.subtitle {
		color: var(--gray);
		max-width: 550px;
		margin: 0 auto;
		font-size: 0.95rem;
	}

	.bio-section {
		background: var(--white);
		padding: var(--section-padding);
	}

	.bio-grid {
		display: grid;
		grid-template-columns: 360px 1fr;
		gap: 4rem;
		align-items: start;
	}

	.bio-image-placeholder {
		background: var(--light-gray);
		border-radius: var(--card-radius);
		padding: 3rem 2rem;
		text-align: center;
		border: 2px solid rgba(201, 151, 0, 0.2);
	}

	.attorney-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
	}

	.attorney-name {
		font-family: var(--font-heading);
		font-size: 1.4rem;
		color: var(--dark);
		margin-bottom: 0.2rem;
	}

	.attorney-title {
		color: var(--gold);
		font-weight: 600;
		font-size: 0.9rem;
		margin-bottom: 0.2rem;
	}

	.attorney-location {
		color: var(--gray);
		font-size: 0.85rem;
	}

	.bio-credentials {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}

	.credential {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.85rem;
		color: var(--text-dark);
	}

	.cred-icon {
		font-size: 1rem;
	}

	.bio-eyebrow {
		font-family: var(--font-primary);
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 3px;
		color: var(--gold);
		margin-bottom: 0.8rem;
		display: block;
	}

	.bio-content h2 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		color: var(--dark);
		margin-bottom: 1.5rem;
		line-height: 1.2;
	}

	.bio-content p {
		color: var(--text-dark);
		font-size: 0.95rem;
		line-height: 1.8;
		margin-bottom: 1.2rem;
	}

	.bio-ctas {
		display: flex;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 1.5rem;
	}

	.btn-phone {
		font-family: var(--font-heading);
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--gold);
		text-decoration: none;
		transition: color 0.2s;
	}

	.btn-phone:hover {
		color: var(--gold-dark);
	}

	.practice-areas-section {
		background: var(--off-white);
		padding: var(--section-padding);
	}

	.practice-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2.5rem;
	}

	.view-all {
		text-align: center;
	}

	.faq-section {
		background: var(--white);
		padding: var(--section-padding);
	}

	.faq-layout {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 4rem;
		align-items: start;
	}

	.faq-header h2 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		color: var(--dark);
		margin-bottom: 1rem;
	}

	.faq-subtitle {
		color: var(--gray);
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.contact-section {
		background: var(--dark);
		padding: var(--section-padding);
	}

	.contact-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.contact-eyebrow {
		color: var(--gold-light) !important;
	}

	.contact-intro h2 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		color: var(--white);
		margin-bottom: 1rem;
	}

	.contact-intro > p {
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.95rem;
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.contact-info {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.info-item {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}

	.info-icon {
		font-size: 1.3rem;
		flex-shrink: 0;
		margin-top: 0.1rem;
	}

	.info-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--gray);
		margin-bottom: 0.2rem;
	}

	.info-value {
		color: var(--white);
		font-size: 0.95rem;
		font-weight: 500;
		text-decoration: none;
		line-height: 1.5;
		display: block;
	}

	a.info-value:hover {
		color: var(--gold-light);
	}

	@media (max-width: 1024px) {
		.bio-grid {
			grid-template-columns: 1fr;
		}

		.bio-image-col {
			max-width: 380px;
		}

		.faq-layout {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.contact-layout {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	@media (max-width: 768px) {
		.stats-grid {
			grid-template-columns: 1fr;
		}

		.stat-divider {
			display: none;
		}

		.practice-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 480px) {
		.practice-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
