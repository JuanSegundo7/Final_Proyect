import React from 'react';
import Container from '../Carrousel/Carrousel'
import {Link} from "react-router-dom"
import "./Login.css"

const Login = ({close}) => {
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
                    <button id="login-btn" >SIGN IN</button>
                    <p>Do not have an account? <Link>Sign Up!</Link></p>
                </form>
            </article>
        </article>
    );
}

export default Login;
