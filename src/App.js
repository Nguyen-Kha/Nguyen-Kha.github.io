import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Data from './pages/Data/Data';
import Fun from './pages/Fun/Fun';
import Home from './pages/Home/Home';
import Error404 from './pages/Error404';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/data" element={<Data />}/>
            <Route path="/fun" element={<Fun />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/404" element={<Error404 />}/>
            <Route path="*" element={<Navigate replace to="/404" />}/>
          </Routes>
        </Router>
        <h1>HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello</h1>
        <Footer />
    </div>
  );
}

export default App;
