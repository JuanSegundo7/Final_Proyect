import * as React from 'react';
import { DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SecurityIcon from '@mui/icons-material/Security';
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux"
import "../Dashboard.css"
import { updateUser } from '../../redux/Actions/Actions';
import { useNavigate } from "react-router-dom";

export default function DataTable() {

    const State = useSelector((state) => state.Users)        
    const finalArray = State.map((user) => {return ( {id: user._id, name: user.name, lastname: user.lastname, admin: user.admin} )})
        
    //console.log(State)

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'lastname', headerName: 'Lastname', width: 250 },
        { field: 'admin', headerName: 'Admin', width: 120 },
        {
            field: 'actions',
            type: 'actions',
            width: 200,
            getActions: (params) => [
                <Tooltip title="Delete" >
                    <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    // onClick={deleteUser(params.id)}
                    />
                </Tooltip>,
                <Tooltip title="Edit">
                    <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Edit"
                    />
                </Tooltip>,
                <Tooltip title="Toggle Admin">
                    <GridActionsCellItem
                    icon={<SecurityIcon />}
                    label="Toggle Admin"
                    onClick={(e) => toggleAdmin(e ,params.id)}
                    />
                </Tooltip>,

            ],
        },
        
    ];
        // Products.length > 0 && Products.map((user) => {return(user._id)})
        
        
        return (
            <div id="table" style={{ height: 525, width: '98%', backgroundColor: '#fff', borderRadius: "20px"}}>
        {finalArray.length > 0 ?
    
            <DataGrid
            rows={finalArray}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[7]}
            /> 
            : <h1>Cargando..</h1>
        }
        </div>
    
    )
}