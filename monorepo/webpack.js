const path = require('node:path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(?<ext>ts|tsx)$/,
        exclude: /node_modules|\.d\.ts$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ],
  },
  output: {
    filename: '[name].js',
    clean: true,
    library: 'monorepo',
    libraryTarget: 'umd',
    publicPath: '/assets/',
    umdNamedDefine: true
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  devtool: false,
  entry: path.resolve(__dirname, 'src/index.ts'),
  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom',
    'react-dom/client': 'umd react-dom/client'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4
      }),
      new CssMinimizerPlugin({
        parallel: 4
      })
    ],
    splitChunks: {
      filename: 'js/chunks/[name].js'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.tsx']
  }
};
