import './App.css';
import Intro from "./pages/Home/intro";
import ProjectView from './pages/project/projects';
import ContactView from './pages/contact/contact';
import TechView from './pages/Tech/tech';

function App() {
  return (
    <div className="App">
        <div className= "brand">
          eiden
        </div>
        <div className = "background"></div>
        <Intro/>
        <div className = "separator"/>
        <ProjectView/>
        {/* <ContactView/> */}
        <TechView/>
    </div>
  );
}

export default App;
