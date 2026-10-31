/** Joins class names, skipping falsy values. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

/** True for absolute http(s) URLs. Placeholders like "[Add live link]" return false. */
export function isHttpUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

/** "[YOUR FULL NAME]" -> "YF", "Jane Doe" -> "JD". Used as a fallback when the photo is missing. */
export function getInitials(name: string): string {
  return name
    .replace(/[^\p{L}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
}
