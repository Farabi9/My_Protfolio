import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contract = () => {
    const form = useRef();

  const sendEmail = event => {
    event.preventDefault();

    emailjs.sendForm('service_8s1v2eh', 'template_dlqexbp', form.current, 'ycoU7mEeYQcIwewzv')
      .then((result) => { 
          console.log(result) 
          if(result.status === 200){
              event.preventDefault();
              toast.success('Email Send')
          }
       
      }, (error) => {
         toast.error('Email Sending Problem')

      });
  };
    return (
        <div className='card w-96 bg-base-200 shadow-xl mx-auto my-20 p-10'>
            <form ref={form} onSubmit={sendEmail}>
      <label className='font-bold '>Name:  </label>
      <input className='my-5 border-2' type="text" name="to_name" />
      <br />
      <label className='font-bold '>Email: </label>
      <input className='my-5 rounded border-2' type="email" name="to_email" />
      <br />
      <label className='font-bold '>Message: </label> <br />
      <textarea className='border-2 ' name="message" />
      <br />
      <input className='bg-primary rounded p-2' type="submit" value="Send" />
    </form>
   
        </div>
    );
};

export default Contract;