import logo from './logo.svg';
import Navbar from './navbar';
import Home from './home';
import Skill from './skill';
import Phylosophy from './philosophy';
import Project from './Projects';
import Talk from './Talk';
import About from './About';
function App() {
  return (
    <div>
      <Navbar/>
      <div className='home' id='home'>
        <Home/>
      </div>
      <div className='skill' id='skill'>
        <Skill/>
      </div>
      <div className='phy'>
        <Phylosophy/>
      </div>
      <div className='project' id='projects'>
        <Project/>
      </div>
      {/* <div className='About' id='about'>
        <About/>
      </div> */}
      <div className='talk' id='talk'>
        <Talk/>
      </div>
    </div>
)
}

export default App;
