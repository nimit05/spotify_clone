import React from 'react';
import "./login.css";
import {accessUrl} from './spotify'
function Login() {
    const str = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
    return (
        <div className = "login">
            <img src = {str} alt = " " />
            <a href = {accessUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}   

export default Login;

