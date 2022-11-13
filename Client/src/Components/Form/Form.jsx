import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postProduct } from '../../redux/Actions/Actions';
import { useNavigate} from 'react-router-dom';
import "./Form.css";


const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allCategories = useSelector((initialState) => initialState.Categories);  
    const allBrands = useSelector((initialState) => initialState.Brands);  

    const [input, setInput] = useState({
        name:'',
        description:'',
        origin:'',
        price:'',
        grindingtype:'',
        stock:'',
        image:'',
        category:'Category',
        brand:'Brand'
    })

    //I will set some of these fields as having an error by default, since all of these fields are
    //presented as empty and THAT's an error per se.
    const [error, setError] = useState({
        name:'You must enter a name!!',
        description:'You must enter a description!!',
        origin:'',
        price:'You must enter a price!!',
        grindingtype:'',
        stock:'You must enter a stock!!',
        category:'Invalid category!!',    //default value if nothing was selected
        image:'',
        brand:'',   //brand is not a required field, therefore I will no set a default value here
    });

/***********************************Enable and Disable Buttons Local States***************************/

    //Enable the form submit button only if there are no errors....
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [disableOriginAndGrinding, setDisableOriginAndGrinding] = useState(true);

/***********************************Handlers and Errors Validation************************************/

    const regExName = new RegExp("^[a-zA-Z ]+$");

    const handleName = (e) => {
        if(e.target.value.length === 0 || e.target.value === ''){
            setError({...error, name:'You must enter a name!!'})
          }
          else if (e.target.value.length > 0){
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
            setError({...error, description:'You must enter a description!!'})
          }
          else if(e.target.value.length > 0){
            if(e.target.value.length >= 150){
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
        if (e.target.value.length > 0){
            if(!regExName.test(e.target.value)){
                setError({...error, origin:'The origin cannot have signs'})
            } else{
                setError({...error, origin:''})
            }
        }else{
            setError({...error, origin:''})
        }  
        setInput({
            ...input,
            origin: e.target.value
          })
    }

    const handlePrice = (e) => {
        
        if(!e.target.value.length || parseInt(e.target.value)<0){
            setError({...error, price:'You must enter a price and it must be higher than 0!!'})
          }else{
            setError({...error, price:''})
          }
        setInput({
            ...input,
            price: e.target.value
          })
    }
    
    const handleGrindingType = (e) => {
        if (e.target.value.length > 0){
            if(!regExName.test(e.target.value)){
                setError({...error, grindingtype:'The grinding type cannot have signs'})
            } else{
                setError({...error, grindingtype:''})
            }
        }else{
            setError({...error, grindingtype:''})
        }
        setInput({
            ...input,
            grindingtype: e.target.value
          })  
    }
    
    const handleStock = (e) => {
        if(!e.target.value.length || parseInt(e.target.value)<0){
            setError({...error, stock:'You must enter a stock and it must be higher than 0!!'})
          }else{
            setError({...error, stock:''})
          }
          
        setInput({
            ...input,
            stock:e.target.value
        })
    }
    
    const handleCategory = (e) => {
        const fullCategory = searchCategoryById(e.target.value);
        if (fullCategory.name==="coffee"){
            setDisableOriginAndGrinding(false);
        }else{
            setDisableOriginAndGrinding(true);
        }
        setInput({...input,category: e.target.value}) 
        setError({...error, category:''})
    }

    const handleBrand = (e) => {
        setInput({
            ...input,
            brand: e.target.value
          })
          setError({...error, brand:''})
    } 

    const handleSubmit = (e) => {
        if (input.brand==='Brand'){
            input.brand='';
        }
        e.preventDefault();
        dispatch(postProduct({
        "name":input.name,
        "description":input.description,
        "origin":input.origin,
        "price":parseInt(input.price),
        "grindingtype":input.grindingtype,
        "stock":parseInt(input.stock),
        "category":input.category,
        "image":input.image,
        "brand":input.brand
        }));

        navigate("/");
    }

/*********************Enabling or disabling the submit button whether I have errors or not************/

    useEffect(()=>{
        if(!error.name && 
           !error.description && 
           !error.price && 
           !error.origin && 
           !error.stock && 
           !error.category &&
           !error.grindingtype &&
           !error.brand &&
           !error.image
           ){
            setDisableSubmit(false);
            //console.log("no error",error)
        }else{
            setDisableSubmit(true);
            //console.log("there is at least 1 error",error)
        }
       },[input])

/**********************************************Functions***********************************************/

       function searchCategoryById (_id){
        let match = "";
        if (allCategories && allCategories.length){
          for (let i=0;i<allCategories.length;i++){
            if (allCategories[i]._id===_id){
              match = allCategories[i];
            }
          }
        }
        //console.log(match) //I return the full category object, not only it's name.
        return match;
      } 

/**********************************************Render***********************************************/
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
            name="price" 
            type="number"
            min="0" 
            placeholder="Price" 
            onChange={(e) => handlePrice(e)}/>
            {error.price && <span>{error.price}</span>}

            <input
            name="stock" 
            type="number"
            min="0" 
            placeholder="Stock" 
            onChange={(e) => handleStock(e)}
            />
            {error.stock && <span>{error.stock}</span>}

            <select onChange={handleCategory} value={input.category}>                  
                <option disabled>Category</option>
                {allCategories.map(unaOpcion=><option value={unaOpcion._id} key={unaOpcion._id}>{unaOpcion.name}</option>)}
            </select>

            <select onChange={handleBrand} value={input.brand}>                  
                <option disabled>Brand</option>
                {allBrands.map(unaOpcion=><option value={unaOpcion._id} key={unaOpcion._id}>{unaOpcion.name}</option>)}
            </select>

            <input
            disabled={disableOriginAndGrinding} 
            name="origin" 
            type="text" 
            placeholder="Origin (Optional)" 
            onChange={(e) => handleOrigin(e)}/>
            {error.origin && <span>{error.origin}</span>}

            <input
            disabled={disableOriginAndGrinding} 
            name="grindingtype" 
            type="text" 
            placeholder="Grinding Type (Optional)" 
            onChange={(e) => handleGrindingType(e)}/>
            {error.grindingtype && <span>{error.grindingtype}</span>}

            <input
            disabled={true} 
            name="image" 
            type="text" 
            placeholder="Upload a Photo (Optional)" />
            {error.image && <span>{error.image}</span>}

            <br></br>
            <button type="submit" disabled={disableSubmit}>Create Product</button>
            
        </form>
    );
}

export default Form;
