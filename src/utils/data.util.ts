import { MarkdownInstance } from 'astro';

export const formatDate = (pubDate: string) => {
	var options: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	return new Date(pubDate).toLocaleDateString('en-US', options);
};

export const sortPostsByDate = (a: MarkdownInstance<any>, b: MarkdownInstance<any>) => {
	// First, check if either post is pinned
	const isPinnedA = a.frontmatter.isPinned === true;
	const isPinnedB = b.frontmatter.isPinned === true;

	// If one is pinned and the other isn't, prioritize the pinned one
	if (isPinnedA && !isPinnedB) {
		return -1;
	}
	if (!isPinnedA && isPinnedB) {
		return 1;
	}

	// If both are pinned or both are not pinned, sort by date
	const pubDateA = new Date(a.frontmatter.pubDate);
	const pubDateB = new Date(b.frontmatter.pubDate);
	if (pubDateA < pubDateB) {
		return 1;
	}
	if (pubDateA > pubDateB) {
		return -1;
	}
	return 0;
};
