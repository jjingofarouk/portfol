/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.googleusercontent.com",
            },
        ],
    },
    experimental: {
        optimizePackageImports: ["lucide-react", "react-icons", "framer-motion", "gsap"],
    },
};

export default nextConfig;
