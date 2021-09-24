const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/index'),
      "@sections" : path.resolve(__dirname, 'src/sections/index'),
      "@context" : path.resolve(__dirname, 'src/context/'),
      "@assets" : path.resolve(__dirname, 'src/assets/index'),
    }
  }
};