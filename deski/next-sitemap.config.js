module.exports = {
    siteUrl: 'https://www.lovelearnanny.com', // Your website's base URL
    generateRobotsTxt: true, // Generate a robots.txt file
    exclude: [], // Pages to exclude from the sitemap
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
};
