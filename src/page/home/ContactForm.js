import React from 'react';

const ContactForm = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    
    <div class="card flex-shrink-0 w-full max-w-md  bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">NAME</span>
          </label>
          <input type="text" placeholder="your name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" class="input input-bordered" />
          
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Body</span>
          </label>
          <textarea name="" id="" cols="30" rows="10" className='input input-bordered h-44'></textarea>
          
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">send Email</button>
        </div>
      </div>
    </div>
    <div class="text-center lg:text-left max-w-2xl">
      <h1 class="text-5xl font-bold">Let's work togather </h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>
    );
};

export default ContactForm;