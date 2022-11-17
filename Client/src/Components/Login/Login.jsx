import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./Login.css";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { postUser,  getOneUser} from "../../redux/Actions/Actions";



const Login = ({close}) => { 

    const dispatch = useDispatch();
    const [myData,setMyData] = useState({});
    const [loginOK,setLoginOK] = useState(0);
    
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
     
      useEffect(()=>{
        //console.log("datos:",myData.data)
        if (myData.hasOwnProperty("data")){
            const resp = dispatch(getOneUser(myData.data.email));
            console.log("esto:",resp)
            setLoginOK(1);
            console.log("estoy adentro")
        /* const userToBeCreated={
            _id: myData.data.email,
            name: myData.data.given_name,
            lastname:myData.data.family_name
        }
        console.log(userToBeCreated) */
        
        //dispatch(postUser(userToBeCreated))
        }
      },[myData])

      const foundUser = useSelector((state) => state.User);
      useEffect(()=>{
        console.log("hola")
      },[foundUser])
      
      useEffect(()=>{
        if (loginOK){
            console.log("login exitoso")
            console.log("user:",foundUser)
            //si me loguee OK, cierro la ventana de login!
            close(0);
        }else
            console.log("login NO exitoso",loginOK)
      },[loginOK])

      
      /*
      const foundUser = useSelector((state) => state.User);
            console.log("usuario en BBDD:",foundUser)
            //console.log("soy el cuadrado:",currentUserInDb)
      */

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
