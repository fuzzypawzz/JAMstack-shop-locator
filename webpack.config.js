const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: [
		path.resolve(__dirname, "/node_modules/regenerator-runtime/runtime.js"),
		path.resolve(__dirname, "./src/index.js"),
	],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		libraryTarget: "var",
		library: "ShopLocator",
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: "style-loader",
						options: { injectType: "singletonStyleTag" },
					},
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
	resolve: {
		alias: {
			handlebars: "../../node_modules/handlebars/dist/handlebars.js",
			autoComplete: "../../node_modules/@tarekraafat/autocomplete.js",
		},
		extensions: ["*", ".js", ".tsx", ".ts"],
		modules: [path.resolve(__dirname, "src")],
	},
	plugins: [new CleanWebpackPlugin()],
};
