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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371912.74333578243!2d-80.21333211413214!3d43.26046849791838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c986c27de778f%3A0x2b6aee56d8df0e21!2sHamilton%2C%20ON!5e0!3m2!1sen!2sca!4v1643381811635!5m2!1sen!2sca"
     frameBorder=""
    aria-hidden="false"
    tabIndex ="0"></iframe>


   <h4>Phone</h4>
   <p>+1-437-971-9635</p>

   <h4>Email</h4>
   <p>thoka.rao@mail.mcgill.ca</p> 

   <h4>Address</h4>
   <p> Hamilton, Ontario, Canada </p>

   </div>

   </div>
   
  </div>
 )
}

export default Contact
