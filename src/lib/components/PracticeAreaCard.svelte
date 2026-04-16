<script lang="ts">
	interface Props {
		title: string;
		slug: string;
		description: string;
		icon?: string;
	}

	let { title, slug, description, icon = '⚖️' }: Props = $props();
</script>

<a href="/{slug}" class="practice-card">
	<div class="card-icon">{icon}</div>
	<h3 class="card-title">{title}</h3>
	<p class="card-description">{description}</p>
	<span class="card-link">
		Learn More <span class="arrow">→</span>
	</span>
</a>

<style>
	.practice-card {
		display: flex;
		flex-direction: column;
		background: var(--white);
		border-radius: var(--card-radius);
		padding: 2rem 1.5rem;
		box-shadow: var(--card-shadow);
		text-decoration: none;
		color: var(--text-dark);
		transition: all 0.3s ease;
		border-bottom: 3px solid transparent;
		position: relative;
		overflow: hidden;
	}

	.practice-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 4px;
		height: 100%;
		background: var(--gold);
		transform: scaleY(0);
		transition: transform 0.3s ease;
		transform-origin: bottom;
	}

	.practice-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
		border-bottom-color: var(--gold);
	}

	.practice-card:hover::before {
		transform: scaleY(1);
	}

	.card-icon {
		font-size: 2.2rem;
		margin-bottom: 1rem;
	}

	.card-title {
		font-family: var(--font-heading);
		font-size: 1rem;
		font-weight: 700;
		color: var(--dark);
		margin-bottom: 0.7rem;
		line-height: 1.3;
	}

	.card-description {
		font-size: 0.85rem;
		color: var(--gray);
		line-height: 1.6;
		flex: 1;
		margin-bottom: 1.2rem;
	}

	.card-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--gold);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		transition: gap 0.2s;
	}

	.practice-card:hover .card-link {
		gap: 0.8rem;
	}

	.arrow {
		transition: transform 0.2s;
	}

	.practice-card:hover .arrow {
		transform: translateX(4px);
	}
</style>
