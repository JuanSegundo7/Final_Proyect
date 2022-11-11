import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, postCoffes } from '../../redux/Actions/Actions';
import "./Form.css"

/*
NAME -> STRING
DESCRIPTION -> STRING
ORIGIN -> STRING (SIN SELECT)
CATEGORY DE SI ES UN PRODUCTO O ES UN CAFE-> STRING (VA A SER UN SELECT) CAFE.CATEGORY.TYPE AHI ENCUENTRO EL TIPO, SI ES CAFE O PRODUCTO
CATEGORY DE TIPO DE CAFE(MOLIENDA GRUESA, EN GRANO, ETC...) -> STRING (VA A SER UN SELECT) CAFE.TYPE -> AHI ENCUENTRO EL TIPO DE CAFE
PRECIO -> VA A SER UN NUMERO
STOCK -> NUMERO
MARCAS -> STRING (LE PONEMOS SELECT? SI O NO, A CHARLAR)(ESTA EN BRAND, IMG Y NAME)
IMAGEN -> STRING -> PODRIAMOS PENSAR QUE SEA UN SELECT CON UN NOMBRE DESCRIBIENDO QUE IMAGEN VA A SER, TODAVIA FALTA DEFINIR BIEN COMO LO VAMOS A HACER
*/
const Form = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory())
    },[])
    
    const allCategory = useSelector((state) => state.category);

    const allCategory2 = allCategory.filter((c) => c.type == "Coffee Maker");

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
                
                {allCategory2 && allCategory2.map((c) => <option key={c.name}>{c.name}</option>)}
            </select>
            <span>

                <ul>
                    {input.category && <span>{input.category}</span>}
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
