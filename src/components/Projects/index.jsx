import { Card, Button } from 'react-bootstrap'
import {FaHtml5, FaCss3, FaNodeJs, FaJs, FaBootstrap, FaReact, FaGit} from 'react-icons/fa'

import './style.css'

function Projects() {
 return (
  <div className="projects">
   <h1>PROJECTS</h1>
   <div className="project">
     {/* <Card className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/todo.png`}   />
     <Card.Body>
      <Card.Title> To-Do List </Card.Title>
      <Card.Text className="text">
       <FaReact /> <FaJs/> <FaHtml5 /> <FaCss3 /> NPM <FaGit/>
      </Card.Text>
      <button variant="primary"><a href="https://todolist1234567.herokuapp.com/" target="_blank" > Check it Out</a></button>
     </Card.Body>
     </Card> */}

     {/* <Card  className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/commerce.png`}  />
     <Card.Body>
      <Card.Title> E-Commerce Tech </Card.Title>
      <Card.Text className="text">
       <FaReact /> Redux <FaJs/> React-Router <FaHtml5 />  <FaBootstrap /> <FaCss3 /> <FaGit/> MongoDB,  Express.js
      </Card.Text>
      <button variant="primary"><a href="https://rvecommercewebtech.herokuapp.com/" target="_blank" > Check it Out</a></button>
     </Card.Body>
     </Card> */}

     <Card  className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/chatbot.png`}  />
     <Card.Body>
      <Card.Title> Chat Bot </Card.Title>
      <Card.Text className="text">
       <FaReact /> Socket.io <FaJs/> React-Router <FaHtml5/>  <FaBootstrap/> Material-UI <FaGit/> MongoDB,  Express.js
      </Card.Text>
      <button variant="primary"><a href="https://silly-elion-777517.netlify.app/" target="_blank" > Check it Out</a></button>
     </Card.Body>
     </Card>

     

   {/* </div>

   <div className="project"> */}
     {/* <Card className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/react_search.png`}   />
     <Card.Body>
      <Card.Title> React Search App </Card.Title>
      <Card.Text className="text">
       <FaReact /> <FaJs/> <FaHtml5 /> <FaCss3 /> NPM <FaGit/>
      </Card.Text>
      <button variant="primary"><a href="https://foodsearchapp123.herokuapp.com/" target="_blank" > Check it Out</a></button>
     </Card.Body>
     </Card> */}

     {/* <Card  className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/student_directory.png`}  />
     <Card.Body>
      <Card.Title> Student Directory </Card.Title>
      <Card.Text className="text">
        <FaReact /> <FaJs/> <FaHtml5 /> <FaCss3 /> NPM <FaGit/>
      </Card.Text>
      <button variant="primary"><a href="https://pensive-lewin-2d4179.netlify.app/" target="_blank" > Check it Out</a></button>
     </Card.Body>
     </Card> */}

     


     <Card  className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/calculator.png`}  />
     <Card.Body>
      <Card.Title> Calculator </Card.Title>
      <Card.Text className="text">
        <FaJs/>  <FaHtml5/> <FaCss3 />
      </Card.Text>
      <button variant="primary"><a href="https://rvcalculator.netlify.app/" target="_blank" > Check it Out</a></button>
     </Card.Body>
     </Card>

   </div>

    <div className="project">

      <Card  className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/currency_exchange.png`}  />
     <Card.Body>
      <Card.Title> Currency Exchange </Card.Title>
      <Card.Text className="text">
        <FaJs/> <FaHtml5 /> <FaCss3 />
      </Card.Text>
      <button variant="primary"><a href="https://currencyexchangerv.netlify.app/" target="_blank" > Check it Out</a></button>
     </Card.Body>
     </Card>

     <Card className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/form_validation.png`}   />
     <Card.Body>
      <Card.Title> Form Validation </Card.Title>
      <Card.Text className="text">
        <FaJs/> <FaHtml5 /> <FaCss3 />
      </Card.Text>
      <button variant="primary"><a href="https://rvformvalidation.netlify.app" target="_blank" > Check it Out</a></button>
     </Card.Body>
     </Card>

     </div>

  </div>
 )
}

export default Projects
