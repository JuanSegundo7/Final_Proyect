import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateProduct} from "../../redux/Actions/Actions"

const ModalComponent = ({openModal, closeModal, info, close}) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.Categories);
  const brand = useSelector((state) => state.Brands)
  const [categoryId, setCategoryId] = useState(info.category2);
  const [brandId, setBrandId] = useState(info.brand2)
  //console.log('category', category);
  console.log('info', info)
  console.log('info.category', info.category)
  console.log('info.category2', info.category2)
  //console.log('info.category._id', info.category._id)



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
    brand: categoryId.brand,
    category: categoryId.category,
    description: info.description,
    price: info.price,
    stock: info.stock
  })

  //console.log('selectedProduct', selectedProduct.category.name)

  const handleCategory = (e ) => {
    //console.log('e', e.target.value)
    setCategoryId(e.target.value);
  }

  const handleBrand = (e ) => {
    //console.log('e', e.target.value)
    setBrandId(e.target.value);
  }

  const handleSubmit = (e) => {
    let data = {
      name: selectedProduct.name,
      brand: brandId,
      category: categoryId,
      description: selectedProduct.description,
      price: parseInt(selectedProduct.price),
      stock: parseInt(info.stock)
    }
    console.log('data',data)
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
            <input  name="name" onChange={e => handleChange(e)} value={selectedProduct.name}></input>
          </fieldset>
          <fieldset>
            {/* <label>Category</label>
            <input label="category" name="category" onChange={e => handleChange(e)} value={selectedProduct.category}></input> */}
            <select onChange={(e) => handleCategory(e)}>
              {
                category?.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)
              }
            </select>
          </fieldset>
          {/* <fieldset>
            <label>Brand</label>
            <input label="brand" name="brand" onChange={e => handleChange(e)} value={selectedProduct.brand}></input>
          </fieldset> */}
          <select onChange={(e) => handleBrand(e)}>
            {
              brand?.map((b) => <option key={b._id} value={b._id}>{b.name}</option>)
            }
          </select>
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

