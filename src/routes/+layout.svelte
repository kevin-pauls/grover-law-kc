<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(:root) {
		--gold: #c99700;
		--gold-dark: #9c7304;
		--gold-light: #fbc408;
		--gold-gradient: linear-gradient(90deg, #c99700, #b58905, #c99700);
		--cta-gold: #fbc408;
		--cta-gradient: linear-gradient(0deg, #fbc408 30%, #b58904 50%, #fbc408 70%);
		--navy: #2d3151;
		--navy-dark: #0b1a32;
		--navy-deep: #06182e;
		--dark: #0c2340;
		--dark-alt: #1a1d20;
		--white: #ffffff;
		--off-white: #f9f9f9;
		--light-gray: #f0f0f0;
		--gray: #9b9b9b;
		--text-dark: #212529;
		--font-primary: 'Montserrat', sans-serif;
		--font-heading: 'Cinzel', serif;
		--font-accent: 'Playfair Display', serif;
		--max-width: 1200px;
		--section-padding: 80px 0;
		--card-radius: 8px;
		--card-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	:global(body) {
		font-family: var(--font-primary);
		color: var(--text-dark);
		line-height: 1.6;
		overflow-x: hidden;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: var(--font-heading);
		line-height: 1.2;
		font-weight: 700;
	}

	:global(img) {
		max-width: 100%;
		height: auto;
	}

	:global(.container) {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 20px;
	}

	:global(.btn-primary) {
		display: inline-block;
		background: var(--gold);
		color: #000;
		font-family: var(--font-primary);
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 15px 30px;
		border-radius: 4px;
		border: none;
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
	}

	:global(.btn-primary:hover) {
		background: var(--gold-dark);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(201, 151, 0, 0.4);
	}

	:global(.btn-outline) {
		display: inline-block;
		background: transparent;
		color: var(--white);
		font-family: var(--font-primary);
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 13px 28px;
		border-radius: 4px;
		border: 2px solid var(--white);
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
	}

	:global(.btn-outline:hover) {
		background: var(--white);
		color: var(--dark);
	}

	:global(.section-title) {
		font-family: var(--font-heading);
		font-size: 2rem;
		font-weight: 700;
		color: var(--dark);
		margin-bottom: 1rem;
	}

	:global(.section-subtitle) {
		font-size: 1rem;
		color: var(--gray);
		margin-bottom: 3rem;
		max-width: 600px;
	}

	:global(.text-gold) {
		color: var(--gold);
	}

	:global(.gold-underline) {
		border-bottom: 3px solid var(--gold);
		padding-bottom: 0.5rem;
	}

	main {
		min-height: 100vh;
	}
</style>
