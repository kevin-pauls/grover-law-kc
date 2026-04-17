<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
	import { locations } from '$lib/data/locations';
	import { MapPin, Phone } from 'lucide-svelte';

	const ksLocations = locations.filter((l) => l.state === 'KS');
	const moLocations = locations.filter((l) => l.state === 'MO');
</script>

<svelte:head>
	<title>Locations We Serve | GroverLawKC — Kansas City Metro Personal Injury Lawyers</title>
	<meta name="description" content="GroverLawKC serves the Kansas City metro including Overland Park, Olathe, Lenexa, Leawood, Shawnee, Independence, and Blue Springs. Free consultations." />
</svelte:head>

<Hero title="Serving the Kansas City Metro" subtitle="Personal injury attorneys fighting for accident victims across Missouri and Kansas. Our office in Overland Park is centrally located to serve the entire metro area." compact />

<section class="locations-section">
	<div class="container">
		<div class="state-group">
			<h2>Kansas</h2>
			<div class="locations-grid">
				{#each ksLocations as loc}
					<a href="/locations/{loc.slug}" class="location-card">
						<div class="location-icon">
							<MapPin size={28} strokeWidth={1.5} />
						</div>
						<div>
							<h3>{loc.city}, {loc.state}</h3>
							<p>{loc.county} County · Pop. {loc.population}</p>
							<span class="card-link">View details →</span>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<div class="state-group">
			<h2>Missouri</h2>
			<div class="locations-grid">
				{#each moLocations as loc}
					<a href="/locations/{loc.slug}" class="location-card">
						<div class="location-icon">
							<MapPin size={28} strokeWidth={1.5} />
						</div>
						<div>
							<h3>{loc.city}, {loc.state}</h3>
							<p>{loc.county} County · Pop. {loc.population}</p>
							<span class="card-link">View details →</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<CTABanner />

<section class="cta-section">
	<div class="container cta-inner">
		<h2>Don't See Your City?</h2>
		<p>We serve the entire Kansas City metro area. If you've been injured anywhere in the region, call us for a free consultation.</p>
		<div class="cta-phones">
			<a href="tel:8165333969" class="phone-cta">
				<Phone size={20} strokeWidth={1.5} />
				(816) 533-3969 — Kansas City
			</a>
			<a href="tel:9134321000" class="phone-cta">
				<Phone size={20} strokeWidth={1.5} />
				(913) 432-1000 — Overland Park
			</a>
		</div>
	</div>
</section>

<style>
	.locations-section {
		padding: 4rem 0;
		background: var(--white);
	}

	.state-group {
		margin-bottom: 3rem;
	}

	.state-group:last-child {
		margin-bottom: 0;
	}

	.state-group h2 {
		font-family: var(--font-heading);
		font-size: 1.4rem;
		color: var(--dark);
		margin-bottom: 1.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid var(--gold);
		display: inline-block;
	}

	.locations-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.25rem;
	}

	.location-card {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		padding: 1.25rem;
		background: var(--white);
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: var(--card-radius, 8px);
		text-decoration: none;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.location-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
	}

	.location-icon {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: rgba(201, 151, 0, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--gold);
		flex-shrink: 0;
	}

	.location-card h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		color: var(--dark);
		margin-bottom: 0.25rem;
	}

	.location-card p {
		font-size: 0.85rem;
		color: var(--text-light);
		margin-bottom: 0.5rem;
	}

	.card-link {
		font-size: 0.8rem;
		color: var(--gold);
		font-weight: 600;
	}

	.cta-section {
		padding: 4rem 0;
		background: var(--light-gray);
	}

	.cta-inner {
		text-align: center;
	}

	.cta-inner h2 {
		font-family: var(--font-heading);
		font-size: 1.6rem;
		color: var(--dark);
		margin-bottom: 0.75rem;
	}

	.cta-inner p {
		color: var(--text-light);
		margin-bottom: 1.5rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-phones {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.phone-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--gold);
		text-decoration: none;
	}

	.phone-cta:hover {
		text-decoration: underline;
	}
</style>
