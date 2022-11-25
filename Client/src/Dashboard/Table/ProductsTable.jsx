import React,{useState} from 'react';
import { DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Clear from '@mui/icons-material/Clear';
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux"
import Delete from "../../Components/Alert/Delete"
import Modal from "../../Components/ProductForm/Modal"
import "../Dashboard.css"


export default function DataTable() {
    const State = useSelector((state) => state.Products)        
    const finalArray = State.map((product) => {return ( {id: product._id, name: product.name, description: product.description, brand: product.brand.name, category: product.category.name, price: `$${product.price}`, stock: product.stock} )})
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState({})
    let modal

    const deleteProduct = (e) => {
        Delete()
        e.stopPropagation();
    }

    const editProduct = (e, params) => {
        setInfo(params.row)
        setOpen(true)
        e.stopPropagation();
    }


    const toggleEnable = () => {
        
    }

    if(open == true) modal = <Modal close={setOpen} info={info}/>

    const columns = [
        { field: 'id', headerName: 'ID', width: 220 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'category', headerName: 'Category', width: 130 },
        { field: 'brand', headerName: 'Brand', width: 120 },
        { field: 'stock', headerName: 'Stock', type: 'number', width: 90},
        { field: 'price', headerName: 'Price', type: 'number', width: 90},
        {
            field: 'actions',
            type: 'actions',
            width: 200,
            getActions: (params) => [
                <Tooltip title="Delete">
                    <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={(e) => deleteProduct(e)}
                    />
                </Tooltip>,
                <Tooltip title="Edit">
                    <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Edit"
                    onClick={(e) => editProduct(e, params)}
                    />
                </Tooltip>,
                <Tooltip title="Make disabled">
                    <GridActionsCellItem
                    icon={<Clear />}
                    label="Toggle Admin"
                    // onClick={toggleAdmin(params.id)}
                    />
                </Tooltip>,
            ]}
        
    ];
        // Products.length > 0 && Products.map((product) => {return(product._id)})
        
    return (
        <>
        <div id="table" style={{ height: 525, width: '98%', backgroundColor: '#fff', borderRadius: "20px"}}>
            {finalArray.length > 0 ?
            
            <DataGrid
            
            rows={finalArray}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[7]}
            
            /> : <h1>Cargando..</h1>
            }   
        </div>
        {modal}
        </>
    )
}