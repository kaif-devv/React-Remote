import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Error";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Header from "./Header";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
