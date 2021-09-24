import "./App.css";
import {Intro, Timeline, Project, Footer} from "@sections";
import { Nav } from "@components";

function App() {
  return (
    <div className="App">
      <Nav/>
      <main className="main-holder">
        <Intro />
        <Timeline/>
        <Project/>
        {/* <Stack/> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
