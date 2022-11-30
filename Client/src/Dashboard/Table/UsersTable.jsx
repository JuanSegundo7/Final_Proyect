import React, {useEffect, useState} from 'react';

import { DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SecurityIcon from '@mui/icons-material/Security';
import Tooltip from "@mui/material/Tooltip";
import ModalUsers from "../../Components/ProductForm/ModalUsers"

import { useDispatch, useSelector } from "react-redux"
import { updateUser } from '../../redux/Actions/Actions';

import "../Dashboard.css"
import ModalDelete from './ModalDelete';
import Loader from '../../Components/Loader/Loader';
import Clear from '@mui/icons-material/Clear';



export default function DataTable() {

    const State = useSelector((state) => state.Users)        
    const finalArray = State.map((user) => {return ( {id: user._id, name: user.name, lastname: user.lastname, admin: user.admin, enabled: user.enabled} )})
    useEffect(() => {}, [State, finalArray])

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState({})

    let modal
    const [open2, setOpen2] = useState(false)
    const [info2, setInfo2] = useState({})
    const [user, setUser] = useState(false)

    let modal2

    const deleteUser = (e, params) => {
        setInfo2(params.id)
        setOpen2(true)
        setUser(true)
        e.stopPropagation();
    }

    if(open2 == true) modal = <ModalDelete close={setOpen2} info={info2} user={user}/>

    const editProduct = (e, params) => {
        setInfo(params.row)
        setOpen(true)
        e.stopPropagation();
    }
    
    const toggleAdmin = (e, id) =>{
        e.stopPropagation();
        
        const findProduct = State?.find((user) => user._id === id);
        
        if(findProduct){
            if(findProduct.admin){
                findProduct.admin = false;
                dispatch(updateUser(id, {admin:findProduct.admin}))
            } else{
                findProduct.admin = true;
                dispatch(updateUser(id, {admin:findProduct.admin}))
            }
        }
    }

    const toggleEnable = (e, id) => {
        const findProduct = State?.find((user) => user._id === id);
        if(findProduct.enabled){
            findProduct.enabled = false;
            dispatch(updateUser(id,{enabled:findProduct.enabled}));
        } else {
            findProduct.enabled = true;
            dispatch(updateUser(id,{enabled:findProduct.enabled}));
        }
    }
    if(open == true) modal = <ModalUsers close={setOpen} info={info}/>

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'lastname', headerName: 'Last name', width: 250 },
        { field: 'admin', headerName: 'Admin', width: 120 },
        { field: 'enabled', headerName: 'Enabled', width: 120 },
        {
            field: 'actions',
            type: 'actions',
            width: 270,
            getActions: (params) => [
                <Tooltip title="Delete" >
                    <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={(e) => deleteUser(e, params)}
                    />
                </Tooltip>,
                <Tooltip title="Edit">
                    <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Edit"
                    onClick={(e) => editProduct(e, params)}
                    />
                </Tooltip>,
                <Tooltip title="Toggle Admin">
                    <GridActionsCellItem
                    icon={<SecurityIcon />}
                    label="Toggle Admin"
                    onClick={(e) => toggleAdmin(e ,params.id)}
                    />
                </Tooltip>,
                <Tooltip title="Make disabled/enabled">
                <GridActionsCellItem
                    icon={<Clear />}
                    label="Make disabled/enabled"
                    onClick={(e) => toggleEnable(e, params.id)}
                />
                </Tooltip>,

            ],
        },
        
    ];
        // Products.length > 0 && Products.map((user) => {return(user._id)})
        
        
        return (
        <>
        <div id="table" style={{ height: 525, width: '98%', backgroundColor: '#fff', borderRadius: "20px"}}>
            {finalArray.length > 0 ?
                
                <DataGrid
                rows={finalArray}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[7]}
                /> 
                : <Loader/>
            }
        </div>
        {modal}
        {modal2}
        </>
    
    )
}