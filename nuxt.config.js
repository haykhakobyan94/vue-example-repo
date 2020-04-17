/* eslint-disable import/order */
/* eslint-disable nuxt/no-cjs-in-config */
/* eslint-disable no-console */
const axiosOptions = require('./modules/axios')
const i18nOptions = require('./modules/i18n')
const authOptions = require('./modules/auth')
const svgSpriteOptions = require('./modules/svg-sprite')
require('dotenv').config()

export default {
	// Nuxt.js lets you create environment variables client side, also to be shared from server side. - https://nuxtjs.org/api/configuration-env
	// Define the server connection variables for your application inside - https://nuxtjs.org/api/configuration-server
	server: {
		port: process.env.BASE_PORT, // default: 3000
		host: process.env.BASE_HOST // default: localhost
	},
	// Isomorphic application (server-side rendering + client-side navigation) - https://nuxtjs.org/api/configuration-mode
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		htmlAttrs: {
			class: 'html'
		},
		bodyAttrs: {
			class: 'body app'
		},
		title: 'Энциклопедия парфюмерии Aromo.ru: 91945 ароматов, 116246 отзывов о парфюме',
		meta: [{
			charset: 'utf-8'
		},
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1'
		},
		{
			hid: 'description',
			name: 'description',
			content: '✨Самая полная энциклопедия ароматов с описанием и отзывами покупателей. Авторские статьи и обзоры. Площадка для распива и обмена парфюма. Дарим мл за регистрацию и отзывы! Мы знаем о парфюмерии всё — узнайте и вы!'
		}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: 'rgba(97, 58, 231, .6)',
		height: '5px',
		continuous: true,
		throttle: 0
	},
	/*
	 ** Global CSS and LESS
	 */
	css: [
		'@/assets/styles/variables.css',

		'@/assets/styles/reboot.css',
		'@/assets/styles/layout.less',

		'@/assets/styles/ui.less'
	],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{ src: '@/plugins/global.base.components.js', ssr: false },
		// Doc: https://modernizr.com/download?setclasses - файл генерирует автоматически при сборке проекта командой - modernizr -c modernizr-config.json -d ./plugins/ -u
		{ src: '@/plugins/modernizr.js', ssr: false },

		// Doc: https://vuejs.org/v2/guide/plugins.html
		{ src: '@/plugins/global.helpers.js', ssr: false },

		// Doc: https://github.com/vuejs/vue-touch
		{ src: '@/plugins/vue-touch.js', ssr: false },
		// Doc: https://github.com/robsontenorio/vue-api-query
		{ src: '@/plugins/vue-api-query.js', ssr: false },
		// Работаеем с глобальными событиями axios ( пока что не используем, но пригодится для добавления заголовков Auth )
		{ src: '@/plugins/axios.js', ssr: false },

		// Doc: https://logaretm.github.io/vee-validate/
		{ src: '@/plugins/vee-validation.js' },

		// Подключаем lodash глобально
		{ src: '@/plugins/lodash.js'},

		{ src: '@/plugins/ui/alert.js', ssr: false }
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/stylelint-module
		'@nuxtjs/stylelint-module',
		// Doc: https://github.com/nuxt-community/router-module
		['@nuxtjs/router', {
			path: 'router/'
		}]
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		['@nuxtjs/axios', axiosOptions],
		// Doc: https://auth.nuxtjs.org/
		['@nuxtjs/auth', authOptions],
		// Doc: https://pwa.nuxtjs.org/
		['@nuxtjs/pwa'],
		// Doc: https://nuxt-community.github.io/nuxt-i18n/
		['nuxt-i18n', i18nOptions],
		// Doc: https://github.com/nuxt-community/robots-module
		['@nuxtjs/robots', {
			UserAgent: '*',
			Disallow: '/'
		}],
		// Doc: https://github.com/nuxt-community/modules/tree/master/packages/localtunnel
		['@nuxtjs/localtunnel', { subdomain: 'aromo' }],
		// Doc: https://github.com/nuxt-community/style-resources-module
		['@nuxtjs/style-resources'],
		// Doc: https://github.com/nuxt-community/svg-sprite-module
		['@nuxtjs/svg-sprite', svgSpriteOptions],
		['@nuxtjs/webpackmonitor']
	],
	/*
	 ** Router configuration
	 */
	router: {
		middleware: []
	},
	styleResources: {
		less: [
			'@/assets/styles/layout/variables.less',
			'@/assets/styles/layout/mixins.less'
		]
	},
	/*
	 ** Build configuration
	 */
	build: {
		transpile: ["vee-validate/dist/rules"],
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
		},
		postcss: {
			plugins: {
				autoprefixer: {},
				cssnano: {
					preset: 'default'
				},
				'css-mqpacker': {},
				'postcss-responsive-type': {},
				'postcss-functions': {
					functions: {
						pxToRem(value, base = 15) {
							const calcRem = (value / base).toFixed(7)
							return calcRem + 'rem'
						},
						rem(value) {
							return (value / 15).toFixed(7) + 'rem';
						}
					}
				}
			},
			order: 'cssnanoLast'
		}
	}
}
