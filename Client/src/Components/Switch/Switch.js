import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from '../Home/Home'

const SwitchRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element= {<Home />} />
        </Routes>
    );
}

export default SwitchRouter ;