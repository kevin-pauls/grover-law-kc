<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { MapPin, Phone, Building2, Landmark, Car } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const loc = $derived(data.location);
</script>

<svelte:head>
	<title>{loc.metaTitle}</title>
	<meta name="description" content={loc.metaDescription} />
	<meta property="og:title" content={loc.metaTitle} />
	<meta property="og:description" content={loc.metaDescription} />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': ['LegalService', 'LocalBusiness'],
		name: 'GroverLawKC',
		description: loc.metaDescription,
		telephone: '+1-816-533-3969',
		url: `https://groverlawkc.com/locations/${loc.slug}`,
		address: {
			'@type': 'PostalAddress',
			streetAddress: '7221 W 79th St, Ste 100',
			addressLocality: 'Overland Park',
			addressRegion: 'KS',
			postalCode: '66204',
			addressCountry: 'US'
		},
		areaServed: {
			'@type': 'City',
			name: loc.city,
			containedInPlace: {
				'@type': 'State',
				name: loc.state === 'MO' ? 'Missouri' : 'Kansas'
			}
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: loc.coordinates.lat,
			longitude: loc.coordinates.lng
		},
		priceRange: 'Free Consultation',
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '00:00',
			closes: '23:59'
		}
	})}</script>`}
</svelte:head>

<Hero title={loc.heroHeadline} subtitle={loc.heroSubheadline} compact />

<section class="intro-section">
	<div class="container">
		<p class="intro-text">{loc.introParagraph}</p>
		<div class="location-stats">
			<div class="loc-stat">
				<MapPin size={20} strokeWidth={1.5} color="#C99700" />
				<span>{loc.fullName}</span>
			</div>
			<div class="loc-stat">
				<Building2 size={20} strokeWidth={1.5} color="#C99700" />
				<span>{loc.county} County</span>
			</div>
			<div class="loc-stat">
				<Landmark size={20} strokeWidth={1.5} color="#C99700" />
				<span>Pop. {loc.population}</span>
			</div>
		</div>
	</div>
</section>

<section class="why-section">
	<div class="container">
		<h2>{loc.whyChooseUs.heading}</h2>
		{#each loc.whyChooseUs.body.split('\n\n') as paragraph}
			<p>{paragraph}</p>
		{/each}
	</div>
</section>

<CTABanner />

<section class="accidents-section">
	<div class="container">
		<h2>{loc.commonAccidents.heading}</h2>
		<div class="accidents-grid">
			{#each loc.commonAccidents.accidents as accident}
				<a href="/{accident.link}" class="accident-card">
					<div class="accident-icon">
						<Car size={28} strokeWidth={1.5} />
					</div>
					<h3>{accident.type}</h3>
					<p>{accident.description}</p>
					<span class="card-link">Learn more →</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="local-info-section">
	<div class="container local-info-grid">
		<div class="info-col">
			<h3>Major Roads & Highways</h3>
			<ul>
				{#each loc.majorRoads as road}
					<li>{road}</li>
				{/each}
			</ul>
		</div>
		<div class="info-col">
			<h3>Local Hospitals</h3>
			<ul>
				{#each loc.hospitals as hospital}
					<li>{hospital}</li>
				{/each}
			</ul>
		</div>
		<div class="info-col">
			<h3>Court Information</h3>
			<ul>
				{#each loc.courthouses as court}
					<li>{court}</li>
				{/each}
			</ul>
		</div>
		<div class="info-col">
			<h3>Landmarks & Areas</h3>
			<ul>
				{#each loc.landmarks.slice(0, 5) as landmark}
					<li>{landmark}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="faq-section">
	<div class="container">
		<h2>Frequently Asked Questions — {loc.city}</h2>
		<FAQAccordion items={loc.localFAQs} />
	</div>
</section>

<section class="contact-section">
	<div class="container contact-grid">
		<div>
			<h2>Get Your Free Consultation — Serving {loc.city}</h2>
			<p>Injured in {loc.city}? You deserve answers. Contact us today for a free, no-obligation case evaluation.</p>
			<div class="contact-phones">
				<a href="tel:8165333969" class="phone-link">
					<Phone size={20} strokeWidth={1.5} />
					(816) 533-3969
				</a>
				<a href="tel:9134321000" class="phone-link">
					<Phone size={20} strokeWidth={1.5} />
					(913) 432-1000
				</a>
			</div>
		</div>
		<ContactForm />
	</div>
</section>

<style>
	.intro-section {
		padding: 4rem 0;
		background: var(--white);
	}

	.intro-text {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--text);
		max-width: 800px;
		margin-bottom: 2rem;
	}

	.location-stats {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.loc-stat {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: var(--text-light);
		font-weight: 500;
	}

	.why-section {
		padding: 4rem 0;
		background: var(--light-gray);
	}

	.why-section h2 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		color: var(--dark);
		margin-bottom: 1.5rem;
	}

	.why-section p {
		font-size: 1rem;
		line-height: 1.8;
		color: var(--text);
		margin-bottom: 1rem;
		max-width: 800px;
	}

	.accidents-section {
		padding: 4rem 0;
		background: var(--white);
	}

	.accidents-section h2 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		color: var(--dark);
		margin-bottom: 2rem;
		text-align: center;
	}

	.accidents-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.accident-card {
		background: var(--white);
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: var(--card-radius, 8px);
		padding: 1.5rem;
		text-decoration: none;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.accident-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	}

	.accident-icon {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: rgba(201, 151, 0, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--gold);
		margin-bottom: 1rem;
	}

	.accident-card h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		color: var(--dark);
		margin-bottom: 0.5rem;
	}

	.accident-card p {
		font-size: 0.9rem;
		color: var(--text-light);
		line-height: 1.6;
		margin-bottom: 0.75rem;
	}

	.card-link {
		font-size: 0.85rem;
		color: var(--gold);
		font-weight: 600;
	}

	.local-info-section {
		padding: 4rem 0;
		background: var(--navy-deep, #0C2340);
		color: var(--white);
	}

	.local-info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 2rem;
	}

	.info-col h3 {
		font-family: var(--font-heading);
		font-size: 1rem;
		color: var(--gold-light);
		margin-bottom: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 0.8rem;
	}

	.info-col ul {
		list-style: none;
		padding: 0;
	}

	.info-col li {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.8);
		padding: 0.3rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.faq-section {
		padding: 4rem 0;
		background: var(--light-gray);
	}

	.faq-section h2 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		color: var(--dark);
		margin-bottom: 2rem;
		text-align: center;
	}

	.contact-section {
		padding: 4rem 0;
		background: var(--white);
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: start;
	}

	.contact-section h2 {
		font-family: var(--font-heading);
		font-size: 1.6rem;
		color: var(--dark);
		margin-bottom: 1rem;
	}

	.contact-section p {
		color: var(--text-light);
		line-height: 1.7;
		margin-bottom: 1.5rem;
	}

	.contact-phones {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.phone-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--gold);
		text-decoration: none;
	}

	.phone-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.local-info-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
