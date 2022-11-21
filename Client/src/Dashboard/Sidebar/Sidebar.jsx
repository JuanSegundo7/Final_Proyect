import React from 'react';
import "./Sidebar.css"
import {Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <nav id="dashboard-sidebar">
            <div id="flex-sidebar">
                <ul>
                    <Link to="/users"><li>Users</li></Link>
                    <Link to="/products"><li>Products</li></Link>
                    <Link to="/create"><li>Create Product</li></Link>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
