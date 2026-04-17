<script lang="ts">
	import { Phone, Check } from 'lucide-svelte';

	interface Props {
		title: string;
		subtitle?: string;
		showCTA?: boolean;
		compact?: boolean;
	}

	let { title, subtitle = '', showCTA = true, compact = false }: Props = $props();
</script>

<section class="hero" class:compact>
	<div class="hero-overlay"></div>
	<div class="container hero-inner">
		<div class="hero-content">
			<div class="hero-badge">Kansas City Personal Injury Attorneys</div>
			<h1 class="hero-title">{@html title}</h1>
			{#if subtitle}
				<p class="hero-subtitle">{subtitle}</p>
			{/if}
			{#if showCTA}
				<div class="hero-ctas">
					<a href="tel:8165333969" class="btn-cta btn-cta-primary">
						<span class="btn-icon"><Phone size={20} strokeWidth={1.5} /></span>
						Call Now Free
					</a>
					<a href="/contact" class="btn-cta btn-cta-outline">Free Consultation</a>
				</div>
				<div class="hero-trust">
					<span><Check size={16} strokeWidth={2} color="#C99700" /> No Fee Unless You Win</span>
					<span><Check size={16} strokeWidth={2} color="#C99700" /> Available 24/7</span>
					<span><Check size={16} strokeWidth={2} color="#C99700" /> Free Consultation</span>
				</div>
			{/if}
		</div>
		{#if !compact}
			<div class="hero-image-wrap">
				<div class="hero-image-frame">
					<img src="/images/attorney/mark-grover-home-banner.webp" alt="Mark Grover, Kansas City Personal Injury Attorney" width="400" height="533" loading="eager" />
				</div>
				<div class="hero-stats">
					<div class="stat">
						<span class="stat-num">20+</span>
						<span class="stat-label">Years Experience</span>
					</div>
					<div class="stat">
						<span class="stat-num">$M+</span>
						<span class="stat-label">Won For Clients</span>
					</div>
					<div class="stat">
						<span class="stat-num">4x</span>
						<span class="stat-label">Best KC Lawyer</span>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.hero {
		background: linear-gradient(135deg, var(--navy-deep) 0%, var(--dark) 50%, var(--navy) 100%);
		position: relative;
		padding: 80px 0;
		overflow: hidden;
		min-height: 500px;
	}

	.hero.compact {
		min-height: 280px;
		padding: 60px 0;
	}

	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c99700' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		opacity: 0.5;
	}

	.hero-overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: var(--gold-gradient);
	}

	.hero-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.hero.compact .hero-inner {
		grid-template-columns: 1fr;
	}

	.hero-badge {
		display: inline-block;
		background: rgba(201, 151, 0, 0.15);
		border: 1px solid var(--gold);
		color: var(--gold-light);
		font-family: var(--font-primary);
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 2px;
		padding: 6px 16px;
		border-radius: 3px;
		margin-bottom: 1.5rem;
	}

	.hero-title {
		font-family: var(--font-heading);
		font-size: clamp(1.8rem, 4vw, 3rem);
		font-weight: 700;
		color: var(--white);
		margin-bottom: 1.2rem;
		line-height: 1.15;
	}

	:global(.hero-title .gold) {
		color: var(--gold-light);
	}

	.hero-subtitle {
		font-family: var(--font-primary);
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 2rem;
		line-height: 1.7;
		max-width: 520px;
	}

	.hero-ctas {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 1.5rem;
	}

	.btn-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-primary);
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 16px 28px;
		border-radius: 4px;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.btn-icon {
		display: flex;
		align-items: center;
	}

	.btn-cta-primary {
		background: var(--cta-gradient);
		background-size: 100% 200%;
		color: #000;
	}

	.btn-cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(251, 196, 8, 0.5);
	}

	.btn-cta-outline {
		background: transparent;
		color: var(--white);
		border: 2px solid rgba(255, 255, 255, 0.5);
	}

	.btn-cta-outline:hover {
		border-color: var(--gold);
		color: var(--gold-light);
	}

	.hero-trust {
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.hero-trust span {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.7);
		font-weight: 500;
	}

	/* Image column */
	.hero-image-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.hero-image-frame {
		width: 100%;
		max-width: 400px;
		border-radius: 8px;
		overflow: hidden;
		border: 2px solid rgba(201, 151, 0, 0.3);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
	}

	.hero-image-frame img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}

	.hero-stats {
		display: flex;
		gap: 1.5rem;
		width: 100%;
		max-width: 400px;
		justify-content: space-around;
	}

	.stat {
		text-align: center;
		display: flex;
		flex-direction: column;
	}

	.stat-num {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--gold-light);
	}

	.stat-label {
		font-size: 0.7rem;
		color: var(--gray);
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	@media (max-width: 900px) {
		.hero-inner {
			grid-template-columns: 1fr;
		}

		.hero-image-wrap {
			display: none;
		}

		.hero {
			min-height: auto;
		}
	}
</style>
