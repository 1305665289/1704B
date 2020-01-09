import React from 'react'
import RouterView from './RouterView'
import {Link} from 'react-router-dom'

// 引入一级路由
// 引入二级路由
const Home = React.lazy(() => import('../view/main/Home'));

export default {
    routes: [{
        path: '/login',
        component: ()=>(<><p>登陆页面</p><Link to="/main/home">去主页面</Link></>)
    },{
        path: '/main',
        component: (props:any)=>(<>
            <p>主页面</p>
            <RouterView routes={props.routes}></RouterView>
            <footer>
                <Link to="/main/home">首页</Link>
                <Link to="/main/classify">分类</Link>
                <Link to="/main/cart">购物车</Link>
                <Link to="/main/my">我的</Link>
            </footer>
        </>),
        children: [{
            path: '/main/home',
            component: Home
        },{
            path: '/main/classify',
            component: ()=><p>分类</p>
        },{
            path: '/main/cart',
            component: ()=><p>购物车</p>
        },{
            path: '/main/my',
            component: ()=><p>我的</p>
        }]
    },{
        from: '*',
        to: '/main/home'
    }]
}