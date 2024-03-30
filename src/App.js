import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Fun from './pages/Fun/Fun';
import Home from './pages/Home/Home';
import Error404 from './pages/Error404';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          {/* <NavBar /> */}
          <Routes>
            <Route path="/" element={<Home />}/>
            {/* <Route path="/experience" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/fun" element={<Fun />}/>
            <Route path="/contact" element={<Contact />}/> */}
            <Route path="/404" element={<Error404 />}/>
            <Route path="*" element={<Navigate replace to="/404" />}/>
          </Routes>
        </Router>
        {/* <h1>HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello</h1> */}
        {/* <Footer /> */}
    </div>
  );
}

export default App;
