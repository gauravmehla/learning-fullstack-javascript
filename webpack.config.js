const {resolve} = require('path');

module.exports = {
	entry : './src/index.js',
	output : {
		path : resolve(__dirname + '/public/'),
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				loaders : 'babel-loader'
			},
			{
				test : /\.json$/,
				loaders : 'json-loader'
			}
		]
	}
};