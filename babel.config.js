module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        // plugin to remove unneeded components from react native paper reducing bundle size
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
