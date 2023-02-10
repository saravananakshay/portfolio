import Home from "./components/banner/Home";
import Exp from "./components/experience/Exp";
import Skill from "./components/skills/Skill";
import Work from "./components/work/Work";
import Footer from "./components/footer/Footer";
import Navig from "./components/navi/Navig";
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Navig/>
        <Home/>
        <Exp/> 
        <Skill/>
        <Work/>
        <Footer/>
        
      </header>
    </div>
  );
 
}

export default App;
