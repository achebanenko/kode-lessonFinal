const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@features': path.resolve(__dirname, 'src/features'),
    },
  },
}
