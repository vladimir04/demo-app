const path = require("path");

/**
 * Add style resource
 * @param {String} rule Rule to use
 *
 * @see https://cli.vuejs.org/guide/css.html#automatic-imports
 */
function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/styles/settings/colors.less"),
        path.resolve(__dirname, "./src/styles/settings/layout.less"),
        path.resolve(__dirname, "./src/styles/settings/spacing.less"),
        path.resolve(__dirname, "./src/styles/settings/typography.less")
      ]
    });
}

module.exports = {
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type => addStyleResource(config.module.rule("less").oneOf(type)));
  }
};
