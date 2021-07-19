module.exports = {
    router: {
        linkActiveClass: 'active',
        // 自定义路由表
        extendRoutes(routes, resolve) {
            routes.push(...[
                {
                    path: '/register',
                    name: 'register',
                    component: resolve(__dirname, 'pages/login/')
                },
                {
                    path: '/editor/:_slug',
                    name: 'editor',
                    component: resolve(__dirname, 'pages/editor')
                },
            ])
        }
    },
    server: {
        host: '0.0.0.0',
        port: 3000
    },
    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
      ]
}