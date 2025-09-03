import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Page from "./pages/Page";
import Page1 from "./pages/Page1";
import Page2 from "./pages/page2";

function App() {
  return (
    <BrowserRouter>
      {/* <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          background: "#eee",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/Page">Page</Link>
        <Link to="/Page1">Page1</Link>
        <Link to="/Page2">Page2</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
