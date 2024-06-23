import {FaHtml5, FaCss3, FaNodeJs, FaJs, FaBootstrap, FaReact, FaGit} from 'react-icons/fa'

import './style.css'

function Skills() {
 return (
  <div className="skills">
   
   {/* <h1>{`<`} SKILLS {`/>`}</h1> */}
   <div className="content">
    {/* <div>
     <strong>Languages:</strong>
     <li>Javascript <FaJs style={{ backgroundColor: "yellow" }}/> </li>
     <li>Node.js <FaNodeJs/> </li>
     <li> HTML5 <FaHtml5 /> </li>
     <li> CSS3 <FaCss3   /> </li>
    </div>
    <div>
     <strong>Libraries:</strong>
     <li>React-js <FaReact /></li>
     <li>Next-js <FaReact /></li>
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
     <li>AWS</li>
     <li>Netsuite</li>
     <li>Salesforce</li>
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
    </div> */}
    <div className="skillset">
        <div class="top">
            <div className='headBox'><h1 className='headingLine'>Frontend</h1></div>
            <div className="frontend">
                <div>
                    <img src="https://www.svgrepo.com/show/355081/js.svg" className='icons'/>
                </div>
                <div>
                    <img src="https://www.svgrepo.com/show/355190/reactjs.svg" className='icons'/>
                </div>
                <div>
                    <img src="https://www.svgrepo.com/show/452093/redux.svg" className='icons'/>
                </div>
                
            </div>
            <div className="frontend_2">
                <div>
                    <img src="https://www.svgrepo.com/show/349540/typescript.svg" className='icons'/>
                </div>
                <div>
                    <img src="https://www.svgrepo.com/show/452228/html-5.svg" className='icons'/>
                </div>
                <div>
                    <img src="https://www.svgrepo.com/show/374068/scss.svg" className='icons'/>
                </div>
            </div>
        </div>
        
        <div className='middle'>
            <div className='headBox'><h1 className='headingLine'>Backend/Cloud</h1></div>
            <div className='backend'>
                <div>
                    <img src="https://www.svgrepo.com/show/448266/aws.svg" className='icons'/>
                </div>
                <div>
                    <img src="https://www.svgrepo.com/show/374073/serverless.svg" className='icons'/>
                </div>
                <div>
                    <img src="https://www.svgrepo.com/show/354119/nodejs-icon.svg" className='icons'/>
                </div>
            </div>

            <div className='backend_2'>
                
                <div>
                    <img src="https://www.svgrepo.com/show/353985/laravel.svg" className='icons'/>
                </div>
                <div>
                    <img src="https://www.svgrepo.com/show/373644/graphql.svg" className='icons'/>
                </div>
                <div>
                    <img src="https://www.svgrepo.com/show/355133/mysql.svg" className='icons'/>
                </div>
            </div>

            <div className='bottom'>
                <div>
                        <img src="https://www.svgrepo.com/show/331488/mongodb.svg" className='icons'/>
                    </div>
                    <div>
                        <img src="https://www.svgrepo.com/show/373595/firebase.svg" className='icons'/>
                    </div>
                </div>
        </div>
        
        
        <div className="otherTech">
            <div className='headBox'><h1 className='headingLine'>Other Tech</h1></div>
            <div class="restTech">
                <div>
                    <img src="https://www.svgrepo.com/show/374126/testjs.svg" className='icons'/>
                </div>
                <div>
                <img src="https://www.svgrepo.com/show/353782/git-icon.svg" className='icons'/>
            </div>
            </div>
            
        </div>
        
        
        
        
    </div>
   </div>
  </div>
 )
}

export default Skills
