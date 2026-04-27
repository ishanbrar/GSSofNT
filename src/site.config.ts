import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "JJS",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Used as the default description meta property and webmanifest description
	description: "An opinionated starter theme for Astro",
	// HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
	// Used to construct the meta title property found in src/components/BaseHead.astro L:11, and webmanifest name found in astro.config.ts L:42
	title: "GSS of NT",
};

export type NavChild = { path: string; title: string };

export type NavEntry =
	| { type: "link"; path: string; title: string }
	| { type: "group"; path: string; title: string; children: NavChild[] };

/** Main navigation: used in Header (and can be mirrored in Footer). */
export const navEntries: NavEntry[] = [
	{ type: "link", path: "/", title: "Home" },
	{
		type: "group",
		path: "/about/",
		title: "About",
		children: [
			{ path: "/about/", title: "Our Gurdwara" },
			{ path: "/about/sikhism/", title: "Sikhism" },
			{ path: "/about/ceremonies/", title: "Ceremonies" },
			{ path: "/about/ten-gurus/", title: "Ten Gurus" },
			{ path: "/about/visitors-guide/", title: "Visitor's Guide" },
		],
	},
	{ type: "link", path: "/why/", title: "Sikh History Museum" },
	{ type: "link", path: "/gallery/", title: "Gallery" },
];
