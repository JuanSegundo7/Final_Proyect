import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getCoffees } from '../../redux/Actions/Actions';
import Form from "../Form/Form"

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoffees())
  }, [dispatch])

  return (
// <<<<<<< HEAD
//     // <Form />
//     <div>
//       <p>Home</p>
//     </div>
// =======
    <section id="Home">
      <p>hola</p>
    </section>
// >>>>>>> 09ea86743a4e3376e40278f7ad97a4c30a7cf3a4
  )
}
