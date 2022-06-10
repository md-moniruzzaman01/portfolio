import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qjoel29', 'template_4gf9i6b', form.current, 'aBZ7U_a-R-R9h8hDy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



    return (
        <div class="hero min-h-screen " id='contactform'>
  <div class="hero-content flex-col lg:flex-row-reverse">

    <form ref={form} onSubmit={sendEmail} class="card flex-shrink-0 w-full max-w-md  bg-base-100">
      <div class="form-control">
      <label>Name</label>
      <input type="text" name="user_name" class="input input-bordered"/>
      </div>
     <div class="form-control">
     <label>Email</label>
      <input type="email" name="user_email" class="input input-bordered"/>
     </div>
     
     <div className="form-control">
     <label>Message</label>
      <textarea name="message" class="input input-bordered h-44"/>
     </div>
      <input type="submit" value="send Email"  class="btn btn-primary"/>
    </form>
    <div class="text-center lg:text-left max-w-3xl">
      <h1 class="text-5xl font-bold">Let's work togather </h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>
    );
};

export default ContactForm;