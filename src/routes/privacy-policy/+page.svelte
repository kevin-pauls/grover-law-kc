<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
	<title>Privacy Policy | GroverLawKC</title>
	<meta name="description" content="GroverLawKC Privacy Policy — how we collect, use, and protect your personal information." />
</svelte:head>

<Hero title="Privacy Policy" compact={true} showCTA={false} />

<section class="legal-page">
	<div class="container narrow">
		<p class="effective-date">Effective Date: January 1, 2024</p>

		<p>GroverLawKC ("we," "our," or "us") is committed to protecting the privacy of visitors to our website and prospective clients who contact us. This Privacy Policy explains how we collect, use, disclose, and protect information about you.</p>

		<h2>Information We Collect</h2>

		<h3>Information You Provide to Us</h3>
		<p>When you contact us through our website contact form, call us directly, or otherwise communicate with us, we may collect:</p>
		<ul>
			<li>Your name</li>
			<li>Your email address</li>
			<li>Your phone number</li>
			<li>Information about your potential legal matter</li>
			<li>Any other information you choose to share</li>
		</ul>

		<h3>Information Collected Automatically</h3>
		<p>When you visit our website, we may automatically collect certain information about your device and usage, including:</p>
		<ul>
			<li>IP address</li>
			<li>Browser type and version</li>
			<li>Pages visited and time spent on pages</li>
			<li>Referring URL</li>
			<li>Date and time of your visit</li>
		</ul>
		<p>This information is collected through standard web analytics tools (including Google Analytics) and is used to understand how visitors use our website and to improve our online presence.</p>

		<h2>How We Use Your Information</h2>
		<p>We use the information we collect to:</p>
		<ul>
			<li>Respond to your inquiries and evaluate your potential legal matter</li>
			<li>Communicate with you about your case if you become a client</li>
			<li>Improve our website and services</li>
			<li>Comply with applicable laws and regulations</li>
		</ul>

		<h2>Information Sharing and Disclosure</h2>
		<p>We do not sell, rent, or trade your personal information to third parties. We may share your information with:</p>
		<ul>
			<li><strong>Service providers</strong> who assist us in operating our website or conducting our business (such as email service providers), subject to confidentiality obligations</li>
			<li><strong>Professional advisors</strong> (co-counsel, experts) as necessary to handle your legal matter, subject to professional confidentiality obligations</li>
			<li><strong>Law enforcement or courts</strong> when required by law or legal process</li>
		</ul>

		<p>Any information you share with us about a potential legal matter is subject to the attorney-client privilege to the extent applicable under professional responsibility rules.</p>

		<h2>Attorney-Client Privilege Notice</h2>
		<p>Please be aware that submitting a contact form or calling us does not, by itself, establish an attorney-client relationship. An attorney-client relationship is only established through a signed engagement agreement. Until that relationship is established, communications with us may not be protected by the attorney-client privilege.</p>

		<h2>Cookies</h2>
		<p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser settings. Disabling cookies may affect the functionality of certain features of our website.</p>

		<h2>Data Security</h2>
		<p>We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

		<h2>Retention of Information</h2>
		<p>We retain personal information for as long as necessary to fulfill the purposes for which it was collected and as required by applicable laws. Client-related information is retained in accordance with our professional obligations and state bar record retention requirements.</p>

		<h2>Your Rights</h2>
		<p>Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or request deletion of your data. To exercise any such rights, please contact us at the information below.</p>

		<h2>Third-Party Links</h2>
		<p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites, and we encourage you to review their privacy policies.</p>

		<h2>Changes to This Policy</h2>
		<p>We may update this Privacy Policy from time to time. We will post the revised policy on this page with an updated effective date. Your continued use of our website after any changes constitutes your acceptance of the revised policy.</p>

		<h2>Contact Us</h2>
		<p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
		<address>
			<strong>GroverLawKC</strong><br />
			7221 W 79th St, Ste 100<br />
			Overland Park, KS 66204<br />
			Phone: <a href="tel:8165333969">(816) 533-3969</a><br />
			Email: <a href="mailto:info@groverlawkc.com">info@groverlawkc.com</a>
		</address>
	</div>
</section>

<style>
	.legal-page {
		padding: 60px 0;
		background: var(--white);
	}

	.narrow {
		max-width: 820px;
	}

	.effective-date {
		color: var(--gray);
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
		font-style: italic;
	}

	:global(.legal-page h2) {
		font-family: var(--font-heading);
		font-size: 1.3rem;
		color: var(--dark);
		margin: 2rem 0 0.8rem;
		padding-bottom: 0.4rem;
		border-bottom: 1px solid var(--light-gray);
	}

	:global(.legal-page h3) {
		font-family: var(--font-heading);
		font-size: 1rem;
		color: var(--dark);
		margin: 1.5rem 0 0.5rem;
	}

	:global(.legal-page p) {
		color: var(--text-dark);
		font-size: 0.95rem;
		line-height: 1.8;
		margin-bottom: 1rem;
	}

	:global(.legal-page ul) {
		margin: 0 0 1rem 1.5rem;
	}

	:global(.legal-page li) {
		color: var(--text-dark);
		font-size: 0.95rem;
		line-height: 1.8;
		margin-bottom: 0.3rem;
	}

	:global(.legal-page address) {
		font-style: normal;
		color: var(--text-dark);
		font-size: 0.95rem;
		line-height: 2;
	}

	:global(.legal-page a) {
		color: var(--gold-dark);
	}

	:global(.legal-page strong) {
		color: var(--dark);
	}
</style>
