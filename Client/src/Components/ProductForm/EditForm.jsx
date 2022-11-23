// import React, {useState} from "react";
// import {Modal, TextField, Button} from '@material-ui/core';

// const ModalComponent = () => { 

//     const [modalEditar, setModalEditar]= useState(false);


//     const abrirCerrarModalEditar=()=>{
//         setModalEditar(!modalEditar);
//     }

//     const bodyEditar=(
//         <div>
//           <h3>Editar Artista</h3>
//           <TextField label="Artista" name="artista" onChange={handleChange} value={artistaSeleccionado&&artistaSeleccionado.artista}/>
//           <TextField label="País" name="pais" onChange={handleChange} value={artistaSeleccionado&&artistaSeleccionado.pais}/>          
//             <TextField label="Ventas" name="ventas" onChange={handleChange} value={artistaSeleccionado&&artistaSeleccionado.ventas}/>
//             <TextField label="Género" name="genero" onChange={handleChange} value={artistaSeleccionado&&artistaSeleccionado.genero}/>
//           <div align="right">
//             <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
//             <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
//           </div>
//         </div>
//       )


//     return (
//         <Modal
//         open={modalEditar}
//         onClose={abrirCerrarModalEditar}>
//           {bodyEditar}
//         </Modal>    
        
//     )
// }


// export default ModalComponent;
