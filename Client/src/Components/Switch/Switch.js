import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from '../About/About';
import Form from '../Form/Form';
import Home from '../Home/Home'

const SwitchRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element= {<Home />} />
            <Route exact path="/create" element={<Form/>}/>
        </Routes>
    );
}

export default SwitchRouter ;