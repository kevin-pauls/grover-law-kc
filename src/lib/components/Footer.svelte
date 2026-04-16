<script lang="ts">
	const practiceAreaLinks = [
		{ href: '/car-accidents', label: 'Car Accidents' },
		{ href: '/truck-accidents', label: 'Truck Accidents' },
		{ href: '/motorcycle-accidents', label: 'Motorcycle Accidents' },
		{ href: '/slip-and-fall', label: 'Slip and Fall' },
		{ href: '/medical-malpractice', label: 'Medical Malpractice' },
		{ href: '/wrongful-death', label: 'Wrongful Death' },
		{ href: '/brain-injury', label: 'Brain Injury' },
		{ href: '/personal-injury', label: 'Personal Injury' },
		{ href: '/premises-liability', label: 'Premises Liability' },
		{ href: '/product-liability', label: 'Product Liability' }
	];

	const quickLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/practice-areas', label: 'Practice Areas' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' },
		{ href: '/privacy-policy', label: 'Privacy Policy' },
		{ href: '/disclaimer', label: 'Disclaimer' }
	];

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="footer-main">
		<div class="container footer-grid">
			<!-- Col 1: Logo + Info -->
			<div class="footer-col footer-brand">
				<a href="/" class="footer-logo">
					<span class="logo-text">GroverLaw<span class="logo-kc">KC</span></span>
				</a>
				<p class="tagline">Injury &amp; Accident Lawyers</p>
				<address>
					<p>7221 W 79th St, Ste 100</p>
					<p>Overland Park, KS 66204</p>
				</address>
				<div class="footer-phones">
					<a href="tel:8165333969">
						<span class="phone-label">Kansas City:</span>
						(816) 533-3969
					</a>
					<a href="tel:9134321000">
						<span class="phone-label">Overland Park:</span>
						(913) 432-1000
					</a>
				</div>
				<p class="no-fee">No Fee Unless We Win</p>
			</div>

			<!-- Col 2: Practice Areas -->
			<div class="footer-col">
				<h3 class="footer-heading">Practice Areas</h3>
				<ul class="footer-links">
					{#each practiceAreaLinks as link}
						<li><a href={link.href}>{link.label}</a></li>
					{/each}
				</ul>
			</div>

			<!-- Col 3: Quick Links -->
			<div class="footer-col">
				<h3 class="footer-heading">Quick Links</h3>
				<ul class="footer-links">
					{#each quickLinks as link}
						<li><a href={link.href}>{link.label}</a></li>
					{/each}
				</ul>
				<div class="footer-awards">
					<p class="award-title">Award-Winning</p>
					<p>Best Injury Lawyer KC</p>
					<p class="award-years">2022 | 2023 | 2024 | 2025</p>
				</div>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<div class="container footer-bottom-inner">
			<p>&copy; {year} GroverLawKC | All Rights Reserved</p>
			<div class="footer-bottom-links">
				<a href="/privacy-policy">Privacy Policy</a>
				<span>|</span>
				<a href="/disclaimer">Disclaimer</a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background: var(--navy-dark);
		color: var(--white);
	}

	.footer-main {
		padding: 60px 0 40px;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1.4fr 1fr 1fr;
		gap: 3rem;
	}

	.footer-logo {
		display: inline-block;
		text-decoration: none;
		margin-bottom: 0.3rem;
	}

	.logo-text {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--white);
	}

	.logo-kc {
		color: var(--gold);
	}

	.tagline {
		font-size: 0.75rem;
		color: var(--gray);
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 1.2rem;
	}

	address {
		font-style: normal;
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.9rem;
		line-height: 1.8;
		margin-bottom: 1rem;
	}

	.footer-phones {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		margin-bottom: 1.2rem;
	}

	.footer-phones a {
		color: var(--gold-light);
		font-size: 0.9rem;
		font-weight: 600;
		transition: color 0.2s;
	}

	.footer-phones a:hover {
		color: var(--white);
	}

	.phone-label {
		color: var(--gray);
		font-weight: 400;
		margin-right: 4px;
		font-size: 0.8rem;
	}

	.no-fee {
		display: inline-block;
		background: var(--gold);
		color: #000;
		font-weight: 700;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 6px 14px;
		border-radius: 3px;
	}

	.footer-heading {
		font-family: var(--font-heading);
		font-size: 1rem;
		font-weight: 700;
		color: var(--gold);
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 1.2rem;
		padding-bottom: 0.6rem;
		border-bottom: 1px solid rgba(201, 151, 0, 0.3);
	}

	.footer-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.footer-links li a {
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.875rem;
		transition: color 0.2s;
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.footer-links li a::before {
		content: '›';
		color: var(--gold);
		font-size: 1rem;
	}

	.footer-links li a:hover {
		color: var(--gold-light);
	}

	.footer-awards {
		margin-top: 1.5rem;
		padding: 1rem;
		border: 1px solid rgba(201, 151, 0, 0.3);
		border-radius: var(--card-radius);
		text-align: center;
	}

	.award-title {
		font-family: var(--font-heading);
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: var(--gold);
		margin-bottom: 0.3rem;
	}

	.footer-awards p {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.8);
	}

	.award-years {
		color: var(--gold-light) !important;
		font-weight: 600;
		margin-top: 0.2rem;
	}

	/* Footer Bottom */
	.footer-bottom {
		background: rgba(0, 0, 0, 0.3);
		padding: 16px 0;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.footer-bottom-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.8rem;
		color: var(--gray);
	}

	.footer-bottom-links {
		display: flex;
		gap: 0.8rem;
		align-items: center;
	}

	.footer-bottom-links a {
		color: var(--gray);
		transition: color 0.2s;
	}

	.footer-bottom-links a:hover {
		color: var(--gold-light);
	}

	.footer-bottom-links span {
		color: rgba(255, 255, 255, 0.2);
	}

	@media (max-width: 900px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.footer-bottom-inner {
			flex-direction: column;
			gap: 0.8rem;
			text-align: center;
		}
	}
</style>
