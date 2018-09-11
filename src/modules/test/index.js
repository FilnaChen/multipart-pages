import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/index.js';
import Login from '../login/index.js';

class Test extends Component {
    componentWillMount() {
        localStorage.setItem("getStorage",true);
        localStorage.removeItem('getStorage');
        window.addEventListener("storage",function(event){
            if(event.key === 'getStorage') {
                localStorage.setItem('postStorage',sessionStorage.getItem('userinfo'));
                localStorage.removeItem('postStorage');
            }else if(event.key === 'postStorage') {
                if(JSON.parse(event.newValue) && (sessionStorage.length === 0 || JSON.parse(sessionStorage.getItem('userinfo')).time < JSON.parse(event.newValue).time)) {
                    sessionStorage.setItem('userinfo',event.newValue);
                    if(JSON.parse(sessionStorage.getItem('userinfo')).username) {
                        window.location.href="http://localhost:8080/src/#/index/home";
                    }else {
                        window.location.href="http://localhost:8080/src/#/index/login";
                    }
                }
            }
        });
    }
    render(){
        return (
            <div>
               <Switch>
                   <Route path={`/index/home`} component={Home} exact />
                   <Route path={`/index/login`} component={Login} exact />
                   <Redirect to={`/index/login`} />
               </Switch>
            </div>
        );
    }
}

export default Test;