import './App.css';
import Intro from "./pages/Home/intro";
import ProjectView from './pages/project/projects';


function App() {
  return (
    <div className="App">
        <div className= "brand">
          eiden
        </div>
        <Intro/>
        <div className = "separator"/>
        <ProjectView/>
    </div>
  );
}

export default App;
