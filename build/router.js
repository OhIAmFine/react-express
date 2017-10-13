//加载依赖
import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import {store, history} from './store';
import {modalUpdate} from './actions/modal';

import Layout from './pages/layout.jsx'; //框架
import NotFound from './pages/not_found.jsx'; //404

import '../../node_modules/antd/dist/antd.less';

function loadPage(end) {
    if(end) {
        store.dispatch(modalUpdate({
            loadingPage: false
        }));
    }else{
        store.dispatch(modalUpdate({
            loadingPage: true
        }));
    }
}


export default (
    <Provider store={store}>
        <Router history={history}>
            <Route path="client" component={Layout}>
                <IndexRoute component={NotFound} />
                <Route path="index" getIndexRoute={(partialNextState, callback)=>{
                    loadPage();
                    require.ensure([], function (require) {
                        let loadComponent = require('./pages/index/index_app.jsx');
                        loadPage(true);
                        callback(null, {
                            component: loadComponent.default
                        });
                    }, 'index');
                }}>
                </Route>
                <Route path="form-lists" getIndexRoute={(partialNextState, callback)=>{
                    loadPage();
                    require.ensure([], function (require) {
                        let loadComponent = require('./pages/form-lists/index.jsx');
                        loadPage(true);
                        callback(null, {
                            component: loadComponent.default
                        });
                    }, 'form-lists');
                }}>
                </Route>
            </Route>
        </Router>
    </Provider>
);