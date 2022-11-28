import React,{useState} from 'react';
import { DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Clear from '@mui/icons-material/Clear';
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux"
import Delete from "../../Components/Alert/Delete"
import Modal from "../../Components/ProductForm/Modal"
import "../Dashboard.css"
import { updateProduct } from '../../redux/Actions/Actions';


export default function DataTable() {
    const State = useSelector((state) => state.Products)        
    const finalArray = State.map((product) => {return ( {id: product._id, name: product.name, description: product.description, brand: product.brand.name, brand2: product.brand._id ,category: product.category.name, category2: product.category._id , price: product.price, stock: product.stock, enabled: product.enabled} )})
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState({})
    let modal

    const dispatch = useDispatch()

    const deleteProduct = (e, params) => {
        Delete(params.row.id)
        e.stopPropagation();
    }

    const editProduct = (e, params) => {
        setInfo(params.row)
        setOpen(true)
        e.stopPropagation();
    }


    const toggleEnable = (e, id) => {
        e.stopPropagation();
        const findProduct = State?.find((product) => product._id === id);
        
        if(findProduct){
            if(findProduct.enabled){ //=== true
                findProduct.enabled = false;
                dispatch(updateProduct(id, {enabled:findProduct.enabled}));
            } else{
                findProduct.enabled = true
                dispatch(updateProduct(id, {enabled:findProduct.enabled}));
            }
        }
    }

    if(open == true) modal = <Modal close={setOpen} info={info}/>

    const columns = [
        { field: 'id', headerName: 'ID', width: 220 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'category', headerName: 'Category', width: 130 },
        { field: 'brand', headerName: 'Brand', width: 120 },
        { field: 'stock', headerName: 'Stock', type: 'number', width: 70},
        { field: 'price', headerName: 'Price', type: 'number', width: 90},
        { field: 'enabled', headerName: 'Enabled', width: 110},
        {
            field: 'actions',
            type: 'actions',
            width: 150,
            getActions: (params) => [
                <Tooltip title="Delete">
                    <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={(e) => deleteProduct(e,params)}
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
                    onClick={(e) => toggleEnable(e, params.id)}
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