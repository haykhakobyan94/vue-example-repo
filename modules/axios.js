require('dotenv').config({ path: './.env.'+process.env.NODE_ENV })

const axiosOptions = {
	https: true,
	// Automatically intercept failed requests and retries them whenever posible using axios-retry.
	retry: true,
	debug: true,

	baseURL: process.env.API_URL,
	browserBaseURL: process.env.API_URL_BROWSER,

	redirectError: {
		401: '/login',
		404: '/notfound'
	},

	headers: {
		'Authorization': 'Basic YXJvbW9kZXY6YXJvbW9kZXY='
		// 'Content-Type': 'application/x-www-form-urlencoded'
	}
}

module.exports = axiosOptions