const path = require('path');


module.exports = {
  webpack: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'json': path.resolve(__dirname, './src/json')
    },
  },
};
