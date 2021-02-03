
import React from "react";
import { useForm } from '@formspree/react';
import '../App.css'

function Form() {
 
  const [state, handleSubmit] = useForm('xpzonrel');
  if (state.succeeded) {
    return <div>Your Message Has Been Submitted! Thank You!</div>;
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
     
     <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="text" name="email" />
        <label>Message:</label>
        <input type="textarea" name="message" />
      <button type="submit" disabled={state.submitting}>Submit</button>
    </form>
  )
}

export default Form