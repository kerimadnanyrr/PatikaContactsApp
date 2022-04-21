import React, { useEffect } from 'react'
import { useState } from 'react'
import Form from "./Form"
import List from "./List"
function Contact() {
    const [contact, setContact] = useState([]);

    useEffect(()=>{
console.log(contact);
    },[contact])
  return (
    <div className='Formİnputs'>
        <h1>Contacts</h1>
        <List contact={contact} />
        <Form contact={contact} setContact={setContact}/>
       
    </div>
  )
}

export default Contact