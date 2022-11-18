import React from "react";
import Authentication_button from "./AuthenticationButton/Authentication-button"
import "./Login.css"

const Login = ({close}) => { 
    return (
        <article id="wrapper">
            <article id="wrapper-container">
                <article id="wrapper-x" onClick={() => close(0)}>
                    X
                </article>
                <Authentication_button />
            </article>
        </article>
    )
}


export default Login;
