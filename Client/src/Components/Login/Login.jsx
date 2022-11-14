import React from 'react';
//import Container from '../Carrousel/Carrousel';
import {Link} from "react-router-dom";
import "./Login.css";
import { useEffect} from "react";
import jwt_decode from "jwt-decode";


const Login = ({close}) => {

    function handleCallBackResponse(response){
        let userObject = jwt_decode(response.credential)
        console.log("datos del usuario:",userObject)
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id:"30469669249-eip3hh72bp7289tevpruvuu0i30k730l.apps.googleusercontent.com",
          callback: handleCallBackResponse
        });
    
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          { theme: "filled_blue", size: "large", shape: "pill", width:300, }
        );
    },[]);


    return (
        <article id="wrapper">
            <article id="wrapper-container">
                <article id="wrapper-x" onClick={() => close(0)}>
                    X
                </article>
                <form>
                    <fieldset>
                        <input type="text" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <p>Forgot password?</p>
                    </fieldset>
                    <button id="login-btn">SIGN IN</button>
                    <div id="signInDiv"></div>
                    <p>Do not have an account? <Link>Sign Up!</Link></p>
                </form>
            </article>
        </article>
    );
}

export default Login;
