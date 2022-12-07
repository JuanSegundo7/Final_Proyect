import React from 'react';
import { Route, Routes } from "react-router-dom";
import ProductsTable from "../Table/ProductsTable"
import UsersTable from "../Table/UsersTable"
import Form from "../../Components/ProductForm/ProductForm"

const Switch = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Locked />} />
            <Route exact path="/support" element={<ProductsTable />} />
        </Routes>
    );
}

export default Switch;
