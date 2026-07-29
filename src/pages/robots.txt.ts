import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
	const siteUrl = site ?? new URL("https://pikplakaten.dk");
	const sitemapUrl = new URL("/sitemap-index.xml", siteUrl).toString();

	return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
