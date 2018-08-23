module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/moviesearch/" : "/",
  outputDir: "./docs",
  pwa: {
    iconPaths: {
      appleTouchIcon: "img/apple-touch-icon.png",
      favicon16: "img/favicon.png",
      favicon32: "img/favicon.png",
      maskIcon: "",
      msTileImage: "img/appicon.png"
    },
    msTileColor: "#343a40",
    name: "Movie Search",
    themeColor: "#343a40"
  }
};
