<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';

	interface PostModule {
		default: unknown;
		metadata: {
			title: string;
			date: string;
			categories: string[];
			excerpt: string;
		};
	}

	const allPostModules = import.meta.glob('../../content/blog/*.md', { eager: true }) as Record<string, PostModule>;

	interface Post {
		slug: string;
		title: string;
		date: string;
		categories: string[];
		excerpt: string;
	}

	const allPosts: Post[] = Object.entries(allPostModules).map(([path, module]) => {
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';
		return {
			slug,
			...module.metadata
		};
	}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const allCategories = ['All', ...new Set(allPosts.flatMap((p) => p.categories))].sort((a, b) => {
		if (a === 'All') return -1;
		if (b === 'All') return 1;
		return a.localeCompare(b);
	});

	let selectedCategory = $state('All');

	const filteredPosts = $derived(
		selectedCategory === 'All'
			? allPosts
			: allPosts.filter((p) => p.categories.includes(selectedCategory))
	);

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blog | GroverLawKC — Kansas City Personal Injury Law Articles</title>
	<meta
		name="description"
		content="Expert articles on personal injury law, car accidents, slip and fall cases, and more from GroverLawKC, Kansas City's award-winning personal injury firm."
	/>
</svelte:head>

<Hero
	title="Personal Injury <span class='gold'>Legal Resources</span>"
	subtitle="Expert articles and guides to help Kansas City accident victims understand their rights and options."
	compact={true}
	showCTA={false}
/>

<section class="blog-hub">
	<div class="container">
		<!-- Category Filter -->
		<div class="category-filter">
			{#each allCategories as cat}
				<button
					class="cat-chip"
					class:active={selectedCategory === cat}
					onclick={() => (selectedCategory = cat)}
				>
					{cat}
				</button>
			{/each}
		</div>

		<!-- Post Grid -->
		{#if filteredPosts.length > 0}
			<div class="posts-grid">
				{#each filteredPosts as post}
					<article class="post-card">
						<div class="post-cats">
							{#each post.categories as cat}
								<span class="post-cat-tag">{cat}</span>
							{/each}
						</div>
						<h2 class="post-title">
							<a href="/blog/{post.slug}">{post.title}</a>
						</h2>
						<p class="post-date">{formatDate(post.date)}</p>
						<p class="post-excerpt">{post.excerpt}</p>
						<a href="/blog/{post.slug}" class="read-more">
							Read Article <span class="arrow">→</span>
						</a>
					</article>
				{/each}
			</div>
		{:else}
			<div class="no-posts">
				<p>No articles found in this category.</p>
				<button onclick={() => (selectedCategory = 'All')} class="btn-primary">
					View All Articles
				</button>
			</div>
		{/if}
	</div>
</section>

<CTABanner />

<style>
	.blog-hub {
		padding: 60px 0;
		background: var(--off-white);
	}

	.category-filter {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 2.5rem;
	}

	.cat-chip {
		background: var(--white);
		border: 1px solid var(--light-gray);
		color: var(--text-dark);
		font-family: var(--font-primary);
		font-size: 0.8rem;
		font-weight: 600;
		padding: 8px 16px;
		border-radius: 100px;
		cursor: pointer;
		transition: all 0.2s;
	}

	.cat-chip:hover {
		border-color: var(--gold);
		color: var(--gold-dark);
	}

	.cat-chip.active {
		background: var(--gold);
		border-color: var(--gold);
		color: #000;
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	.post-card {
		background: var(--white);
		border-radius: var(--card-radius);
		padding: 2rem;
		box-shadow: var(--card-shadow);
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.post-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
	}

	.post-cats {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}

	.post-cat-tag {
		background: rgba(201, 151, 0, 0.1);
		color: var(--gold-dark);
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 3px 8px;
		border-radius: 3px;
	}

	.post-title {
		font-family: var(--font-heading);
		font-size: 1.05rem;
		line-height: 1.3;
	}

	.post-title a {
		color: var(--dark);
		text-decoration: none;
		transition: color 0.2s;
	}

	.post-title a:hover {
		color: var(--gold-dark);
	}

	.post-date {
		font-size: 0.75rem;
		color: var(--gray);
		font-weight: 500;
	}

	.post-excerpt {
		font-size: 0.875rem;
		color: var(--text-dark);
		line-height: 1.6;
		flex: 1;
	}

	.read-more {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: var(--gold);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		text-decoration: none;
		margin-top: 0.3rem;
		transition: gap 0.2s;
	}

	.post-card:hover .read-more {
		gap: 0.7rem;
	}

	.arrow {
		transition: transform 0.2s;
	}

	.post-card:hover .arrow {
		transform: translateX(4px);
	}

	.no-posts {
		text-align: center;
		padding: 3rem;
	}

	.no-posts p {
		color: var(--gray);
		margin-bottom: 1.5rem;
		font-size: 1.1rem;
	}

	@media (max-width: 600px) {
		.posts-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
