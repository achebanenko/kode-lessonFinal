const path = require('path')

module.exports = ({ config, mode }) => {
  config.resolve.alias = {
    '@ui': path.resolve(__dirname, '../src/ui'),
    '@features': path.resolve(__dirname, '../src/features'),
    '@shared': path.resolve(__dirname, '../src/shared'),
  }
  return config
}
