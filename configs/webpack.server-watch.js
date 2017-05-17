'use strict';


const Webpack = require('webpack');

const Config = require('./webpack.server');
const GeneralConfig = require('./general');


Config.cache = true;
Config.watch = true;

// Config.entry.unshift(
//     'webpack/hot/poll?1000'
// );

Config.output.publicPath = 'http://' + GeneralConfig.hostname + ':' + GeneralConfig.port + '/dist';

// Config.plugins = [
//     new Webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
//     new Webpack.HotModuleReplacementPlugin(),
//     new Webpack.NoEmitOnErrorsPlugin()
// ];


module.exports = Config;
