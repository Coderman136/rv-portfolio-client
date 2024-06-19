
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
         <h2> RAGHUVEER </h2>
         <p>Results-oriented Senior React and Full Stack Developer with 7+ years of experience in developing and optimizing web applications. Proven expertise in React.js, JavaScript, and back-end technologies including Node.js and Express.js. Experienced in AWS deployment and developing AWS applications. Strong track record of enhancing user engagement, optimizing business processes, and driving revenue growth. Committed to delivering innovative solutions that exceed client expectations and drive company success.</p>
         <p> Full Name : Raghuveer Rao Thoka</p>
         <p> Age : 30 </p>
         <p> Location : Toronto, Ontario, Canada </p>
         <p> Looking for Role : Senior React Developer, Senior Full-Stack Developer </p>
         <button>  <a href="https://drive.google.com/file/d/1xDs92a9MHsFiAiC4pO30AfTctSWV4KrC/view?usp=sharing" target="_blank"> Download CV </a>  </button>
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
       Love for travelling and exploring scenic places. 
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
     </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }} className ="card">
     <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/culture.jpg`}  />
     <Card.Body>
      <Card.Title> Art Enthusiast and Museum Lover </Card.Title>
      <Card.Text>
      I have a deep passion for art and museums. I find inspiration and joy in the world of art.
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
