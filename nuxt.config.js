// nuxt.js配置文件 不使用默认的路由，开始自定义路由
module.exports = {
    router: {
        //<nuxt-link></nuxt-link>选中的导航默认添加的class
        linkActiveClass: 'active',
        //自定义路由表规则
        extendRoutes(routes, resolve) {
            //清除nuxt.js基于pages目录默认生成的路由表规则：例如没有nuxt.config.js文件我们访问http://localhost:3000/layout就可以访问到pages/layout/index.vue
            routes.splice(0);
            routes.push(...[
                {
                    // name: 'custom',
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/index.vue'),
                    children:[
                        {
                            path:'',//默认子路由
                            name:'home',
                            component:resolve(__dirname,'pages/home/')
                        },
                        {
                            path:'/login',
                            name:'login',
                            component:resolve(__dirname,'pages/login/')
                        },
                        {
                            path:'/register',
                            name:'register',
                            component:resolve(__dirname,'pages/login/')
                        },
                        {
                            path:'/profile/:username',
                            name:'profile',
                            component:resolve(__dirname,'pages/profile/')
                        },
                        {
                            path:'/settings',
                            name:'settings',
                            component:resolve(__dirname,'pages/settings/')
                        },
                        {
                            path:'/editor',
                            name:'editor',
                            component:resolve(__dirname,'pages/editor/')
                        },
                        {
                            path:'/article',
                            name:'article',
                            component:resolve(__dirname,'pages/article/')
                        },
                    ]
                }
            ])
        }
    }
}