import { practiceAreas } from '$lib/data/practice-areas';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const area = practiceAreas.find((a) => a.slug === params.slug);
	if (!area) throw error(404, 'Page not found');
	return { area };
};
