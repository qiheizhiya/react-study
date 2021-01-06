export default {
    routes: [
        {
            path: '/',
            component: '../layouts/index',
            exact: false,
            routes: [
                { path: '/', component: "./index", title: '首页', wrappers: ["@/routes/HandlerTitle"] },
                { path: '/login', component: "./login", title: '登录页' },
                { path: './welcome', component: "./welcome", title: '欢迎页', wrappers: ["@/routes/PrivateRoute"] }
            ]
        }
    ]
}