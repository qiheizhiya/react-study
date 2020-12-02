import Home from './Home'
import News from './News'
import NewsDetail from './NewsDetail'
import NewHome from './NewsHome'
import NewsSearch from './NewsSearch'

export default [
	{ path: '/', name: 'home', exact: true, component: Home },
	{
		path: '/news', name: 'news', component: News,
		children: [
			{ path: '/', name: 'newsHome', exact: true, component: NewHome },
			{ path: '/detail', name: 'newsDetail', component: NewsDetail },
			{ path: '/search', name: 'newsSearch', component: NewsSearch }
		]
	}
]