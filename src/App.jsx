import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Page from "./pages/Page";
import Page1 from "./pages/Page1";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          background: "#eee",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/page">Page</Link>
        <Link to="/page1">Page1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
