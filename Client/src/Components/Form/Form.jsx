import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postCoffes } from '../../redux/Actions/Actions';
import "./Form.css"

const Form = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: '',
        origin:'',
        price:'',
        description:'',
        category:'',
        type:''
    })
    //asd

    const handleName = (e) => {
        setInput({
            ...input,
            name: e.target.value
          })
    }
    const handleOrigin = (e) => {
        setInput({
            ...input,
            origin: e.target.value
          })
    }
    const handlePrice = (e) => {
        setInput({
            ...input,
            price: e.target.value
          })
    }
    const handleDescription = (e) => {
        setInput({
            ...input,
            description: e.target.value
          })
    }
    

    const handleCategory = (e) => {
        setInput({
            ...input,
            category: e.target.value
          })
    }
    const handleType = (e) => {
        setInput({
            ...input,
            type: e.target.value
          })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postCoffes(input))
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} id="Form">
            <input name="name" type="text" placeholder="Name" onChange={(e) => handleName(e)}></input>
            <input name="description" type="text" placeholder="Description" onChange={(e) => handleDescription(e)}></input>
            <input name="origin" type="text" placeholder="Origin" onChange={(e) => handleOrigin(e)}></input>
            <input name="price" type="number" placeholder="Price" onChange={(e) => handlePrice(e)}></input>
            <input name="category" type="number" placeholder="Category" onChange={(e) => handleCategory(e)}></input>
            <input name="type" type="text" placeholder="Type" onChange={(e) => handleType(e)}></input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
