<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { GraduationCap, Scale, Award, Users, Phone } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const member = $derived(data.member);
</script>

<svelte:head>
	<title>{member.name} — {member.role} | GroverLawKC</title>
	<meta name="description" content="{member.name} is {member.role} at GroverLawKC. {member.bio.split('\n\n')[0].slice(0, 140)}..." />
</svelte:head>

<Hero title={member.name} subtitle={member.role} compact />

<section class="profile-section">
	<div class="container profile-grid">
		<div class="profile-sidebar">
			<div class="profile-photo">
				<img src={member.photo} alt={member.name} width="400" height="400" loading="eager" />
			</div>

			{#if member.education}
				<div class="sidebar-section">
					<h3><GraduationCap size={18} strokeWidth={1.5} color="#C99700" /> Education</h3>
					<ul>
						{#each member.education as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if member.barAdmissions}
				<div class="sidebar-section">
					<h3><Scale size={18} strokeWidth={1.5} color="#C99700" /> Bar Admissions</h3>
					<ul>
						{#each member.barAdmissions as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if member.awards}
				<div class="sidebar-section">
					<h3><Award size={18} strokeWidth={1.5} color="#C99700" /> Awards</h3>
					<ul>
						{#each member.awards as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if member.affiliations}
				<div class="sidebar-section">
					<h3><Users size={18} strokeWidth={1.5} color="#C99700" /> Affiliations</h3>
					<ul>
						{#each member.affiliations as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>

		<div class="profile-content">
			<div class="profile-badge">{member.role}</div>
			<h2>About {member.name}</h2>
			{#each member.bio.split('\n\n') as paragraph}
				<p>{paragraph}</p>
			{/each}

			{#if member.isAttorney}
				<div class="profile-ctas">
					<a href="/contact" class="btn-primary">Schedule Free Consultation</a>
					<a href="tel:8165333969" class="btn-phone">
						<Phone size={18} strokeWidth={1.5} />
						(816) 533-3969
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>

<CTABanner />

{#if member.isAttorney}
	<section class="contact-section">
		<div class="container contact-grid">
			<div>
				<h2>Schedule a Free Consultation with {member.name.split(' ')[0]}</h2>
				<p>Injured? Get experienced legal representation. Contact us today for a free, no-obligation case evaluation.</p>
			</div>
			<ContactForm />
		</div>
	</section>
{/if}

<style>
	.profile-section {
		padding: 4rem 0;
		background: var(--white);
	}

	.profile-grid {
		display: grid;
		grid-template-columns: 320px 1fr;
		gap: 3rem;
		align-items: start;
	}

	.profile-photo {
		border-radius: var(--card-radius, 8px);
		overflow: hidden;
		border: 2px solid rgba(201, 151, 0, 0.2);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
	}

	.profile-photo img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		display: block;
	}

	.sidebar-section {
		margin-top: 1.5rem;
		padding: 1.25rem;
		background: var(--light-gray);
		border-radius: var(--card-radius, 8px);
	}

	.sidebar-section h3 {
		font-family: var(--font-heading);
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--dark);
		margin-bottom: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.sidebar-section ul {
		list-style: none;
		padding: 0;
	}

	.sidebar-section li {
		font-size: 0.85rem;
		color: var(--text-light);
		padding: 0.3rem 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		line-height: 1.5;
	}

	.sidebar-section li:last-child {
		border-bottom: none;
	}

	.profile-badge {
		display: inline-block;
		background: rgba(201, 151, 0, 0.1);
		color: var(--gold);
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		padding: 6px 14px;
		border-radius: 3px;
		margin-bottom: 1rem;
	}

	.profile-content h2 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		color: var(--dark);
		margin-bottom: 1.5rem;
	}

	.profile-content p {
		font-size: 1rem;
		color: var(--text);
		line-height: 1.8;
		margin-bottom: 1rem;
	}

	.profile-ctas {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 2rem;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		background: var(--cta-gradient);
		color: #000;
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 14px 24px;
		border-radius: 4px;
		text-decoration: none;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(251, 196, 8, 0.5);
	}

	.btn-phone {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--gold);
		font-weight: 700;
		font-size: 1.1rem;
		text-decoration: none;
		padding: 14px 0;
	}

	.contact-section {
		padding: 4rem 0;
		background: var(--light-gray);
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
	}

	@media (max-width: 768px) {
		.profile-grid {
			grid-template-columns: 1fr;
		}

		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
