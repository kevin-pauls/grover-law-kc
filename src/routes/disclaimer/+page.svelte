<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
	<title>Legal Disclaimer | GroverLawKC</title>
	<meta name="description" content="Legal disclaimer for GroverLawKC — information on this website is not legal advice and does not create an attorney-client relationship." />
</svelte:head>

<Hero title="Legal Disclaimer" compact={true} showCTA={false} />

<section class="legal-page">
	<div class="container narrow">
		<p class="effective-date">Last Updated: January 1, 2024</p>

		<h2>No Legal Advice</h2>
		<p>The information contained on this website (groverlawkc.com) is provided for general informational purposes only. It is not intended to constitute legal advice and should not be relied upon as such. No information on this site should be taken as legal advice for any individual case or situation.</p>

		<p>Laws and legal procedures vary by jurisdiction and change over time. The information on this website may not reflect the most current legal developments or statutes in your state. You should consult with a licensed attorney in your jurisdiction before taking any action based on information contained on this website.</p>

		<h2>No Attorney-Client Relationship</h2>
		<p>Visiting this website, reading content on this website, or contacting GroverLawKC through the contact form, telephone, or any other means does not create an attorney-client relationship between you and GroverLawKC or any of its attorneys.</p>

		<p>An attorney-client relationship is only established when:</p>
		<ul>
			<li>You have been formally accepted as a client by GroverLawKC; and</li>
			<li>You have signed a written engagement agreement with the firm.</li>
		</ul>

		<p>Until such a relationship is established in writing, we are not your attorneys and you are not our client. Communications with us prior to the formation of an attorney-client relationship may not be protected by the attorney-client privilege.</p>

		<h2>Past Results Are Not a Guarantee of Future Results</h2>
		<p>Any case results, verdicts, or settlements described or referenced on this website represent past outcomes in specific cases. These results do not guarantee or predict a similar result in any future case. Each case is different and must be evaluated on its own facts. The outcome of any particular case depends on many factors, including the applicable law, the specific facts, the skill and experience of the attorneys involved, and the venue in which the case is heard.</p>

		<p>Results described on this website may not be representative of the results obtained in all cases handled by GroverLawKC.</p>

		<h2>Jurisdictional Limitations</h2>
		<p>GroverLawKC is licensed to practice law in Missouri and Kansas. Information on this website is primarily relevant to those jurisdictions. If you are located in a different state or your legal matter involves the law of a different jurisdiction, the information on this website may not apply to your situation. We encourage you to seek legal advice from an attorney licensed in the applicable jurisdiction.</p>

		<h2>Third-Party Content</h2>
		<p>This website may contain links to third-party websites. GroverLawKC does not control the content of those websites and is not responsible for their accuracy, reliability, or privacy practices. The inclusion of any link on this website does not constitute an endorsement of the linked website or its content.</p>

		<h2>Advertising Compliance</h2>
		<p>This website is an attorney advertisement. GroverLawKC is responsible for the content of this website. The choice of a lawyer is an important decision and should not be based solely on advertisements.</p>

		<p>Prior results do not guarantee a similar outcome. Clients may be responsible for costs and expenses in addition to attorney's fees.</p>

		<h2>Contact Us</h2>
		<p>If you have questions about this disclaimer or about how GroverLawKC may be able to assist you, please contact us:</p>
		<address>
			<strong>GroverLawKC</strong><br />
			7221 W 79th St, Ste 100<br />
			Overland Park, KS 66204<br />
			Phone: <a href="tel:8165333969">(816) 533-3969</a><br />
			Phone: <a href="tel:9134321000">(913) 432-1000</a><br />
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
