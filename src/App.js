import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Header from "./components/header";
import Home from "./components/pages/home";
import Footer from "./components/footer";
import About from "./components/pages/about";
import Gallery from "./components/pages/gallery";
import Service from "./components/pages/services";
import Contact from "./components/pages/contact";
import Naturopura from "./components/pages/naturopura";
import Innernaturopura from "./components/pages/innernaturopura";
import Cardanopython from "./components/pages/cardanopython";
import Sap from "./components/pages/sap";
import Team from "./components/pages/team";
import Artificial from "./components/pages/techmate";
import Java from "./components/pages/java";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/naturopura" element={<Naturopura />} />
          <Route path="/innernaturopura" element={<Innernaturopura />} />
          <Route path="/cardanopython" element={<Cardanopython />} />
          <Route path="/techmate" element={<Artificial />} />
          <Route path="/sap" element={<Sap />} />
          <Route path="/java" element={<Java />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
export default App;
