import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactUs.css'
import { address, contactEmail, contactNumber } from './variables';

export default function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
    <div className='container'>
    <h1 className='contact-header'>Contact Us</h1>
    <div className='sub-container'>
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Name</h2>
      <input type="text" placeholder="Name" {...register("Name", {required: true})} />
      <h2>Email</h2>
      <input type="email" placeholder="Mobile number" {...register("Mobile number", {required: true})} />
      <h2>City</h2>
      <input type="text" placeholder="City" {...register} />
      <h2>Company</h2>
      <input type="text" placeholder="Company" {...register("Company", {})} />
      <h2>Requirement</h2>
      <textarea {...register("Requirement", {required:true})} />
      
      <input type="submit" />
    </form>
    <div className='company-info'>
        <h2>Corporate office and Registered office</h2>
        <p>{address}</p>
        <p>Phone: {contactNumber}</p>
        <p>Email: {contactEmail}</p>
    </div>
    </div>
    </div>
    </>
  );
}