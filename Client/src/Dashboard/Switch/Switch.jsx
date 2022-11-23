import React from 'react';
import { Route, Routes } from "react-router-dom";
import ProductsTable from "../Table/ProductsTable"
import UsersTable from "../Table/UsersTable"
import Form from "../../Components/ProductForm/ProductForm"

const Switch = () => {
    return (
        <Routes>
            <Route exact path="/users" element={<UsersTable />} />
            <Route exact path="/products" element={<ProductsTable />} />
            <Route exact path="/create" element={<Form />} />
        </Routes>
    );
}

export default Switch;
