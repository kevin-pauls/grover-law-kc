<script lang="ts">
	interface FAQItem {
		question: string;
		answer: string;
	}

	interface Props {
		items: FAQItem[];
	}

	let { items }: Props = $props();

	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<div class="faq-list">
	{#each items as item, i}
		<div class="faq-item" class:open={openIndex === i}>
			<button class="faq-question" onclick={() => toggle(i)} aria-expanded={openIndex === i}>
				<span class="question-text">{item.question}</span>
				<span class="faq-icon">{openIndex === i ? '−' : '+'}</span>
			</button>
			<div class="faq-answer" class:visible={openIndex === i}>
				<p>{item.answer}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 0;
		border: 1px solid var(--light-gray);
		border-radius: var(--card-radius);
		overflow: hidden;
	}

	.faq-item {
		border-bottom: 1px solid var(--light-gray);
		transition: background 0.2s;
	}

	.faq-item:last-child {
		border-bottom: none;
	}

	.faq-item.open {
		background: rgba(201, 151, 0, 0.03);
	}

	.faq-question {
		width: 100%;
		background: none;
		border: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding: 1.4rem 1.8rem;
		cursor: pointer;
		text-align: left;
		transition: background 0.2s;
	}

	.faq-question:hover {
		background: rgba(201, 151, 0, 0.05);
	}

	.question-text {
		font-family: var(--font-primary);
		font-size: 1rem;
		font-weight: 600;
		color: var(--dark);
		line-height: 1.4;
	}

	.faq-item.open .question-text {
		color: var(--gold-dark);
	}

	.faq-icon {
		flex-shrink: 0;
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: var(--gold);
		color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		font-weight: 700;
		transition: transform 0.2s;
	}

	.faq-item.open .faq-icon {
		background: var(--dark);
		color: var(--gold-light);
	}

	.faq-answer {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.4s ease, padding 0.3s ease;
		padding: 0 1.8rem;
	}

	.faq-answer.visible {
		max-height: 400px;
		padding: 0 1.8rem 1.4rem;
	}

	.faq-answer p {
		font-size: 0.95rem;
		color: var(--text-dark);
		line-height: 1.8;
	}
</style>
