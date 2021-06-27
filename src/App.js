import './App.css';
import Intro from "./components/Home/intro_block/intro";
import ProjectView from './pages/project/projects';


function App() {
  return (
    <div className="App">
        <Intro/>
        <div className = "separator"/>
        <ProjectView/>
    </div>
  );
}

export default App;
