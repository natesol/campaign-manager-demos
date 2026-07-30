import type { NextConfig } from "next";

// GitHub Pages serves a project repository under /<repo-name>.
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH; local development leaves it empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    basePath,
    images: { unoptimized: true },
};

export default nextConfig;
