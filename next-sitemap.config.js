/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.ink-spell.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/studio/*", "/api/*"],
  changefreq: "weekly",
  priority: 0.8,
};
