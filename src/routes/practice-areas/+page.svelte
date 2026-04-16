<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PracticeAreaCard from '$lib/components/PracticeAreaCard.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
	import { vehicleAreas, injuryAreas, insuranceAreas } from '$lib/data/practice-areas';
</script>

<svelte:head>
	<title>Practice Areas | GroverLawKC — Kansas City Personal Injury Lawyer</title>
	<meta
		name="description"
		content="GroverLawKC handles 50+ practice areas including car accidents, truck accidents, medical malpractice, wrongful death, and more. Serving Kansas City & Overland Park."
	/>
</svelte:head>

<Hero
	title="Comprehensive Personal Injury <span class='gold'>Legal Services</span>"
	subtitle="From car accidents to catastrophic injuries, GroverLawKC fights for victims across more than 50 practice areas in Kansas City and Overland Park."
	compact={true}
/>

<section class="practice-hub">
	<div class="container">

		<!-- Vehicle Accidents -->
		<div class="category-section">
			<div class="category-header">
				<span class="category-icon">🚗</span>
				<div>
					<h2>Vehicle & Transportation Accidents</h2>
					<p>Injured in a vehicle accident? We fight for maximum compensation regardless of what type of crash occurred.</p>
				</div>
			</div>
			<div class="practice-grid">
				{#each vehicleAreas as area}
					<PracticeAreaCard
						title={area.menuTitle}
						slug={area.slug}
						description={area.intro.slice(0, 100) + '...'}
						icon={area.icon}
					/>
				{/each}
			</div>
		</div>

		<!-- Injury & Liability -->
		<div class="category-section">
			<div class="category-header">
				<span class="category-icon">⚖️</span>
				<div>
					<h2>Personal Injury & Liability</h2>
					<p>Hurt on someone else's property, by a defective product, or through another's negligence? We handle it all.</p>
				</div>
			</div>
			<div class="practice-grid">
				{#each injuryAreas as area}
					<PracticeAreaCard
						title={area.menuTitle}
						slug={area.slug}
						description={area.intro.slice(0, 100) + '...'}
						icon={area.icon}
					/>
				{/each}
			</div>
		</div>

		<!-- Insurance & Claims -->
		<div class="category-section">
			<div class="category-header">
				<span class="category-icon">📋</span>
				<div>
					<h2>Insurance & Claims</h2>
					<p>Insurance companies work against you. We fight to make sure you receive every benefit you're entitled to.</p>
				</div>
			</div>
			<div class="practice-grid">
				{#each insuranceAreas as area}
					<PracticeAreaCard
						title={area.menuTitle}
						slug={area.slug}
						description={area.intro.slice(0, 100) + '...'}
						icon={area.icon}
					/>
				{/each}
			</div>
		</div>

	</div>
</section>

<CTABanner />

<style>
	.practice-hub {
		padding: 60px 0;
		background: var(--off-white);
	}

	.category-section {
		margin-bottom: 4rem;
	}

	.category-section:last-child {
		margin-bottom: 0;
	}

	.category-header {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 2px solid var(--gold);
	}

	.category-icon {
		font-size: 2.5rem;
		flex-shrink: 0;
	}

	.category-header h2 {
		font-family: var(--font-heading);
		font-size: 1.6rem;
		color: var(--dark);
		margin-bottom: 0.4rem;
	}

	.category-header p {
		color: var(--gray);
		font-size: 0.9rem;
	}

	.practice-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.2rem;
	}

	@media (max-width: 600px) {
		.practice-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
