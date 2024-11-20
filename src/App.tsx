import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import './App.css'
import Service from './pages/Service';
import Booking from './pages/Booking';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        {/* Add more routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;