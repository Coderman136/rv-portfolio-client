import {FaHtml5, FaCss3, FaNodeJs, FaJs, FaBootstrap, FaReact, FaGit} from 'react-icons/fa'

import './style.css'

function Skills() {
 return (
  <div className="skills">
   
   <h1>{`<`} SKILLS {`/>`}</h1>
   <div className="content">
    <div>
     <strong>Languages:</strong>
     <li>Javascript <FaJs/> </li>
     <li>Node.js <FaNodeJs/> </li>
     <li> HTML5 <FaHtml5 /> </li>
     <li> CSS3 <FaCss3   /> </li>
    </div>
    <div>
     <strong>Libraries:</strong>
     <li>React-js <FaReact /></li>
     <li>Express.js</li>
     <li>Redux  </li>
     <li>Bootstrap <FaBootstrap /> </li>
     <li>Material-UI</li>
     <li>SASS</li>
    </div>
    <div>
     <strong>Tools:</strong>
     <li>WordPress</li>
     <li>Eslint</li>
     <li>Webpack</li>
     <li>Chrome Dev</li>
     <li>Git & Github <FaGit/></li>
     <li> Postman </li>
    </div>
    <div>
     <strong>Database:</strong>
     <li>MongoDB</li>
     <li>Firebase</li>
    </div>
    <div>
     <strong>Software:</strong>
     <li>Matlab</li>
     <li>Modelism</li>
     <li>Intel Quartus Prime</li>
     <li>Logism</li>
     <li> MARS(MIPS Assembly and Instruciton Set)</li>
    </div>
    <div>
     <strong>Uint Test:</strong>
     <li>Jest</li>
     <li>Enzyme</li>
     <li>React-test</li>
     <li>Supper-test</li>
    </div>
   </div>
  </div>
 )
}

export default Skills
