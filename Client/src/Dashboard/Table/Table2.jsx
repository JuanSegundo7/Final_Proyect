import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux"

export default function DataTable() {

    const Products = useSelector((state) => state.Products)

    const finalArray = Products.map((product) => {return ( {id: product._id, name: product.name, description: product.description, brand: product.brand.name, category: product.category.name, price: `$${product.price}`, stock: product.stock} )})

    const columns = [
        { field: 'id', headerName: 'ID', width: 220 },
        { field: 'name', headerName: 'Name', width: 250 },
        // { field: 'description', headerName: 'Description', width: 130 },
        { field: 'category', headerName: 'Category', width: 130 },
        { field: 'brand', headerName: 'Brand', width: 120 },
        { field: 'stock', headerName: 'Stock', type: 'number', width: 90},
        { field: 'price', headerName: 'Price', type: 'number', width: 90},

    ];
    // Products.length > 0 && Products.map((product) => {return(product._id)})
           


    return (
        <div style={{ height: 525, width: '98%', backgroundColor: '#fff', borderRadius: "20px"}}>
        {finalArray.length > 0 ?
        <DataGrid
        rows={finalArray}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[7]}
        checkboxSelection
        /> : <h1>Cargando..</h1>
        }   
        </div>
    )
}