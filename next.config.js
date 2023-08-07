/** @type {import('next').NextConfig} */
const nextConfig = {
	// ...other config options...
	webpack: (config, { isServer }) => {
		// Add a rule to handle font files
		config.module.rules.push({
			test: /\.(woff|woff2|ttf)$/,
			use: {
				loader: 'file-loader',
				options: {
					publicPath: '/_next/static/fonts',
					outputPath: 'static/fonts',
					name: '[name].[ext]'
				}
			}
		});

		return config;
	}
};

module.exports = nextConfig;
