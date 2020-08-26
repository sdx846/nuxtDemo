// 验证是否登录的中间件:直接在组件中middleware:'authenticated'即可
export default function ({store,redirect}){
    //如果没有用户信息，跳转到登录页
    if(!store.state.user){
        return redirect('/login')
    }
}