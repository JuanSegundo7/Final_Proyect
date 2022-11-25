import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './redux/Store/Store.jsx';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider domain={process.env.REACT_APP_DOMAIN} clientId={process.env.REACT_APP_AUTH0_CLIENTID} redirectUri={window.location.origin} cacheLocation="localstorage" >
        <App />
    </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
