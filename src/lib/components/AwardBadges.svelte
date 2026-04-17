<script lang="ts">
	const awards = [
		{ year: '2022', image: '/images/awards/best-of-kc-22.webp', alt: 'Best Injury Lawyer Kansas City 2022' },
		{ year: '2023', image: '/images/awards/best-of-kc-23-1.webp', alt: 'Best Injury Lawyer Kansas City 2023' },
		{ year: '2024', image: '/images/awards/best-of-kc-24.webp', alt: 'Best Injury Lawyer Kansas City 2024' },
		{ year: '2025', image: '/images/awards/best-of-kc-25-winner.webp', alt: 'Best Injury Lawyer Kansas City 2025' }
	];
</script>

<div class="awards-grid">
	{#each awards as award}
		<div class="award-badge">
			<img src={award.image} alt={award.alt} width="160" height="160" loading="lazy" />
		</div>
	{/each}
</div>

<style>
	.awards-grid {
		display: flex;
		gap: 2rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.award-badge {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.3s ease;
	}

	.award-badge:hover {
		transform: scale(1.05);
	}

	.award-badge img {
		width: 160px;
		height: 160px;
		object-fit: contain;
		border-radius: 8px;
	}

	@media (max-width: 600px) {
		.award-badge img {
			width: 120px;
			height: 120px;
		}
	}
</style>
