<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
	import PracticeAreaCard from '$lib/components/PracticeAreaCard.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { practiceAreas, type PracticeArea } from '$lib/data/practice-areas';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const relatedAreas = $derived<PracticeArea[]>(
		data.area.relatedAreas
			.map((slug: string) => practiceAreas.find((a) => a.slug === slug))
			.filter((a): a is PracticeArea => a !== undefined)
	);
</script>

<svelte:head>
	<title>{data.area.title} | GroverLawKC — Kansas City Personal Injury Lawyer</title>
	<meta name="description" content={data.area.metaDescription} />
	<meta property="og:title" content={data.area.title} />
	<meta property="og:description" content={data.area.metaDescription} />
</svelte:head>

<Hero title={data.area.title} compact={true} showCTA={false} />

<section class="practice-content">
	<div class="container content-layout">
		<!-- Main Content -->
		<article class="main-content">
			<p class="intro-text">{data.area.intro}</p>

			{#each data.area.sections as section}
				<div class="content-section">
					<h2>{section.heading}</h2>
					{#each section.body.split('\n\n') as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			{/each}

			<!-- Call to Action -->
			<div class="content-cta">
				<h3>Ready to Discuss Your Case?</h3>
				<p>
					If you or a loved one was injured in Kansas City or Overland Park, contact GroverLawKC
					today. The consultation is free, and there are no fees unless we win.
				</p>
				<div class="cta-buttons">
					<a href="/contact" class="btn-primary">Free Case Evaluation</a>
					<a href="tel:8165333969" class="btn-call">(816) 533-3969</a>
				</div>
			</div>
		</article>

		<!-- Sidebar -->
		<aside class="sidebar">
			<div class="sidebar-form">
				<div class="sidebar-form-header">
					<h3>Free Case Evaluation</h3>
					<p>No fees unless we win. Available 24/7.</p>
				</div>
				<ContactForm />
			</div>

			<div class="sidebar-contact">
				<h4>Call Us Now</h4>
				<a href="tel:8165333969" class="sidebar-phone">
					<span class="phone-icon">📞</span>
					(816) 533-3969
				</a>
				<a href="tel:9134321000" class="sidebar-phone">
					<span class="phone-icon">📞</span>
					(913) 432-1000
				</a>
				<p class="available">Available 24 hours / 7 days</p>
			</div>

			<div class="sidebar-promise">
				<div class="promise-icon">⚖️</div>
				<strong>No Fee Unless We Win</strong>
				<p>You pay nothing until we recover compensation for you.</p>
			</div>
		</aside>
	</div>
</section>

<!-- Related Practice Areas -->
{#if relatedAreas.length > 0}
	<section class="related-areas">
		<div class="container">
			<h2>Related Practice Areas</h2>
			<div class="related-grid">
				{#each relatedAreas as related}
					<PracticeAreaCard
						title={related.menuTitle}
						slug={related.slug}
						description={related.intro.slice(0, 100) + '...'}
						icon={related.icon}
					/>
				{/each}
			</div>
		</div>
	</section>
{/if}

<CTABanner />

<style>
	.practice-content {
		padding: 60px 0;
		background: var(--white);
	}

	.content-layout {
		display: grid;
		grid-template-columns: 1fr 380px;
		gap: 3rem;
		align-items: start;
	}

	.intro-text {
		font-size: 1.1rem;
		color: var(--text-dark);
		line-height: 1.8;
		margin-bottom: 2.5rem;
		padding: 1.5rem;
		background: rgba(201, 151, 0, 0.05);
		border-left: 4px solid var(--gold);
		border-radius: 0 var(--card-radius) var(--card-radius) 0;
	}

	.content-section {
		margin-bottom: 2.5rem;
	}

	.content-section h2 {
		font-family: var(--font-heading);
		font-size: 1.4rem;
		color: var(--dark);
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid var(--light-gray);
	}

	.content-section p {
		color: var(--text-dark);
		font-size: 0.95rem;
		line-height: 1.8;
		margin-bottom: 1rem;
	}

	.content-cta {
		background: var(--dark);
		color: var(--white);
		padding: 2rem;
		border-radius: var(--card-radius);
		margin-top: 2rem;
	}

	.content-cta h3 {
		font-family: var(--font-heading);
		font-size: 1.3rem;
		margin-bottom: 0.8rem;
		color: var(--gold-light);
	}

	.content-cta p {
		color: rgba(255, 255, 255, 0.8);
		font-size: 0.9rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.btn-call {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--gold-light);
		text-decoration: none;
	}

	/* Sidebar */
	.sidebar {
		position: sticky;
		top: 120px;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.sidebar-form {
		background: var(--off-white);
		border-radius: var(--card-radius);
		overflow: hidden;
		box-shadow: var(--card-shadow);
	}

	.sidebar-form-header {
		background: var(--dark);
		padding: 1.2rem 1.5rem;
		color: var(--white);
	}

	.sidebar-form-header h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		color: var(--gold-light);
		margin-bottom: 0.2rem;
	}

	.sidebar-form-header p {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.6);
	}

	.sidebar-contact {
		background: var(--white);
		border: 1px solid var(--light-gray);
		border-radius: var(--card-radius);
		padding: 1.5rem;
	}

	.sidebar-contact h4 {
		font-family: var(--font-heading);
		font-size: 1rem;
		color: var(--dark);
		margin-bottom: 1rem;
	}

	.sidebar-phone {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--gold-dark);
		font-family: var(--font-heading);
		font-size: 1.2rem;
		font-weight: 700;
		text-decoration: none;
		margin-bottom: 0.5rem;
		transition: color 0.2s;
	}

	.sidebar-phone:hover {
		color: var(--gold);
	}

	.phone-icon {
		font-size: 1rem;
	}

	.available {
		font-size: 0.75rem;
		color: var(--gray);
		margin-top: 0.5rem;
	}

	.sidebar-promise {
		background: rgba(201, 151, 0, 0.08);
		border: 1px solid rgba(201, 151, 0, 0.3);
		border-radius: var(--card-radius);
		padding: 1.2rem;
		text-align: center;
	}

	.promise-icon {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.sidebar-promise strong {
		display: block;
		font-family: var(--font-heading);
		font-size: 0.9rem;
		color: var(--dark);
		margin-bottom: 0.4rem;
	}

	.sidebar-promise p {
		font-size: 0.8rem;
		color: var(--gray);
		line-height: 1.5;
	}

	/* Related Areas */
	.related-areas {
		background: var(--off-white);
		padding: 60px 0;
	}

	.related-areas h2 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		color: var(--dark);
		margin-bottom: 2rem;
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.2rem;
	}

	@media (max-width: 1024px) {
		.content-layout {
			grid-template-columns: 1fr;
		}

		.sidebar {
			position: static;
		}
	}
</style>
