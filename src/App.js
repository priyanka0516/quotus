import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/pages/home';
import Footer from './components/footer';
import About from './components/pages/about';
import Gallery from './components/pages/gallery';
import Service from './components/pages/services';
import Contact from './components/pages/contact';
import Naturopura from './components/pages/naturopura';
import Innernaturopura from './components/pages/innernaturopura';
function App() {
  return (
    <div className="App">    
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/about" element={<About/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact />} />
          <Route path="/naturopura" element={<Naturopura />} />
                  <Route path="/innernaturopura" element={<Innernaturopura/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}
export default App;
