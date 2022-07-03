import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Data from './pages/Data';
import Fun from './pages/Fun';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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
        <h1>Hello</h1>
    </div>
  );
}

export default App;
