
import { Card } from 'react-bootstrap';

import './style.css'

function About() {
 return (
     <div>
           
          <div className="about">

   <h1> {`<`} ABOUT ME {`/>`}  </h1>
   <div className="me">
    <div className="img">
     <img src= {`${process.env.PUBLIC_URL}/about_me_3.jpg`}
        alt="about_me"/>
    </div>
    
        <div className="details">
         <h2> I am RAGHUVEER </h2>
         <p>I am a self-taught, as well as bootcamp graduate, full-stack developer, eager to keep on learning. I am passionate about creating innovative solutions aiming for smooth user experiences while keeping a high functionality and paying attention to details. I love organization and structure and therefore put a high emphasis on clean, elegant and efficient code with a mobile-first approach to ensure responsive design. </p>
         <p> Full Name : Raghuveer Rao Thoka</p>
         <p> Age : 27 </p>
         <p> Nationaity: Indian </p>
         <p> Languages : English, Hindi, Telugu </p>
         <p> Location : Mississauga, Ontario, Canada </p>
         <p> Looking for Role : React Developer, Full-Stack Developer, MERN Stack Developer, JavaScript Developer </p>
         <button>  <a href=""> Download CV </a>  </button>
        </div>
   </div>

   <div className=" hobbies">
    <h2> Hobbies </h2>
    <div className="cards">

     <Card style={{ width: '18rem' }} className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/travelling.jpg`}  />
     <Card.Body>
      <Card.Title>Travelling</Card.Title>
      <Card.Text>
       Some quick example text to build on the card title and make up the bulk of
       the card's content.
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
     </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }} className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/culture.jpg`}  />
     <Card.Body>
      <Card.Title> Cultural Exploration </Card.Title>
      <Card.Text>
       Some quick example text to build on the card title and make up the bulk of
       the card's content.
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
     </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }} className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/soccer.jpg`}  />
     <Card.Body>
      <Card.Title>Soccer</Card.Title>
      <Card.Text>
       Some quick example text to build on the card title and make up the bulk of
       the card's content.
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
     </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }} className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/tech_2.jpg`}  />
     <Card.Body>
      <Card.Title>Tech Knowledge</Card.Title>
      <Card.Text>
       Some quick example text to build on the card title and make up the bulk of
       the card's content.
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
     </Card.Body>
     </Card>

    </div>

   </div>
   
  </div>
     </div>

 
 )
}

export default About
