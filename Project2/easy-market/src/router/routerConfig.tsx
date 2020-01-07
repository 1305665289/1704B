import React from 'react'
import RouterView from './RouterView'
import {Link} from 'react-router-dom'

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
            component: ()=><p>首页</p>
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
        to: '/login'
    }]
}