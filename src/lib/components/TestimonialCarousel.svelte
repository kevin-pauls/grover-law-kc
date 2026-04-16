<script lang="ts">
	interface Testimonial {
		name: string;
		stars: number;
		text: string;
		source: string;
		date: string;
	}

	const testimonials: Testimonial[] = [
		{
			name: 'Jennifer M.',
			stars: 5,
			text: 'After my car accident, I was overwhelmed and didn\'t know where to turn. Mark Grover and his team were there for me every step of the way. They handled everything with the insurance company and got me a settlement I never could have secured on my own. I truly cannot thank them enough.',
			source: 'Google Review',
			date: 'March 2024'
		},
		{
			name: 'Robert T.',
			stars: 5,
			text: 'Mark is an outstanding attorney. When a drunk driver rear-ended me and left me with a herniated disc, I was scared about medical bills and lost wages. GroverLawKC fought hard for me and won. The whole process was explained clearly and I always felt like a priority, not just a case number.',
			source: 'Google Review',
			date: 'January 2024'
		},
		{
			name: 'Maria S.',
			stars: 5,
			text: 'I slipped and fell at a grocery store and suffered a broken wrist. I was hesitant to sue, but Mark helped me understand my rights. He was compassionate, professional, and aggressive when he needed to be. We settled for far more than I expected. Highly recommend to anyone in KC.',
			source: 'Google Review',
			date: 'November 2023'
		},
		{
			name: 'David K.',
			stars: 5,
			text: 'My family hired GroverLawKC after losing our mother due to medical negligence. During the most difficult time in our lives, Mark\'s team was both caring and relentless in pursuing justice. They kept us informed throughout and secured a meaningful settlement. We are grateful beyond words.',
			source: 'Google Review',
			date: 'September 2023'
		},
		{
			name: 'Ashley R.',
			stars: 5,
			text: 'I was in a motorcycle accident that wasn\'t my fault, and the other driver\'s insurance was trying to lowball me. Mark stepped in and completely turned the situation around. He knew exactly how to deal with the insurance adjusters. Got a full and fair settlement. Five stars without hesitation.',
			source: 'Google Review',
			date: 'July 2023'
		}
	];

	let current = $state(0);

	function prev() {
		current = (current - 1 + testimonials.length) % testimonials.length;
	}

	function next() {
		current = (current + 1) % testimonials.length;
	}

	function goTo(index: number) {
		current = index;
	}

	function renderStars(count: number): string {
		return '★'.repeat(count) + '☆'.repeat(5 - count);
	}
</script>

<section class="testimonials-section">
	<div class="container">
		<div class="section-header">
			<p class="section-eyebrow">Client Reviews</p>
			<h2 class="section-title">What Our Clients Say</h2>
			<p class="section-subtitle">Real stories from real people we've helped recover what they deserved.</p>
		</div>

		<div class="carousel">
			<button class="carousel-btn prev" onclick={prev} aria-label="Previous testimonial">
				&#8592;
			</button>

			<div class="testimonial-stage">
				{#each testimonials as testimonial, i}
					<div class="testimonial-card" class:active={i === current}>
						<div class="testimonial-top">
							<div class="stars">{renderStars(testimonial.stars)}</div>
							<span class="source-badge">{testimonial.source}</span>
						</div>
						<blockquote class="testimonial-text">"{testimonial.text}"</blockquote>
						<div class="testimonial-footer">
							<div class="reviewer">
								<span class="reviewer-icon">👤</span>
								<div>
									<p class="reviewer-name">{testimonial.name}</p>
									<p class="reviewer-date">{testimonial.date}</p>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<button class="carousel-btn next" onclick={next} aria-label="Next testimonial">
				&#8594;
			</button>
		</div>

		<div class="carousel-dots">
			{#each testimonials as _, i}
				<button
					class="dot"
					class:active={i === current}
					onclick={() => goTo(i)}
					aria-label={`Go to testimonial ${i + 1}`}
				></button>
			{/each}
		</div>

		<div class="rating-summary">
			<div class="stars-large">★★★★★</div>
			<p>5.0 Average Rating · 40+ Google Reviews</p>
		</div>
	</div>
</section>

<style>
	.testimonials-section {
		background: var(--off-white);
		padding: var(--section-padding);
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-eyebrow {
		font-family: var(--font-primary);
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 3px;
		color: var(--gold);
		margin-bottom: 0.8rem;
	}

	.section-title {
		font-family: var(--font-heading);
		font-size: 2rem;
		color: var(--dark);
		margin-bottom: 0.8rem;
	}

	.section-subtitle {
		color: var(--gray);
		max-width: 500px;
		margin: 0 auto;
	}

	.carousel {
		display: flex;
		align-items: center;
		gap: 1rem;
		max-width: 900px;
		margin: 0 auto;
	}

	.carousel-btn {
		flex-shrink: 0;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: var(--gold);
		color: #000;
		border: none;
		font-size: 1.2rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s;
		font-weight: 700;
	}

	.carousel-btn:hover {
		background: var(--gold-dark);
		transform: scale(1.05);
	}

	.testimonial-stage {
		flex: 1;
		min-height: 280px;
		position: relative;
	}

	.testimonial-card {
		display: none;
		background: var(--white);
		border-radius: var(--card-radius);
		padding: 2.5rem;
		box-shadow: var(--card-shadow);
		border-left: 4px solid var(--gold);
		position: relative;
	}

	.testimonial-card.active {
		display: block;
		animation: fadeIn 0.3s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.testimonial-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.2rem;
	}

	.stars {
		color: var(--gold-light);
		font-size: 1.3rem;
		letter-spacing: 2px;
	}

	.source-badge {
		background: var(--light-gray);
		color: var(--gray);
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 4px 10px;
		border-radius: 3px;
	}

	.testimonial-text {
		font-size: 0.975rem;
		color: var(--text-dark);
		line-height: 1.8;
		font-style: italic;
		margin-bottom: 1.5rem;
		font-family: var(--font-accent);
	}

	.testimonial-footer {
		border-top: 1px solid var(--light-gray);
		padding-top: 1rem;
	}

	.reviewer {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	.reviewer-icon {
		font-size: 1.5rem;
	}

	.reviewer-name {
		font-weight: 700;
		font-size: 0.9rem;
		color: var(--dark);
	}

	.reviewer-date {
		font-size: 0.75rem;
		color: var(--gray);
	}

	.carousel-dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1.5rem;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--light-gray);
		border: 2px solid var(--gray);
		cursor: pointer;
		transition: all 0.2s;
		padding: 0;
	}

	.dot.active {
		background: var(--gold);
		border-color: var(--gold);
		transform: scale(1.2);
	}

	.rating-summary {
		text-align: center;
		margin-top: 2rem;
	}

	.stars-large {
		color: var(--gold-light);
		font-size: 1.8rem;
		letter-spacing: 3px;
		margin-bottom: 0.3rem;
	}

	.rating-summary p {
		font-size: 0.85rem;
		color: var(--gray);
		font-weight: 500;
	}

	@media (max-width: 600px) {
		.carousel-btn {
			width: 36px;
			height: 36px;
			font-size: 1rem;
		}

		.testimonial-card {
			padding: 1.5rem;
		}
	}
</style>
