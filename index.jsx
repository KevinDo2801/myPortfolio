import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import AnotherProjects from "./components/AnotherProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  
  return (
    <>
      <Header />
      <div className="container">
        <Home />
        <About />
        <Projects />
        <AnotherProjects />
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
