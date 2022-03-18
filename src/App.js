import './App.css';
import Introduction from './Components/Introduction/Introduction';
import IntroWithPic from './Components/IntroWithPic/IntroWithPic';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App mx-[15rem]">
      <Introduction />
      <IntroWithPic />
      <Projects />
    </div>
  );
}

export default App;
