import './App.css';
import Section from './components/Sections';
import Logo from "./assets/img/bg/logo.png"

import data from "./assets/datas/movies.json"

function App() {
  return (
  <>
    <img className="logo" src={Logo} alt=""/>
    <Section data={data}/>
  </>
  );
}

export default App;
