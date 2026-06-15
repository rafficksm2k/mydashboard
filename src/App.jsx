// import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/Projects";
import "./App.css";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 0);
  // }, []);

  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
