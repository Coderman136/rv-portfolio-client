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
   <h1> {`<`} CONTACT ME {`/>`}</h1>

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

   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369973.65558336105!2d-79.77453057823067!3d43.576984339610874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b469fe76b05b7%3A0x3146cbed75966db!2sMississauga%2C%20ON!5e0!3m2!1sen!2sca!4v1630732131852!5m2!1sen!2sca" 
   frameBorder=""
    aria-hidden="false"
    tabIndex ="0"></iframe>

   <h4>Phone</h4>
   <p>+1-438-680-6810</p>

   <h4>Email</h4>
   <p>thoka.rao@mail.mcgill.ca</p> 

   <h4>Address</h4>
   <p> Mississauga, Ontario, Canada </p>

   </div>

   </div>
   
  </div>
 )
}

export default Contact
