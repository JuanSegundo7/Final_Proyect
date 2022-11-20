import React from 'react';
import { Route, Routes } from "react-router-dom";
import Table from "../Table/Table2"
import Form from "../../Components/ProductForm/ProductForm"

const Switch = () => {
    return (
        <Routes>
            <Route exact path="/users" element={<Table />} />
            <Route exact path="/products" element={<Table />} />
            <Route exact path="/create" element={<Form />} />
        </Routes>
    );
}

export default Switch;
