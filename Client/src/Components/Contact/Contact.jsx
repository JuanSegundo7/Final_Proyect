import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css"
export default function Contact() {
    const [state, handleSubmit] = useForm("moqbolbr");

    if (state.succeeded) {
        return <h2>Tu mensaje ha sido enviado con exito! :)</h2>;
    }

    console.log(state)

  return (
    <section id="contact">
        <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>
        <input
            id="name-contact"
            placeholder="Name"
            type="text" 
            name="Name"
            />
        <ValidationError 
            prefix="Text" 
            field="text"
            errors={state.errors}
            />
        <input
            id="email-contact"
            placeholder="Email"
            type="email" 
            name="Email"
            />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
        <textarea
            id="message-contact"
            placeholder="Hello.."
            name="message"
            />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
        <button type="submit" className='button-dashboard' disabled={state.submitting}>
            Submit
        </button>
        {state.errors.length ? <p id="error-form"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 128c0 44.4-25.4 83.5-64 106.4V256c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V234.4c-38.6-23-64-62.1-64-106.4C112 57.3 176.5 0 256 0s144 57.3 144 128zM200 176c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm144-32c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM35.4 273.7c7.9-15.8 27.1-22.2 42.9-14.3L256 348.2l177.7-88.8c15.8-7.9 35-1.5 42.9 14.3s1.5 35-14.3 42.9L327.6 384l134.8 67.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L256 419.8 78.3 508.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9L184.4 384 49.7 316.6c-15.8-7.9-22.2-27.1-14.3-42.9z"/></svg>{state.errors[0].message}</p> : null}
    </form>
    </section>
  )
}
