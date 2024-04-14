import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import { useRef } from 'react';
import Contact from './components/Contact';

function App() {
  const banner = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const expertise = useRef(null);
  const contact = useRef(null);

  const scrollToPage = (ele) => {
    window.scroll({
      top: ele.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Router>
        <div className="font-inter">
          <Header />
          <Routes>
            <Route
              onClick={() => scrollToPage(banner)}
              exact
              path="/"
              element={<Home />}
            />
            <Route
              onClick={() => scrollToPage(about)}
              path="/about"
              element={<About />}
            />
            <Route
              onClick={() => scrollToPage(services)}
              path="/services"
              element={<Services />}
            />
            <Route
              onClick={() => scrollToPage(expertise)}
              path="/expertise"
              element={<Expertise />}
            />
            <Route
              onClick={() => scrollToPage(contact)}
              path="/contact"
              element={<Contact />}
            />
          </Routes>
          <Footer />
          {/* <Route path="/" exact component={Home} /> */}
          {/* <Banner />
          <About />
          <Services />
          <Expertise />
          <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
