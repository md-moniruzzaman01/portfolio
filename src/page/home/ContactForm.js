import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qjoel29', 'template_4gf9i6b', form.current, 'aBZ7U_a-R-R9h8hDy')
      .then((result) => {
          console.log(result);
          if(result.status == 200 && result.text == 'OK'){
           console.log('massage send');
           toast("Massage was send")
           e.target.reset();
          }
      }, (error) => {
          console.log(error.text);
      });
  };



    return (
        <div className="hero min-h-screen" id='contactform'>
  <div className="container flex justify-around items-center flex-col lg:flex-row-reverse" >

    <form ref={form} onSubmit={sendEmail} className="card flex-shrink-0 w-full max-w-md  bg-base-100">
      <div className="form-control">
      <label>Name</label>
      <input type="text" name="user_name" className="input input-bordered" required/>
      </div>
     <div className="form-control">
     <label>Email</label>
      <input type="email" name="user_email" className="input input-bordered" required/>
     </div>
     
     <div className="form-control">
     <label>Message</label>
      <textarea name="message" className="input input-bordered h-44" required/>
     </div>
      <input type="submit" value="send Email"  className="btn custom-btn mt-2 border-0"/>
    </form>
    <div className="text-center mt-7 md:mt-0 lg:text-left max-w-xl">
      <h1 className="text-5xl font-bold">Let's work togather </h1>
      <p className="py-4 text-lg">I am available to work on your projects and bring your ideas to life. Drop a massage so we can discuss.</p>
    </div>
  </div>
</div>
    );
};

export default ContactForm;