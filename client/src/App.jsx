import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Experience from "./component/Experience/Experience";
import FeaturedProjects from "./component/FeaturedProjects/FeaturedProjects";
import AllProjects from "./pages/AllProjects";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Contact />
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0F172A]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
