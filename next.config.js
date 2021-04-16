/* eslint-disable @typescript-eslint/no-var-requires */

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    optimizedImages,
    {
      // these are the default values so you don't have to provide them if they are good enough for your use-case.
      // but you can overwrite them here with any valid value you want.
      inlineImageLimit: 8192,
      imagesFolder: "images",
      imagesName: "[name]-[hash].[ext]",
      handleImages: ["jpeg", "png", "svg"],
      removeOriginalExtension: false,
      optimizeImages: true,
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      svgo: {
        // enable/disable svgo plugins here
      },
      webp: {
        preset: "default",
        quality: 75,
      },
    },
  ],

  // your other plugins here
  {
    target: "serverless",

    /**
     * Custom Webpack Config
     * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
     */
    webpack(config, options) {
      const { dev, isServer } = options;

      // Do not run type checking twice:
      if (dev && isServer) {
        config.plugins.push(new ForkTsCheckerWebpackPlugin());
      }
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });

      return config;
    },
  }
);
