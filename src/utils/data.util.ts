import { MarkdownInstance } from "astro";

export const formatDate = (pubDate: string) => {
  var options: Intl.DateTimeFormatOptions = {
	weekday: 'short',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
};

  return new Date(pubDate).toLocaleDateString('en-US', options);
}

export const sortPostsByDate = (a: MarkdownInstance<any>, b: MarkdownInstance<any>) => {
  const pubDateA = new Date(a.frontmatter.pubDate);
  const pubDateB = new Date(b.frontmatter.pubDate);
  if (pubDateA < pubDateB) {
    return 1;
  }
  if(pubDateA > pubDateB) {
    return -1;
  }
  return 0;
} 