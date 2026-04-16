<script lang="ts">
	const awards = [
		{ year: '2022', title: 'Best Injury Lawyer', location: 'Kansas City' },
		{ year: '2023', title: 'Best Injury Lawyer', location: 'Kansas City' },
		{ year: '2024', title: 'Best Injury Lawyer', location: 'Kansas City' },
		{ year: '2025', title: 'Best Injury Lawyer', location: 'Kansas City' }
	];
</script>

<div class="awards-grid">
	{#each awards as award}
		<div class="award-badge">
			<div class="badge-outer">
				<div class="badge-inner">
					<div class="badge-star">★</div>
					<p class="badge-voted">VOTED</p>
					<p class="badge-title">{award.title}</p>
					<p class="badge-location">{award.location}</p>
					<p class="badge-year">{award.year}</p>
				</div>
			</div>
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
	}

	.badge-outer {
		width: 160px;
		height: 160px;
		border-radius: 50%;
		background: var(--gold-gradient);
		padding: 4px;
		box-shadow: 0 8px 30px rgba(201, 151, 0, 0.4);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.badge-outer:hover {
		transform: scale(1.05) rotate(-3deg);
		box-shadow: 0 12px 40px rgba(201, 151, 0, 0.6);
	}

	.badge-inner {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: var(--dark);
		border: 3px solid rgba(201, 151, 0, 0.3);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 1rem;
	}

	.badge-star {
		font-size: 1.4rem;
		color: var(--gold-light);
		margin-bottom: 0.2rem;
	}

	.badge-voted {
		font-family: var(--font-primary);
		font-size: 0.55rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: var(--gray);
		margin-bottom: 0.1rem;
	}

	.badge-title {
		font-family: var(--font-heading);
		font-size: 0.65rem;
		font-weight: 700;
		color: var(--white);
		line-height: 1.3;
		text-align: center;
	}

	.badge-location {
		font-family: var(--font-primary);
		font-size: 0.6rem;
		color: var(--gray);
		margin-top: 0.1rem;
	}

	.badge-year {
		font-family: var(--font-heading);
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--gold-light);
		margin-top: 0.2rem;
	}

	@media (max-width: 600px) {
		.badge-outer {
			width: 120px;
			height: 120px;
		}

		.badge-star {
			font-size: 1rem;
		}

		.badge-year {
			font-size: 1rem;
		}
	}
</style>
