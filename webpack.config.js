const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const webpackConfig = {
  entry: path.resolve(__dirname, 'src/index.js'),
  externals: process.env.WITH_EXTERNALS ? ['superagent-proxy'] : undefined,
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 0,
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  target: 'node',
};

module.exports = webpackConfig;
