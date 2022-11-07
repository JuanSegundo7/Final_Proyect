import React from 'react';
import "./Form.css"

const Form = () => {

    const handleSubmit = () => {
        console.log("hola")
    }

    return (
        <form onSubmit={handleSubmit} id="Form">
            <input name="name" type="text" placeholder="Name"></input>
            <input name="origin" type="text" placeholder="Origin"></input>
            <input name="price" type="number" placeholder="Price"></input>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;
