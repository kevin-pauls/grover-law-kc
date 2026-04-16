import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Component } from 'svelte';

interface PostMetadata {
	title: string;
	date: string;
	categories: string[];
	excerpt: string;
}

interface PostModule {
	default: Component;
	metadata: PostMetadata;
}

export const load: PageLoad = async ({ params }) => {
	try {
		const post = (await import(`../../../content/blog/${params.slug}.md`)) as PostModule;
		return {
			slug: params.slug,
			PostContent: post.default,
			metadata: post.metadata
		};
	} catch {
		throw error(404, 'Blog post not found');
	}
};
