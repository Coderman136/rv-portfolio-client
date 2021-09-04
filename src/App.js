import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home/index'
import About from './components/About/index'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
