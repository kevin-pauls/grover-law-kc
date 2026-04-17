<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
	import { team } from '$lib/data/team';

	const attorneys = team.filter((m) => m.isAttorney);
	const staff = team.filter((m) => !m.isAttorney && m.slug !== 'westley-grover');
	const westley = team.find((m) => m.slug === 'westley-grover');
</script>

<svelte:head>
	<title>Meet the Team | GroverLawKC — Kansas City Personal Injury Lawyers</title>
	<meta name="description" content="Meet the attorneys and staff at GroverLawKC. Led by Mark Grover, our team fights for Kansas City injury victims. Free consultation." />
</svelte:head>

<Hero title="Meet the <span class='gold'>Team</span>" subtitle="The people behind GroverLawKC — dedicated professionals fighting for Kansas City injury victims." compact />

<section class="team-section">
	<div class="container">
		<h2>Our Attorneys</h2>
		<div class="team-grid attorneys">
			{#each attorneys as member}
				<a href="/meet-the-team/{member.slug}" class="team-card featured">
					<div class="card-photo">
						<img src={member.photo} alt={member.name} width="400" height="400" loading="lazy" />
					</div>
					<div class="card-info">
						<h3>{member.name}</h3>
						<p class="role">{member.role}</p>
						<p class="excerpt">{member.bio.split('\n\n')[0].slice(0, 160)}...</p>
						<span class="card-link">View profile →</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<CTABanner />

<section class="team-section staff-section">
	<div class="container">
		<h2>Our Team</h2>
		<div class="team-grid">
			{#each staff as member}
				<a href="/meet-the-team/{member.slug}" class="team-card">
					<div class="card-photo">
						<img src={member.photo} alt={member.name} width="400" height="400" loading="lazy" />
					</div>
					<div class="card-info">
						<h3>{member.name}</h3>
						<p class="role">{member.role}</p>
					</div>
				</a>
			{/each}
		</div>

		{#if westley}
			<div class="culture-officer">
				<a href="/meet-the-team/{westley.slug}" class="team-card westley-card">
					<div class="card-photo">
						<img src={westley.photo} alt={westley.name} width="400" height="400" loading="lazy" />
					</div>
					<div class="card-info">
						<h3>{westley.name}</h3>
						<p class="role">{westley.role}</p>
						<p class="excerpt">Lead with kindness. Be patient. Quietly pay attention. Always wag — rarely bark.</p>
					</div>
				</a>
			</div>
		{/if}
	</div>
</section>

<section class="office-section">
	<div class="container office-grid">
		<div>
			<h2>Our Office</h2>
			<p>Centrally located in Overland Park to serve the entire Kansas City metro.</p>
			<address>
				<strong>GroverLawKC</strong><br />
				7221 W 79th St, Ste 100<br />
				Overland Park, KS 66204
			</address>
			<div class="office-phones">
				<p><strong>Kansas City:</strong> <a href="tel:8165333969">(816) 533-3969</a></p>
				<p><strong>Overland Park:</strong> <a href="tel:9134321000">(913) 432-1000</a></p>
			</div>
			<p class="hours">Available 24/7 — Free Consultation</p>
		</div>
		<div class="office-map">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.5!2d-94.671!3d38.982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ea3f78f6d8c7%3A0x0!2s7221+W+79th+St%2C+Overland+Park%2C+KS+66204!5e0!3m2!1sen!2sus!4v1"
				width="100%"
				height="300"
				style="border:0;border-radius:8px;"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="GroverLawKC Office Location"
			></iframe>
		</div>
	</div>
</section>

<style>
	.team-section {
		padding: 4rem 0;
		background: var(--white);
	}

	.staff-section {
		background: var(--light-gray);
	}

	.team-section h2 {
		font-family: var(--font-heading);
		font-size: 1.6rem;
		color: var(--dark);
		margin-bottom: 2rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid var(--gold);
		display: inline-block;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.team-grid.attorneys {
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	}

	.team-card {
		background: var(--white);
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: var(--card-radius, 8px);
		overflow: hidden;
		text-decoration: none;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.team-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	}

	.card-photo {
		overflow: hidden;
	}

	.card-photo img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		display: block;
		transition: transform 0.3s ease;
	}

	.team-card:hover .card-photo img {
		transform: scale(1.03);
	}

	.card-info {
		padding: 1.25rem;
	}

	.card-info h3 {
		font-family: var(--font-heading);
		font-size: 1.15rem;
		color: var(--dark);
		margin-bottom: 0.25rem;
	}

	.role {
		font-size: 0.85rem;
		color: var(--gold);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-bottom: 0.5rem;
	}

	.excerpt {
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

	.culture-officer {
		margin-top: 2rem;
		max-width: 400px;
	}

	.westley-card {
		border: 2px solid rgba(201, 151, 0, 0.2);
	}

	.office-section {
		padding: 4rem 0;
		background: var(--navy-deep, #0C2340);
		color: var(--white);
	}

	.office-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.office-section h2 {
		font-family: var(--font-heading);
		font-size: 1.6rem;
		color: var(--gold-light);
		margin-bottom: 0.75rem;
	}

	.office-section p {
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	address {
		font-style: normal;
		color: rgba(255, 255, 255, 0.9);
		font-size: 1rem;
		line-height: 1.8;
		margin-bottom: 1rem;
	}

	.office-phones p {
		margin-bottom: 0.3rem;
	}

	.office-phones a {
		color: var(--gold-light);
		font-weight: 600;
	}

	.hours {
		color: var(--gold) !important;
		font-weight: 600;
		margin-top: 0.5rem;
	}

	@media (max-width: 768px) {
		.office-grid {
			grid-template-columns: 1fr;
		}

		.team-grid.attorneys {
			grid-template-columns: 1fr;
		}
	}
</style>
