import React from "react";
import { useDispatch } from "react-redux";
import { deleteProducts, deleteUser } from "../../redux/Actions/Actions";
import "./ModalDelete.css";

export default function ModalDelete({ close, info, user }) {
  // console.log('open2', close);
  // console.log('info', info)
  // console.log('user', user)
  const dispatch = useDispatch();

  function handleDelete(e) {
    if (user) {
      dispatch(deleteUser(info));
      close(false);
      user(false);
    }
    dispatch(deleteProducts(info));
    close(false);
  }

  return (
    <article id="wrapper-delete">
      <article id="wrapper-container-delete">
        <article id="wrapper-x-delete" onClick={() => close(false)}>
          X
        </article>
        <h1>Are you sure?</h1>
        <h5>You won't be able to revert this!</h5>
        <div className="container-button">
          <button onClick={() => close(false)} id="button-cancel">
            No,cancel!
          </button>
          <button onClick={(e) => handleDelete(e)} id="button-confirm">
            Yes, delete it!
          </button>
        </div>
      </article>
    </article>
  );
}
