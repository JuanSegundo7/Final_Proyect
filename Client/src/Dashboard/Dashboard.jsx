import React from 'react';
import Navbar from "./Navbar/Navbar"
import Sidebar from "./Sidebar/Sidebar"
import Switch from "./Switch/Switch"
import "./Dashboard.css"
import { useDispatch } from 'react-redux';
import { getProducts } from '../redux/Actions/Actions';

const Marquetes = () => {
    const dispatch = useDispatch();
    dispatch(getProducts());

    return (
        <>
        <Navbar />
        <div id="flex-contain">
            <Sidebar />
            <div id="dashboard-contain">
                <Switch />
            </div>
        </div>
        </>
    );
}


export default Marquetes;
