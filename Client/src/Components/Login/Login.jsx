import React from 'react';
import {Link} from "react-router-dom";
import "./Login.css";
import { useEffect, useState} from "react";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
//import Container from '../Carrousel/Carrousel';
//import jwt_decode from "jwt-decode";  //no se utiliza, se puede desinstalar


const Login = ({close}) => { 

    const [myData,setMyData] = useState({});
    //const [loginOK,setLoginOK] = useState(0);
    
      const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                const data = await axios("https://www.googleapis.com/oauth2/v3/userinfo",
                {headers: {
                    "Authorization": `Bearer ${response.access_token}`
                }})
                //console.log(data)
                setMyData(data)
            }catch(unError){
                console.log(unError)
            }
        }
      });
     
      /* useEffect(()=>{
        console.log("datos:",myData)
        if (myData.hasOwnProperty("data")){
        setLoginOK(1);
        }
      },[myData]) */


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
                    <button id="login-btn-google" type="button" onClick={login}>
                        Sign in with Google 🚀{' '}
                    </button>
                    
                    <p>Do not have an account? <Link>Sign Up!</Link></p>
                </form>
            </article>
        </article>
    );
}

export default Login;
