import './App.css';
import Intro from "./pages/Home/intro";
import ProjectView from './pages/project/projects';
import TechView from './pages/Tech/tech';
import Footer from './pages/footer/footer';
import ExperienceView from './pages/experience/experience';

function App() {
  return (
    <div className="App">
        <div className= "brand">
          eiden
        </div>
        <div className = "background"></div>
        <Intro/>
        <div className = "separator"/>
        <ExperienceView/>
        <ProjectView/>
        <TechView/>
        <Footer/>
    </div>
  );
}

export default App;
