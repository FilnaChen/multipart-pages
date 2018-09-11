import React, { Component } from 'react';

class Home extends Component {
    handleExit = () => {
        let userinfo = {
            username: '',
            time: new Date().getTime()
        };
        userinfo = JSON.stringify(userinfo);
        sessionStorage.setItem('userinfo',userinfo);
        localStorage.setItem('postStorage',userinfo);
        localStorage.removeItem('postStorage');
        window.location.href="http://localhost:8080/src/#/index/login";
    };
    render() {
        return (
            <div>
                <div>this is home page</div>
                <input type="button" name="exit" value="exit" onClick={this.handleExit} />
            </div>
        )
    }
}
export default Home;