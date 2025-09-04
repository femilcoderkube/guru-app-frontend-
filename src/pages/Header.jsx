import React from "react";
import dark_logo from "../assets/Images/dark_logo.png";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation(); // 👈 get current path

  const navItems = [
    { label: t("about"), to: "/" },
    { label: t("our_rating"), to: "/rating" },
    { label: t("contactus"), to: "/contactus" },
  ];

  return (
    <header className="fixed top-0 z-100 w-full bg-[#FFFFFF] py-6 px-4 md:px-10 lg:px-[6.25rem]">
      <div className="flex items-center justify-between w-full max-w-[76.5rem] mx-auto">
        {/* Logo */}
        <div
          className="site-logo flex-shrink-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={dark_logo} alt="Guru Logo" className="h-8 md:h-10" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 h-[3.375rem]">
          <ul className="dark-header header-nav flex items-center gap-4 lg:gap-[1.875rem] bg-[#F6F8FA] rounded-2xl px-4 lg:px-[1.938rem] border border-[#DFE1E7] border-opacity-[0.34] h-full">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={
                  "relative text-sm sm:text-base leading-none h-full flex justify-center items-center cursor-pointer " +
                  (location.pathname === item.to
                    ? "active-tab"
                    : "font-normal") +
                  " text-[#0D0D12]"
                }
                onClick={() => navigate(item.to)}
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className="py-2 md:py-4 bg-[#F6F8FA] rounded-2xl px-4 lg:px-[1.938rem] border border-[#DFE1E7] border-opacity-[0.34] h-full flex items-center">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          aria-label="Open menu"
          onClick={() => setNavOpen((v) => !v)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2" rx="1" fill="#32191E" />
            <rect y="11" width="24" height="2" rx="1" fill="#32191E" />
            <rect y="17" width="24" height="2" rx="1" fill="#32191E" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {navOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-40">
          <div className="absolute top-0 right-0 w-4/5 max-w-xs bg-white h-full shadow-lg flex flex-col">
            <button
              className="self-end m-4 p-2"
              aria-label="Close menu"
              onClick={() => setNavOpen(false)}
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="#32191E"
                  strokeWidth="2"
                />
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                  stroke="#32191E"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <ul className="flex flex-col gap-2 px-6 mt-8">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`py-2 border-b border-gray-200 text-[#0D0D12] cursor-pointer ${
                    location.pathname === item.to
                      ? "font-bold text-blue-600"
                      : "font-semibold"
                  }`}
                  onClick={() => {
                    navigate(item.to);
                    setNavOpen(false);
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="mt-6 px-6">
              <div className="py-2 bg-[#F6F8FA] rounded-2xl px-4 border border-[#DFE1E7] border-opacity-[0.34] w-fit">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
