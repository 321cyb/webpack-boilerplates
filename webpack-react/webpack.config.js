var path = require("path");
var webpack = require("webpack");
var HtmlwebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "src");
var BUILD_PATH = path.resolve(ROOT_PATH, "dist");

if(process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV = "dev";
}


module.exports = {
	entry : path.resolve(APP_PATH, "app.jsx"),
	output: {
		path: BUILD_PATH,
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
				include: APP_PATH
			},
            {
                test: /\.jsx?$/,
                loader: "babel",
                include: APP_PATH,
                query: {
                    presets: ['es2015', 'stage-1', 'react']
                }
            }
		]
	},
    devtool: "source-map",    
	plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
		new HtmlwebpackPlugin({
            title: "Hello webpack!",
            template: path.resolve(ROOT_PATH, "src/index.html"),
        }),
        new ExtractTextPlugin("[name].css"),
	],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    }
}


if (process.env.NODE_ENV !== "production") {
    module.exports.module.loaders[1].query.plugins = [
        ["react-transform", {
            "transforms": [{
                "transform": "react-transform-hmr",
                // if you use React Native, pass "react-native" instead:
                "imports": ["react"],
                // this is important for Webpack HMR:
                "locals": ["module"]
            }]
        }]
    ];
    
    module.exports.module.preLoaders = [
        {
            test: /\.jsx?$/,
            include: APP_PATH,
            loader: 'eslint-loader'
        }
    ];
    
    module.exports.devServer =  {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	};
    
    module.exports.debug = true;
}