// next.config.js
module.exports = {
  output: "export", // Tells Next.js to export the project as a static site
  assetPrefix: "/anime-drawer", // Replace <your-repo-name> with your actual repo name
  images: {
    unoptimized: true, // Disables image optimization to prevent errors during static export
  },
};
