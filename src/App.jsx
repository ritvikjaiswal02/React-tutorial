import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Course_Detail from "./Course_Detail";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Product />} />
          <Route path="/courses/:id" element={<Course_Detail />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
