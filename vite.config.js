const path = require("path");
module.exports = function({ command, mode }) {
  if (command == "serve") {
    if (mode == "development") {
      return {
        root: path.resolve(__dirname, "src"),
        base: "./",
        server: {
          host: "0.0.0.0",
          port: 3000
        }
      };
    }
    if (mode == "production") {
      return {
        server: {
          host: "0.0.0.0",
          port: 5000
        }
      };
    }
  }
  if (command == "build") {
    mode = (mode == "development") ? "development" : "production";
    return {
      root: path.resolve(__dirname, "src"),
      base: "./",
      mode,
      publicDir: true,
      build: {
        outDir: "./../dist",
        assetsDir: "./",
        emptyOutDir: true
      }
    };
  }
};