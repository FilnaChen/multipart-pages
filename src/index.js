import React from 'react';
import { render } from 'react-dom';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './modules/test/index.js';
import Test from './modules/test/index.js';

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={Test}></Route>
                <Route path="/index" component={Test}></Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("app")
)
