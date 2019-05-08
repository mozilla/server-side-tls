const constants = require('../src/js/constants.js');
const profiles = require('../src/js/profiles.js');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const production = process.env.NODE_ENV === 'production';


// the many plugins used
const plugins = [
  new CleanWebpackPlugin(
    ['build/*/*/*', 'build/*/*', 'build/*', 'docs/*/*/*', 'docs/*/*', 'docs/*'],
    {
      root: path.resolve(__dirname, '..'),
      verbose: true
    }
  ),
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
  }),
  new HtmlWebpackPlugin({
    constants,
    profiles,
    title: 'Mozilla SSL Configuration Generator',
    template: 'src/templates/index.ejs'
  }),
  new CopyWebpackPlugin([
    {
      from: 'src/images',
      to: 'images/',
      flatten: false
    }
  ]),
  new MiniCssExtractPlugin({
    filename: '[hash].index.css',
  })
];

// either we analyze or watch
if (process.env.NODE_ENV === 'analyze') {
  plugins.push(
    new BundleAnalyzerPlugin({})
  )
} else {
  plugins.push(
    new BrowserSyncWebpackPlugin({
      host: 'localhost',
      port: 5500,
      server: {
        baseDir: 'build'
      }
    })
  )
}

module.exports = {
  output: {
    crossOriginLoading: 'anonymous',
    library: 'SSLConfigGenerator',
    libraryTarget: 'var',
    path: production ? path.resolve(__dirname, '..', '..', 'docs') : path.resolve(__dirname, '..', 'build'),
    filename: '[hash].[name]'
  },
  entry: {
    'index.js': path.resolve(__dirname, '..', 'src', 'js', 'index.js')
  },
  mode: production ? 'production' : 'development',
  devtool: production ? undefined : 'source-map',
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: {
          loader: 'ejs-loader',
        }
      },
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader',
          options: {
            'helperDirs': [
              path.resolve(__dirname, '..', 'src', 'js', 'helpers')
            ]
          }
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '..', 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            plugins: [
              '@babel/plugin-proposal-object-rest-spread'
            ],
            presets: [
              ['@babel/preset-env', {
                'targets': {
                  'firefox': 57
                },
                'shippedProposals': true
              }]
            ]
          }
        }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        //include: path.resolve(__dirname, '..', 'src'),
        use: [{
          loader: MiniCssExtractPlugin.loader
        },
        'css-loader',
        {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        },
        'sass-loader'
      ]},
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      },
      {
        test: /\.(svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: plugins,
};
