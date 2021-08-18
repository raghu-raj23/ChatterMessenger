import React from 'react';
import {GoogleOutlined, FacebookOutlined} from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
    return (
        <div id = "login-page">
            <div id = "login-card">
                <h2>Welcome to Chatter!</h2>

                <div className = 'login-button google' onclick={() => auth.sighInWithRedirect(new firebase.auth.GoogleAuthProvider())} >
                <GoogleOutlined /> Sign-in with Google
                </div>

                <br/>
                <br/>

                <div className = 'login-button facebook' onclick={() => auth.sighInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                <FacebookOutlined /> Sign-in with Facebook
                </div>
            </div>
        </div>

        
    );
}

export default Login;