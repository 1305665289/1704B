import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/index';
// 引入StoreContext的Provider
import StoreContext from './context/StoreContext'
import store from './store/index'


ReactDOM.render(<StoreContext.Provider value={store}>
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
</StoreContext.Provider>, document.getElementById('root'));
