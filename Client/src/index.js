import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './redux/Store/Store.jsx';
import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = "dev-uiy3ews0bp07u8ac.us.auth0.com";
const AUTH0_CLIENTID = "YmTyzeqEeDXDqXMN2FJRbDN5PR0CLgWD";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider domain={DOMAIN} clientId={AUTH0_CLIENTID} redirectUri={window.location.origin} cacheLocation="localstorage" >
        <App />
    </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
