require('dotenv').config({ path: './.env.'+process.env.NODE_ENV })

const i18nOptions = {
	baseUrl: process.env.BASE_URL,

	locales: [{
		name: 'Russia',
		code: 'ru',
		iso: 'ru-RU',
		file: 'ru-RU.js',
		domain: process.env.BASE_URL_RU
	},
	{
		name: 'English',
		code: 'en',
		iso: 'en-US',
		file: 'en-US.js',
		domain: process.env.BASE_URL_EN
	}],
	langDir: 'lang/',

	lazy: true,
	defaultLocale: 'ru',
	vueI18nLoader: true,
	strategy: 'no_prefix',

	detectBrowserLanguage: {
		// If enabled, a cookie is set once a user has been redirected to his
		// preferred language to prevent subsequent redirections
		// Set to false to redirect every time
		useCookie: true,
		// Cookie name
		cookieKey: 'i18n_redirected',
		// Set to always redirect to value stored in the cookie, not just once
		alwaysRedirect: false,
		// If no locale for the browsers locale is a match, use this one as a fallback
		fallbackLocale: null
	},

	seo: false,
	differentDomains: true,
	forwardedHost: true,
	silentTranslationWarn: process.env.NODE_ENV === 'production'
}

module.exports = i18nOptions