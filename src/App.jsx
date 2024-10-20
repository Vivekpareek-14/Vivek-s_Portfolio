import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Projects from './pages/projects/Projects.jsx';
import Contact from './pages/contact/Contact.jsx';
import Themes from './components/Themes.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
