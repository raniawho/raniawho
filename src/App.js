import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Work from "./pages/Work";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
