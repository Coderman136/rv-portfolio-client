import { useState } from 'react';
import './style.css'
import axios from 'axios'

function Contact() {

 const [input,setInput] = useState({
  personName:'',
  email:'',
  subject:'',
  message:''
 })

 const handleChange = (e) => {
  const {name, value} = e.target;

  setInput(prevInput => {
   return {
    ...prevInput,
   [name] : value
   }
   
  })
 }

 const handleClick = (e) => {
  e.preventDefault()
  console.log(input)

  const company = {
   personName : input.personName,
   email: input.email,
   subject: input.subject,
   message: input.message
  }
  axios.post("https://rv-portfolio-backend.herokuapp.com/contact", company)

  setInput({
   personName:'',
   email:'',
   subject:'',
   message:''
  }) 
  

  
 }
 return (
  <div className="contact">
   <h1>GET IN TOUCH</h1>

   <div className="contactDetails">

    <div className="contactMe">
    
    <form>
     <div className="form-group">
    <input onChange={handleChange} name="personName" value={input.personName} autoComplete="off" className="form-control" placeholder="Enter your name" />
    </div>
    <div className="form-group">
    <input onChange={handleChange} name="email" value={input.email} autoComplete="off" className="form-control" placeholder="Enter your email" />
    </div>
    <div className="form-group">
    <input onChange={handleChange} name="subject" value={input.subject} autoComplete="off" className="form-control" placeholder="Subject" />
    </div>
    <div className="form-group">
     <textarea onChange={handleChange} name="message" value={input.message} autoComplete="off" className="form-control" placeholder="Enter your message" />
    </div>
    <button onClick={handleClick} className="btn btn-lg "> Submit </button>
    </form>
    
   </div>

   <div className="my_contact">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977249618!2d-79.54286599561185!3d43.7183709581209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1718762826331!5m2!1sen!2sca"
     frameBorder=""
    aria-hidden="false"
    tabIndex ="0"></iframe>


   <h4>Phone</h4>
   <p>+1-437-971-9635</p>

   <h4>Email</h4>
   <p>thoka.rao@mail.mcgill.ca</p> 

   <h4>Address</h4>
   <p> Toronto, Ontario, Canada </p>

   </div>

   </div>
   
  </div>
 )
}

export default Contact
