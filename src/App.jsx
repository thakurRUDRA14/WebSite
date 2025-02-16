import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
// import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
// import Events from "./components/Events";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import WhatWeDo from "./components/WhatWeDo";
// import Summit from "./components/Summit";
import Achievements from "./components/Achievements";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Teams />} />
        {/* <Route path="/bootcamp" element={<Blogs />} /> */}
        {/* <Route path="/events" element={<Events />} /> */}
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/summit" element={<Summit />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
