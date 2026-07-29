// next/link and next/font apply basePath automatically.
// String `src` values passed to next/image do not, so they go through here.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
