import './App.css';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import WorkHistory from './components/WorkHistory';
import Projects from './components/Projects';
import Socials from './components/Socials';
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Introduction />
      <WorkHistory />
      <Projects />
      <Socials />
    </div>
  );
}

export default App;
