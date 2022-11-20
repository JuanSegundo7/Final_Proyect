import React from 'react';
import "./Sidebar.css"

const Navbar = () => {
    return (
        <nav id="dashboard-sidebar">
            <div id="flex-sidebar">
                <ul>
                    <li>Users</li>
                    <li>Products</li>
                    <li>Create Product</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
