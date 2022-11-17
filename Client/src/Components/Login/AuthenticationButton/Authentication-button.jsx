import React from "react";

import Login_button from "../Login-button/Login-button"
import Logout_button from "../Logout-button/Logout-button"

import { useAuth0 } from "@auth0/auth0-react";

export default function Authentication_button() {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <Logout_button /> : <Login_button />

}
