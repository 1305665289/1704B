import React from 'react';
import RouterView from './RouterView'
import config from './routerConfig'
import {BrowserRouter} from 'react-router-dom'

import styles from './index.module.scss'
import {Router} from 'react-router-dom'
import {createBrowserHistory } from 'history'

const history = createBrowserHistory ();

export default ()=>{
    return <Router history={history}> 
        <h1 className={styles.h1}>我是H1标题</h1>
        <h1 className="h1">我是H1标题</h1>
        <h1 id="h1" className={styles.h1}>我是H1标题</h1>
        <RouterView routes={config.routes}/>
    </Router>
}

// let token = '';
// const beforeEach = (location?:any)=>{
//     console.log('location...', location, history);
//     // 根据cookie中是否有登录态，和去的页面是否是登陆页面判断
//     if (!token && location.pathname !== '/login'){
//         history.push({pathname:'/login'});
//     }
// }
// const unListen = history.listen(beforeEach);
// // beforeEach(history.location);
