import Vue from 'vue'
import Router from 'vue-router'

import LkLandingPage from '@/components/LandingPage'
import LkWorkPage from '@/components/WorkPage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/:section?',
			name: 'Landing',
			component: LkLandingPage
		},
		{
			path: '/works/list',
			name: 'Work',
			component: LkWorkPage
		}
	],
	mode: 'history'
})
