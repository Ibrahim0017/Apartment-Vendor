// App.jsx
import "./App.css";
import ActiveListingPages from "./Pages/ActiveListingPage";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Testimonials from "./Pages/Testimonials";
import AboutSection from "./Pages/AboutSection";
import Contact from "./Pages/Contact";

function AppWrapper() {
  const location = useLocation();

  // Force scrolled color on pages other than landing page
  const forceScrolled = location.pathname !== "/";

  return (
    <>
      <Header forceScrolled={forceScrolled} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ActiveListingPages" element={<ActiveListingPages />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<Contact />} />
        
        
      </Routes>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;