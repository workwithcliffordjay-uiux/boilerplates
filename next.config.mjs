/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  transpilePackages: ["sanity-plugin-media", "react-dropzone"],

  async headers() {
    const immutable = [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ];

    return [
      { source: "/fonts/:path*", headers: immutable },
      { source: "/images/:path*", headers: immutable },
      { source: "/favicon.ico", headers: immutable },
    ];
  },

  turbopack: {
    resolveAlias: {
      "react-dropzone": "react-dropzone/dist/index.js",
    },
  },
};

export default nextConfig;
