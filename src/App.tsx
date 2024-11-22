import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import './App.css'
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import FrequentlyAs from './pages/FrequentlyAs';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<FrequentlyAs />} />
      </Routes>
    </Router>
  );
}

export default App;