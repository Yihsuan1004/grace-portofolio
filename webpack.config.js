const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
			{
				test: /.css$/, 
				use: [
					'style-loader',  
					'css-loader'
				]
			}
		]
    },
};