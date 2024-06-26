import React from "react";
//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar';
import { Header } from './components/header';
import { Experiences } from './components/experience';
import { Education } from './components/education';
import { Projects } from './components/projects';
import { Footer } from './components/footer';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Experiences />
        <Education />
        <Projects />
        {/*<Skills />*/}
        <Footer />
      </div>
    );
  }
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold">
          Hello world!
        </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/