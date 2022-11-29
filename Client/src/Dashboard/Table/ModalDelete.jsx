import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProducts, deleteUser } from '../../redux/Actions/Actions';

export default function ModalDelete({close ,info, user}) {
    // console.log('open2', close);
    // console.log('info', info)
    // console.log('user', user)
    const dispatch = useDispatch();

    function handleDelete(e){
        if(user){
            dispatch(deleteUser(info))
            close(false);
            user(false);
        }
        dispatch(deleteProducts(info));
        close(false);
    }

  return (
    <article id="wrapper">
    <article id="wrapper-container">
        <article id="wrapper-x" onClick={() => close(false)}> 
          X
        </article>
        <h1>Are you sure?</h1>
        <h5>You won't be able to revert this!</h5>
        <button onClick={() => close(false)}>No,cancel!</button>
        <button onClick={(e) => handleDelete(e)}>Yes, delete it!</button>
    </article>
    </article>

  )
}