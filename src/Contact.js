import React, { useState } from 'react';

const Contact=()=>{
  const [data,setData]=useState({
    firstname:"",
    lastname:"",
    phone:"",
    email:"",
    msg:"",
  });
  const InputEvent=(event)=>{
    const { name,value }=event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`Name: ${data.firstname} ${data.lastname} Phone Number: ${data.phone} Email Id: ${data.email} `)
  };
  return(
    <>
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">First Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" name="firstname" value={data.firstname} onChange={InputEvent} placeholder="Enter Your first Name" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" name="lastname" value={data.lastname} onChange={InputEvent} placeholder="Enter Your last Name" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Phone</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter mobile number" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
            </div>
            <div className="col-12">
            <button className="btn btn-outline-danger" type="submit">Submit form</button>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};
export default Contact;


