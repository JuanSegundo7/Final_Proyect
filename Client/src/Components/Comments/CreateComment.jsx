import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../redux/Actions/Actions";
import { useState } from "react";

export default function Comments(){
    const [input,setInput] = useState("")

    const handleOnChange = (e)=>{
        setInput(e.target.value)
    }
    return (
        <div>
            <form >
                <label> Let us know what you thought of the page's service, if you found what you were looking for and more... <input onChange={(e)=>handleOnChange(e)}/></label>
                <button type="submit">Comment</button>

            </form>
        </div>
    )
}