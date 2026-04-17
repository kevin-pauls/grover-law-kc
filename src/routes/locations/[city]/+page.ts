import { locations } from '$lib/data/locations';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const location = locations.find((l) => l.slug === params.city);
	if (!location) throw error(404, 'Location not found');
	return { location };
}
