export default {

	head: {
		title: 'nuxt',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	css: [
	],

	plugins: [
	],

	components: true,

	buildModules: [
	],

	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth-next'
	],

	axios: {
		baseURL: 'http://laravel.devv',
		credentials: true,
		headers: {
            'X-Requested-With' : 'XMLHttpRequest',
        },
	},

	auth: {
		redirect: {
			login: '/',
			logout: '/',
			home: '/dashboard'
		},
		strategies: {
			'laravelSanctum': {
				provider: 'laravel/sanctum',
				url: 'http://laravel.devv',
				endpoints: {
					login: { url: '/web/login', method: 'post' },
					logout: { url: '/web/logout', method: 'post' },
					user: { url: '/web/user', method: 'get' }
				}
			},
		}
	},

	build: {
	}
}
