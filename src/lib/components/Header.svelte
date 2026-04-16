<script lang="ts">
	import { page } from '$app/stores';

	let mobileOpen = $state(false);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function closeMobile() {
		mobileOpen = false;
	}

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/practice-areas', label: 'Practice Areas' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<header>
	<!-- Top Bar -->
	<div class="top-bar">
		<div class="container top-bar-inner">
			<div class="top-phones">
				<a href="tel:8165333969">(816) 533-3969</a>
				<span class="separator">|</span>
				<a href="tel:9134321000">(913) 432-1000</a>
			</div>
			<div class="top-right">
				<span class="available">Available 24/7 — Free Consultation</span>
			</div>
		</div>
	</div>

	<!-- Main Nav -->
	<nav class="main-nav" class:scrolled={false}>
		<div class="container nav-inner">
			<a href="/" class="logo" onclick={closeMobile}>
				<span class="logo-text">GroverLaw<span class="logo-kc">KC</span></span>
				<span class="logo-tag">Injury & Accident Lawyers</span>
			</a>

			<ul class="nav-links" class:open={mobileOpen}>
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class:active={$page.url.pathname === link.href ||
								(link.href !== '/' && $page.url.pathname.startsWith(link.href))}
							onclick={closeMobile}
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="mobile-cta">
					<a href="tel:8165333969" class="btn-primary" onclick={closeMobile}>Call Now</a>
				</li>
			</ul>

			<a href="/contact" class="cta-btn desktop-cta">FREE CONSULTATION</a>

			<button class="hamburger" onclick={toggleMobile} aria-label="Toggle navigation">
				<span class:open={mobileOpen}></span>
				<span class:open={mobileOpen}></span>
				<span class:open={mobileOpen}></span>
			</button>
		</div>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 1000;
		width: 100%;
	}

	/* Top Bar */
	.top-bar {
		background: var(--dark);
		color: var(--white);
		font-size: 0.8rem;
		font-weight: 500;
	}

	.top-bar-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 20px;
	}

	.top-phones a {
		color: var(--gold-light);
		font-weight: 600;
		transition: color 0.2s;
	}

	.top-phones a:hover {
		color: var(--white);
	}

	.separator {
		margin: 0 8px;
		color: var(--gray);
	}

	.top-right {
		color: var(--gray);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	/* Main Nav */
	.main-nav {
		background: var(--navy-dark);
		border-bottom: 3px solid var(--gold);
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
		min-height: 72px;
		gap: 2rem;
	}

	/* Logo */
	.logo {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		flex-shrink: 0;
	}

	.logo-text {
		font-family: var(--font-heading);
		font-size: 1.6rem;
		font-weight: 700;
		color: var(--white);
		letter-spacing: 1px;
		line-height: 1;
	}

	.logo-kc {
		color: var(--gold);
	}

	.logo-tag {
		font-family: var(--font-primary);
		font-size: 0.6rem;
		color: var(--gray);
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-top: 2px;
	}

	/* Nav Links */
	.nav-links {
		display: flex;
		list-style: none;
		gap: 0;
		align-items: center;
		margin: 0 auto;
	}

	.nav-links li a {
		display: block;
		padding: 26px 18px;
		color: var(--white);
		font-family: var(--font-primary);
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		transition: color 0.2s;
		position: relative;
	}

	.nav-links li a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: var(--gold);
		transform: scaleX(0);
		transition: transform 0.2s;
	}

	.nav-links li a:hover::after,
	.nav-links li a.active::after {
		transform: scaleX(1);
	}

	.nav-links li a:hover,
	.nav-links li a.active {
		color: var(--gold-light);
	}

	/* CTA Button */
	.cta-btn {
		background: var(--cta-gradient);
		background-size: 100% 200%;
		background-position: top;
		color: #000;
		font-family: var(--font-primary);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 14px 22px;
		border-radius: 4px;
		text-decoration: none;
		white-space: nowrap;
		transition: all 0.3s ease;
		flex-shrink: 0;
	}

	.cta-btn:hover {
		background-position: bottom;
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(251, 196, 8, 0.5);
	}

	.mobile-cta {
		display: none;
	}

	/* Hamburger */
	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 8px;
		flex-shrink: 0;
	}

	.hamburger span {
		display: block;
		width: 25px;
		height: 2px;
		background: var(--white);
		transition: all 0.3s ease;
		transform-origin: center;
	}

	.hamburger span.open:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.hamburger span.open:nth-child(2) {
		opacity: 0;
	}

	.hamburger span.open:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -5px);
	}

	@media (max-width: 900px) {
		.hamburger {
			display: flex;
		}

		.desktop-cta {
			display: none;
		}

		.top-right {
			display: none;
		}

		.nav-links {
			display: none;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: var(--navy-dark);
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0;
			padding: 100px 20px 40px;
			z-index: -1;
		}

		.nav-links.open {
			display: flex;
		}

		.nav-links li {
			width: 100%;
			text-align: center;
		}

		.nav-links li a {
			padding: 20px;
			font-size: 1.1rem;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		}

		.nav-links li a::after {
			display: none;
		}

		.mobile-cta {
			display: block;
			margin-top: 1.5rem;
		}

		.mobile-cta a {
			border: none !important;
			background: var(--gold) !important;
			padding: 18px 40px !important;
			border-radius: 4px;
			font-size: 1.1rem !important;
		}
	}
</style>
