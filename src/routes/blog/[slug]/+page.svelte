<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
	import { Check } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{data.metadata.title} | GroverLawKC Blog</title>
	<meta name="description" content={data.metadata.excerpt} />
	<meta property="og:title" content={data.metadata.title} />
	<meta property="og:description" content={data.metadata.excerpt} />
</svelte:head>

<Hero title={data.metadata.title} compact={true} showCTA={false} />

<section class="blog-post-page">
	<div class="container post-layout">
		<article class="post-content">
			<div class="post-meta">
				<div class="post-cats">
					{#each data.metadata.categories as cat}
						<a href="/blog?category={cat}" class="post-cat-tag">{cat}</a>
					{/each}
				</div>
				<span class="post-date">{formatDate(data.metadata.date)}</span>
			</div>

			<div class="post-body">
				<data.PostContent />
			</div>

			<div class="post-footer">
				<div class="author-box">
					<div class="author-avatar">MG</div>
					<div>
						<p class="author-name">Mark Grover</p>
						<p class="author-bio">
							Personal Injury Attorney — Kansas City & Overland Park, Missouri/Kansas. Voted Best
							Injury Lawyer KC 2022–2025.
						</p>
					</div>
				</div>
				<a href="/blog" class="back-link">← Back to All Articles</a>
			</div>
		</article>

		<aside class="post-sidebar">
			<div class="sidebar-cta">
				<h3>Injured? We Can Help.</h3>
				<p>Free consultation. No fees unless we win.</p>
				<a href="tel:8165333969" class="sidebar-phone">(816) 533-3969</a>
				<a href="/contact" class="btn-primary" style="width: 100%; text-align: center; display: block; margin-top: 0.8rem;">
					Free Case Evaluation
				</a>
			</div>

			<div class="sidebar-promise">
				<div class="promise-items">
					<div class="promise-item">
						<span class="pi-check"><Check size={16} strokeWidth={2} color="#C99700" /></span>
						<span>No fees unless we win</span>
					</div>
					<div class="promise-item">
						<span class="pi-check"><Check size={16} strokeWidth={2} color="#C99700" /></span>
						<span>Available 24/7</span>
					</div>
					<div class="promise-item">
						<span class="pi-check"><Check size={16} strokeWidth={2} color="#C99700" /></span>
						<span>Voted Best KC Injury Lawyer 2022–2025</span>
					</div>
					<div class="promise-item">
						<span class="pi-check"><Check size={16} strokeWidth={2} color="#C99700" /></span>
						<span>20+ Years of experience</span>
					</div>
				</div>
			</div>

			<div class="sidebar-areas">
				<h4>Practice Areas</h4>
				<ul>
					<li><a href="/car-accidents">Car Accidents</a></li>
					<li><a href="/truck-accidents">Truck Accidents</a></li>
					<li><a href="/motorcycle-accidents">Motorcycle Accidents</a></li>
					<li><a href="/slip-and-fall">Slip and Fall</a></li>
					<li><a href="/medical-malpractice">Medical Malpractice</a></li>
					<li><a href="/wrongful-death">Wrongful Death</a></li>
					<li><a href="/personal-injury">Personal Injury</a></li>
				</ul>
			</div>
		</aside>
	</div>
</section>

<CTABanner />

<style>
	.blog-post-page {
		padding: 60px 0;
		background: var(--white);
	}

	.post-layout {
		display: grid;
		grid-template-columns: 1fr 320px;
		gap: 3rem;
		align-items: start;
	}

	.post-meta {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.post-cats {
		display: flex;
		gap: 0.4rem;
	}

	.post-cat-tag {
		background: rgba(201, 151, 0, 0.1);
		color: var(--gold-dark);
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 4px 10px;
		border-radius: 3px;
		text-decoration: none;
	}

	.post-date {
		color: var(--gray);
		font-size: 0.8rem;
	}

	.post-body {
		font-size: 1rem;
		line-height: 1.8;
		color: var(--text-dark);
	}

	:global(.post-body h2) {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		color: var(--dark);
		margin: 2rem 0 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid var(--light-gray);
	}

	:global(.post-body h3) {
		font-family: var(--font-heading);
		font-size: 1.2rem;
		color: var(--dark);
		margin: 1.5rem 0 0.8rem;
	}

	:global(.post-body p) {
		margin-bottom: 1.2rem;
	}

	:global(.post-body ul, .post-body ol) {
		margin: 0 0 1.2rem 1.5rem;
	}

	:global(.post-body li) {
		margin-bottom: 0.4rem;
	}

	:global(.post-body strong) {
		color: var(--dark);
		font-weight: 700;
	}

	:global(.post-body a) {
		color: var(--gold-dark);
		text-decoration: underline;
	}

	:global(.post-body blockquote) {
		border-left: 4px solid var(--gold);
		margin: 1.5rem 0;
		padding: 1rem 1.5rem;
		background: rgba(201, 151, 0, 0.05);
		border-radius: 0 var(--card-radius) var(--card-radius) 0;
	}

	.post-footer {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 2px solid var(--light-gray);
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.author-box {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.author-avatar {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: var(--navy-dark, #0b1a32);
		border: 2px solid var(--gold, #C99700);
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Cinzel', serif;
		font-size: 22px;
		font-weight: 600;
		color: var(--gold, #C99700);
		letter-spacing: 1px;
		flex-shrink: 0;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.author-name {
		font-family: var(--font-heading);
		font-size: 1rem;
		color: var(--dark);
		margin-bottom: 0.3rem;
	}

	.author-bio {
		font-size: 0.8rem;
		color: var(--gray);
		line-height: 1.5;
	}

	.back-link {
		color: var(--gold);
		font-weight: 600;
		font-size: 0.85rem;
		text-decoration: none;
		white-space: nowrap;
		align-self: center;
	}

	.back-link:hover {
		color: var(--gold-dark);
	}

	/* Sidebar */
	.post-sidebar {
		position: sticky;
		top: 120px;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.sidebar-cta {
		background: var(--dark);
		padding: 1.8rem;
		border-radius: var(--card-radius);
		color: var(--white);
		text-align: center;
	}

	.sidebar-cta h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		color: var(--gold-light);
		margin-bottom: 0.4rem;
	}

	.sidebar-cta p {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: 1rem;
	}

	.sidebar-phone {
		display: block;
		font-family: var(--font-heading);
		font-size: 1.4rem;
		color: var(--gold-light);
		text-decoration: none;
		margin-bottom: 0.5rem;
		font-weight: 700;
	}

	.sidebar-promise {
		background: rgba(201, 151, 0, 0.06);
		border: 1px solid rgba(201, 151, 0, 0.2);
		border-radius: var(--card-radius);
		padding: 1.2rem;
	}

	.promise-items {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.promise-item {
		display: flex;
		gap: 0.6rem;
		align-items: center;
		font-size: 0.85rem;
		color: var(--text-dark);
	}

	.pi-check {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.sidebar-areas {
		background: var(--white);
		border: 1px solid var(--light-gray);
		border-radius: var(--card-radius);
		padding: 1.2rem;
	}

	.sidebar-areas h4 {
		font-family: var(--font-heading);
		font-size: 0.9rem;
		color: var(--dark);
		margin-bottom: 0.8rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--light-gray);
	}

	.sidebar-areas ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.sidebar-areas li a {
		color: var(--text-dark);
		font-size: 0.85rem;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		transition: color 0.2s;
	}

	.sidebar-areas li a::before {
		content: '›';
		color: var(--gold);
	}

	.sidebar-areas li a:hover {
		color: var(--gold-dark);
	}

	@media (max-width: 1024px) {
		.post-layout {
			grid-template-columns: 1fr;
		}

		.post-sidebar {
			position: static;
		}
	}
</style>
