import './App.css';
import Intro from "./pages/Home/intro";
import ProjectView from './pages/project/projects';
import ContactView from './pages/contact/contact';


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
        <ContactView/>
    </div>
  );
}

export default App;
