const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra()

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''
module.exports = {
  // ...
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  // ...
};
