import React from 'react';
import Navbar from "./Navbar/Navbar"
import Sidebar from "./Sidebar/Sidebar"
import Table from "./Table/Table2";
import "./Dashboard.css"

const Marquetes = () => {
    return (
        <>
        <Navbar />
        <div id="flex-contain">
            <Sidebar />
            <div id="dashboard-contain">
                <Table />
            </div>
        </div>
        </>
    );
}


export default Marquetes;
