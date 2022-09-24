import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
