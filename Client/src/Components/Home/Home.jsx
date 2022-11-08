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
    <Form />
  )
}
