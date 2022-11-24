import React from 'react';
import {useDispatch} from "react-redux";
import {updateProduct} from "../../redux/Actions/Actions"

const ModalComponent = ({openModal, closeModal, info, close}) => {
  const dispatch = useDispatch();

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
    name: info.name,
    brand: info.brand,
    category: info.category,
    description: info.description,
    price: info.price,
    stock: info.stock
  })

  const handleSubmit = (e) => {
    let data = {
      name: selectedProduct.name,
      brand: selectedProduct.brand,
      category: selectedProduct.category,
      description: selectedProduct.description,
      price: parseInt(selectedProduct.price.replace('$', '')),
      stock: parseInt(info.stock)
    }

    console.log(data)


    e.preventDefault();
  }


  return (
    <article id="wrapper">
    <article id="wrapper-container">
        <article id="wrapper-x" onClick={() => close(false)}>
          la concha tuya marqutos        
        </article>
        <form>
          <fieldset>
            <label>Name</label>
            <input  name="name" onChange={e => handleChange(e)} value={selectedProduct.name}></input>
          </fieldset>
          <fieldset>
            <label>Category</label>
            <input label="category" name="category" onChange={e => handleChange(e)} value={selectedProduct.category}></input>
          </fieldset>
          <fieldset>
            <label>Brand</label>
            <input label="brand" name="brand" onChange={e => handleChange(e)} value={selectedProduct.brand}></input>
          </fieldset>
          <fieldset>
            <label>Price</label>
            <input label="price" name="price" onChange={e => handleChange(e)} value={selectedProduct.price}></input>
          </fieldset>
          <fieldset>
            <label>Stock</label>
            <input label="stock" name="stock" onChange={e => handleChange(e)} value={selectedProduct.stock}></input>
          </fieldset>
          <textarea name="description" onChange={e => handleChange(e)} value={selectedProduct.description}></textarea>
          <button onClick={handleSubmit}>Edit</button>
          <button onClick={() => close(false)}>Cancel</button>
        </form>
    </article>
    </article>

  );
}

export default ModalComponent;

