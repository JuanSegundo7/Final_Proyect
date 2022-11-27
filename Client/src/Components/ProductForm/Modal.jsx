import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateProduct} from "../../redux/Actions/Actions"

const ModalComponent = ({openModal, closeModal, info, close}) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.Categories);
  console.log('category', category);
  //console.log(info)

  const handleChange=(e)=>{
    //console.log(e, "E")
    const {name, value}=e.target;

    setSelectedProduct(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const [selectedProduct, setSelectedProduct] = React.useState({
    name: info.name,
    brand: info.brand,
    category: '',
    description: info.description,
    price: info.price,
    stock: info.stock
  })

  const handleCategory = (e, ) => {
    setSelectedProduct({...selectedProduct, category: e.target.value})
  }
  //console.log('category', info.category)

  const handleSubmit = (e) => {
    let data = {
      name: selectedProduct.name,
      //brand: selectedProduct.brand,
      category: selectedProduct.category,
      description: selectedProduct.description,
      price: parseInt(selectedProduct.price.replace('$', '')),
      stock: parseInt(info.stock)
    }
    //console.log('data',data)
    dispatch(updateProduct(info.id, data))
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
            <input  name="name" onClick={e => handleChange(e)} value={selectedProduct.name}></input>
          </fieldset>
          <fieldset>
            {/* <label>Category</label>
            <input label="category" name="category" onChange={e => handleChange(e)} value={selectedProduct.category}></input> */}
            <select onChange={(e) => handleCategory(e)}>
              {
                category?.map((c) => <option key={c.name} value={c._id}>{c.name}</option>)
              }
            </select>
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

