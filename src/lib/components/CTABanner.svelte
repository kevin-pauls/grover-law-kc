<script lang="ts">
	import { Phone } from 'lucide-svelte';

	interface Props {
		text?: string;
		phone?: string;
	}

	let {
		text = 'INJURED? CALL NOW — FREE CONSULTATION',
		phone = '(816) 533-3969'
	}: Props = $props();
</script>

<section class="cta-banner">
	<div class="container cta-inner">
		<div class="cta-text">
			<span class="cta-icon"><Phone size={28} strokeWidth={1.5} /></span>
			<p>{text}</p>
		</div>
		<div class="cta-actions">
			<a href="tel:8165333969" class="cta-phone">{phone}</a>
			<a href="/contact" class="cta-button">Free Consultation</a>
		</div>
	</div>
</section>

<style>
	.cta-banner {
		background: var(--cta-gradient);
		background-size: 100% 200%;
		background-position: center;
		padding: 28px 0;
	}

	.cta-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.cta-text {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.cta-icon {
		display: flex;
		align-items: center;
		color: var(--dark);
	}

	.cta-text p {
		font-family: var(--font-heading);
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--dark);
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.cta-actions {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.cta-phone {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--dark);
		text-decoration: none;
		letter-spacing: 1px;
		transition: opacity 0.2s;
	}

	.cta-phone:hover {
		opacity: 0.8;
	}

	.cta-button {
		background: var(--dark);
		color: var(--gold-light);
		font-family: var(--font-primary);
		font-weight: 700;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 14px 28px;
		border-radius: 4px;
		text-decoration: none;
		transition: all 0.3s ease;
		white-space: nowrap;
	}

	.cta-button:hover {
		background: var(--navy-dark);
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 768px) {
		.cta-inner {
			flex-direction: column;
			text-align: center;
			justify-content: center;
		}

		.cta-text {
			flex-direction: column;
			gap: 0.5rem;
		}

		.cta-text p {
			font-size: 1rem;
		}

		.cta-phone {
			font-size: 1.4rem;
		}
	}
</style>
