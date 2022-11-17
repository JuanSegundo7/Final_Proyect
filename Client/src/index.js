import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './redux/Store/Store.jsx';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { Auth0Provider } from "@auth0/auth0-react";


// AGREGAR ARCHIVO .ENV

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider domain="dev-20y5w7kc2iwedwea.us.auth0.com" clientId="41AD6aVCeArBQ8gurncDa73s6WjLnJ9s" redirectUri={window.location.origin}>
    {/* <GoogleOAuthProvider clientId="30469669249-eip3hh72bp7289tevpruvuu0i30k730l.apps.googleusercontent.com"> */}
        <App />
    {/* </GoogleOAuthProvider> */}
    </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
