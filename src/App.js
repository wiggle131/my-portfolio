import './App.css';
import Introduction from './Components/Introduction/Introduction';
import IntroWithPic from './Components/IntroWithPic/IntroWithPic';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Achievements from './Components/Achievements/Achievements';

function App() {
  return (
    <div className="App mx-[15rem]">
      <Introduction />
      <IntroWithPic />
      <Projects />
      <Experience />
      <Achievements />
    </div>
  );
}

export default App;
