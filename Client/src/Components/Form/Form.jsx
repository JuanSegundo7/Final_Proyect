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
        type:'',
        stock:''
    })

    const [error, setError] = useState({
        name:'',
        origin:'',
        price:'',
        description:'',
        category:'',
        type:'',
        stock:''
    })

    const [disabled, setDisabled] = useState({
        category:false
    })

    const regExName = new RegExp("^[a-zA-Z ]+$");

    let category = ['categoria 1','categoria 2','categoria 3','categoria 4']
    let type = ['type 1', 'type 2', 'type 3', 'type 4']

    const handleName = (e) => {
        if(e.target.value.length === 0 || e.target.value === ''){
            setError({...error, name:'You must enter a name!!'})
          }
          else if (e.target.value.length >= 1){
            if(!regExName.test(e.target.value)){
              setError({...error, name:'The name cannot have signs'})
            } else{
              setError({...error, name:''})
            }
          } 
        setInput({
            ...input,
            name: e.target.value
          })

    }

    const handleDescription = (e) => {
        if(e.target.value === '' || e.target.value.length === 0){
            setError({...error, description:'You must enter a description'})
          }
          else if(e.target.value.length >= 1){
            if(e.target.value.length >= 150){
                console.log(e.target.value.length)
              setError({...error, description:'The description should not have more than 150 characters'})
            } else{
                setError({...error, description:''})
            }
          }
          setInput({
            ...input,
            description: e.target.value
          })
    }

    const handleOrigin = (e) => {
        if(e.target.value.length === 0 || e.target.value === ''){
            setError({...error, origin:'You must enter a origin!!'})
            return
        }
        else if (e.target.value.length > 1){
            if(!regExName.test(e.target.value)){
                setError({...error, origin:'The origin cannot have signs'})
            } else{
                setError({...error, origin:''})
            }
        } 
        
        setInput({
            ...input,
            origin: e.target.value
          })
    }
    const handlePrice = (e) => {
        if(e.target.value.length === 0 || e.target.value === ''){
            setError({...error, price:'You must enter a price!!'})
          }
        if(e.target.value.length >= 1){
            setError({...error, price:''})
        }
        setInput({
            ...input,
            price: e.target.value
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

    const handleStock = (e) => {
        if(e.target.value.length === 0 || e.target.value === ''){
            setError({...error, stock:'You must enter a stock!!'})
          }
          if(e.target.value.length >= 1){
            setError({...error, stock:''})
        }
        setInput({
            ...input,
            stock:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!error.name && !error.category && !error.description && !error.origin && !error.price && !error.stock && input.category && input.type){
            dispatch(postCoffes(input))
            alert('Cafe creado perrrito malvado')
        } else{
            alert('Faltan llenar campos perreque')
        }
    }


    return (
        <form onSubmit={(e) => handleSubmit(e)} id="Form">
            <input 
            name="name" 
            type="text" 
            placeholder="Name" 
            onChange={(e) => handleName(e)}/>
            {error.name && <span>{error.name}</span>}

            <input 
            name="description" 
            type="text" 
            placeholder="Description" 
            onChange={(e) => handleDescription(e)}/>
            {error.description && <span>{error.description}</span>}

            <input 
            name="origin" 
            type="text" 
            placeholder="Origin" 
            onChange={(e) => handleOrigin(e)}/>
            {error.origin && <span>{error.origin}</span>}

            <input 
            name="price" 
            type="number" 
            placeholder="Price" 
            onChange={(e) => handlePrice(e)}/>
            {error.price && <span>{error.price}</span>}

            <select onChange={(e) => handleCategory(e)} disabled={disabled.category}>
                {category.map((c) => <option key={c}>{c}</option>)}
            </select>
            <span>

                <ul>
                    {input.category && <span>{input.category}</span>}
                </ul>
            </span>

            <select onChange={(e) => handleType(e)}>
                {type.map((t) => <option key={t}>{t}</option>)}
            </select>
            <span>
                <ul>
                    {input.type && <span>{input.type}</span>}
                </ul>
            </span>
            <input
            name="stock" 
            type="number" 
            placeholder="Stock" 
            onChange={(e) => handleStock(e)}
            />
            {error.stock && <span>{error.stock}</span>}
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
