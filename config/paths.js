// paths.js

// Paths will export some path variables that we'll
// use in other Webpack config and server files

const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appBase: resolveApp("./"),
  appSrc: resolveApp("src"), // App source
  appHtml: resolveApp("src/index.html"),
  appIndexJs: resolveApp("src/index.jsx"), // Main entry point
  appComponents: resolveApp("src/components"),
  appStyles: resolveApp("src/styles/main.scss"),
  appBuild: resolveApp("build"), // Prod built files end up here
  appConfig: resolveApp("config"), // App config files
};
