import fs from "node:fs";
import path from "node:path";

import shaheedCaptions from "./shaheeds.json";

export type ShaheedEntry = {
	id: string;
	file: string;
	src: string;
	lines: string[];
	cardName: string;
	year: string;
};

const captionMap = shaheedCaptions as Record<string, { lines: string[] }>;

const MISSING_CAPTION = ["English caption not added yet — refer to Gurmukhi text on the image."];

/** Convert `public/shaheeds` filename to a URL segment (unique for current set). */
export function fileToShaheedId(file: string): string {
	return file
		.replace(/\.jpg$/i, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

export function extractCardName(lines: string[]): string {
	const parts: string[] = [];
	for (const line of lines) {
		if (/^Martyrdom:/i.test(line)) break;
		if (/^Son of /i.test(line)) break;
		if (/^Nakodar/i.test(line)) break;
		if (/^Saka\b/i.test(line)) break;
		if (/English caption not added/i.test(line)) {
			parts.push(line);
			break;
		}
		parts.push(line);
	}
	return parts.join(" · ") || "Shaheed";
}

export function extractYear(lines: string[]): string {
	for (const line of lines) {
		if (!/martyrdom/i.test(line)) continue;
		const years = line.match(/\b(1[89]\d{2}|20\d{2})\b/g);
		if (years?.length) return years[years.length - 1] ?? "—";
	}

	for (const line of lines) {
		const m = line.match(/^\s*(1[89]\d{2}|20\d{2})\s*$/);
		if (m) return m[1] ?? "—";
	}

	const full = lines.join(" ");
	const allMatches = full.match(/\b(1[89]\d{2}|20\d{2})\b/g);
	if (!allMatches?.length) return "—";

	const bornLine = lines.find((l) => /\bborn\b/i.test(l));
	if (bornLine) {
		const bornYears = bornLine.match(/\b(1[89]\d{2}|20\d{2})\b/g);
		const bornYear = bornYears?.[bornYears.length - 1];
		const rest = allMatches.filter((y) => y !== bornYear);
		if (rest.length) return rest[rest.length - 1] ?? "—";
	}

	return allMatches[allMatches.length - 1] ?? "—";
}

export function getShaheeds(): ShaheedEntry[] {
	const dir = path.join(process.cwd(), "public/shaheeds");
	const files = fs.readdirSync(dir).filter((f) => f.endsWith(".jpg"));
	files.sort((a, b) => a.localeCompare(b, "en-GB", { numeric: true, sensitivity: "base" }));

	return files.map((file) => {
		const lines = captionMap[file]?.lines ?? MISSING_CAPTION;
		return {
			id: fileToShaheedId(file),
			file,
			src: `/shaheeds/${encodeURIComponent(file)}`,
			lines,
			cardName: extractCardName(lines),
			year: extractYear(lines),
		};
	});
}

export function getShaheedById(id: string): ShaheedEntry | undefined {
	return getShaheeds().find((s) => s.id === id);
}
