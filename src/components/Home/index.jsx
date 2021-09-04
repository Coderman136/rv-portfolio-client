import {FaYoutube, FaGithub, FaLinkedin} from "react-icons/fa"

import './style.css'


function Home() {
 return (
  <div className="home">
   <div className="unbackgrounded">
    
    <div className="detailedLink">
    <div className="headline">
     <h1>Hi,</h1>
    <h1>I am Raghuveer</h1>

    <div className="anime">
     <ul className="animeList">
      <li> <span> Full-Stack Developer </span> </li>
      <li> <span> UI/UX Designer       </span> </li>
      <li> <span> YouTuber             </span> </li>
      <li> <span> Freelancer           </span> </li>
     </ul>
     </div>

    </div>

    <div className="contactLink">
      <a href="https://www.youtube.com/channel/UCnPQ4NDqerT4Ovdw5Ak7dmg" target="youtube" >
      <FaYoutube className="icon1"/>
      </a>
      <a href="https://github.com/Coderman136" target="github">
       <FaGithub className="icon2"/>
       </a>
       <a href="https://linkedin.com/in/raghuveer-rao-thoka-2987a016b" target="linkedIn">
        <FaLinkedin className="icon3"/>
        </a>
    </div>

    <div className="resume">
     <button><a href = "" alt="_blank"> Resume </a></button>
    </div>
    <div className="links">

    </div>
   </div>
   <div className="my_pic">
    <img src={`${process.env.PUBLIC_URL}/my_picture_5.jpg`}
    alt="loading" 
    />
    <img src={`${process.env.PUBLIC_URL}/my_picture_5.jpg`}
    alt="loading" 
    />
    <img src={`${process.env.PUBLIC_URL}/my_picture_5.jpg`}
    alt="loading" 
    />
    <img src={`${process.env.PUBLIC_URL}/my_picture_5.jpg`}
    alt="loading" 
    />
   </div>

   </div>
   
   
  </div>
 )
}

export default Home
