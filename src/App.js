import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './components/Error';
import Navigation from './components/Navigation';
function App() {
  return (
    <Router>
    <div>
    <Navigation />
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route element={Error}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
