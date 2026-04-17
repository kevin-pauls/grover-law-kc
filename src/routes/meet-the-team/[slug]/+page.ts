import { team } from '$lib/data/team';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const member = team.find((m) => m.slug === params.slug);
	if (!member) throw error(404, 'Team member not found');
	return { member };
}
