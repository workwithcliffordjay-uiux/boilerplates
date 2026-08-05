/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://saekyungvillage.com",
  generateRobotsTxt: true,
  exclude: ["/404", "/[...id]", "/index-bot"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/index-bot" },
    ],
  },
};
