import React, { Component } from 'react';

class Login extends Component {
    handleLogin = () => {
        let userinfo = {
            username: 'filna',
            time: new Date().getTime()
        };
        userinfo = JSON.stringify(userinfo);
        sessionStorage.setItem('userinfo',userinfo);
        localStorage.setItem('postStorage',userinfo);
        localStorage.removeItem('postStorage');
        window.location.href="http://localhost:8080/src/#/index/home";
    };
    render() {
        return (
            <div>
                <div>this is login page</div>
                <input type="button" name="login" value="login" onClick={this.handleLogin} />
            </div>
        )
    }
}
export default Login;