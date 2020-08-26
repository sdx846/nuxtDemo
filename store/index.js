const cookieparser = process.server?require('cookieparser'):undefined;
//nuxt集成了vuex。在服务端渲染期间运行都是同一个实例，为了防止数据冲突，务必要把state定义成一个函数，返回数据对象。
export const state = () => {
    return {
        user: null
    }
}
export const mutations = {
    setUser(state, data) {
        state.user = data;
    }
}
export const actions = {
    //nuxtServerInit是一个特殊的action方法，这个action会在服务端渲染期间自动调用
    //作用：初始化容器数据，传递数据给客户端使用
    nuxtServerInit({ commit }, { req }) {
        let user = null;
        //如果请求头中有cookie
        if (req.headers.cookie) {
            //cookieparser.parse把cookie字符串转化为js对象.
            const parsed = cookieparser.parse(req.headers.cookie);
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {

            }
        }
        //提交mutation修改state状态
        commit('setUser', user)
    }
}
