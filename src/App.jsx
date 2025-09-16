import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Rating from "./pages/Rating";
import TermsOfUse from "./pages/TermsOfUse";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Join from "./pages/join";
import ThankYou from "./pages/thankyou";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18n";
import { Toaster } from "react-hot-toast";
import LanguageSwitcher from "./pages/LanguageSwitcher";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Toaster position="top-right" />
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
          <Route path="/rating" element={<Rating />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/join" element={<Join />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
