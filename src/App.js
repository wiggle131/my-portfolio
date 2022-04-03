import './App.css';
import resume from './Components/Resources/Jhosie Charles Espantaleon - Resume.pdf';
import Introduction from './Components/Introduction/Introduction';
import IntroWithPic from './Components/IntroWithPic/IntroWithPic';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Achievements from './Components/Achievements/Achievements';
import Ending from './Components/Ending/Ending';

function App() {
  return (
    <div className="App mx-4 md:mx-8 lg:mx-40 xl:mx-60">
      <Introduction resume={resume}/>
      <IntroWithPic />
      <Projects />
      <Experience />
      <Achievements />
      <Ending resume={resume}/>
    </div>
  );
}

export default App;
