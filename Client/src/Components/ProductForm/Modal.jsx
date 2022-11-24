import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const ModalComponent = ({openModal, closeModal, info, close}) => {

  console.log(info)

  const handleChange=(e)=>{
    console.log(e, "E")
    const {name, value}=e.target;

    setSelectedProduct(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const [selectedProduct, setSelectedProduct] = React.useState({
    id: "",
    brand: "",
    description: "",
    name: "",
    price: "",
    stock: ""
  })


  return (
    <article id="wrapper">
    <article id="wrapper-container">
        <article id="wrapper-x" onClick={() => close(false)}>
            X
        </article>
        <form>
          <input  label="name" name="name" onChange={e => handleChange(e)} value={info&&info.name}></input>
          <input  label="category" name="category" onChange={e => handleChange(e)} value={info&&info.category}></input>
          <input  label="brand" name="brand" onChange={e => handleChange(e)} value={info&&info.brand}></input>
          <input  label="price" name="price" onChange={e => handleChange(e)} value={info&&info.price}></input>
          <input  label="stock" name="stock" onChange={e => handleChange(e)} value={info&&info.stock}></input>
        </form>
    </article>
    </article>

  );
}

export default ModalComponent;

