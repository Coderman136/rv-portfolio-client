
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
         <p>I am a  React/Full-Stack developer who is eager to keep on learning. I have 2 years experience of coding/designing websites using React. I am passionate about creating innovative solutions aiming for smooth user experiences while keeping a high functionality and paying attention to details. I love organization and structure and therefore put a high emphasis on clean, elegant and efficient code with a mobile approach to ensure responsive design. </p>
         <p> Full Name : Raghuveer Rao Thoka</p>
         <p> Age : 27 </p>
         <p> Nationaity: Indian </p>
         <p> Languages : English, Hindi, Telugu </p>
         <p> Location : Mississauga, Ontario, Canada </p>
         <p> Looking for Role : React Developer, Full-Stack Developer, MERN Stack Developer, JavaScript Developer </p>
         <button>  <a href="https://drive.google.com/file/d/1lVY2chS0DHcvboeP80_BreLJ1akESC_U/view?usp=sharing" target="_blank"> Download CV </a>  </button>
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
       Explored India to get  to know myself, now exploring myself in Canada. 
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
     </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }} className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/culture.jpg`}  />
     <Card.Body>
      <Card.Title> Cultural Exploration </Card.Title>
      <Card.Text>
       Interested in volatile culture and the way of knowing culture through on-stage drama.
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
     </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }} className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/soccer.jpg`}  />
     <Card.Body>
      <Card.Title>Soccer</Card.Title>
      <Card.Text>
       Favourite sport to feel alive. Makes me feel more competitive everytime I play!
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
     </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }} className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/tech_2.jpg`}  />
     <Card.Body>
      <Card.Title>Tech Knowledge</Card.Title>
      <Card.Text>
       Interested in Tech-talks, investment and having a futuristic vision.
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
