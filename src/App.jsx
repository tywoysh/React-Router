import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Green from "./components/Green";
import Orange from "./components/Orange";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/green" element={<Green />} />
            <Route path="/orange" element={<Orange />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
