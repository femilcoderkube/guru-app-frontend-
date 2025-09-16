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
        <div className="desktop-header">
          <nav className="flex items-center gap-4 h-[3.375rem]">
          <button className="hidden px-6 sm:px-[1rem] lg:px-[1.153rem] py-3 sm:py-4 bg-[#FF700A] text-[#FFEEE1] rounded-xl sm:rounded-[1.25rem] font-bold text-base hover:bg-[#fc9924] transition-colors duration-200 cursor-pointer w-auto">
                Register your Restaurant
              </button>
            <ul className="dark-header header-nav flex items-center gap-2 sm:gap-[1.875rem] bg-[#FFEEE11A] rounded-2xl px-2 sm:px-4 md:px-[1.938rem] border border-[#FFEEE1] border-opacity-[0.34] h-full">
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
        </div>
        {/* Mobile Nav Toggle */}
        <button
          className="mob-toggle-menu flex items-center justify-center p-2 rounded focus:outline-none"
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
      <div className="mob-header">
      {navOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
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
                      ? "font-bold text-[#FF700A]"
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
            <div className="mt-6 px-6">
                <button className="hidden px-6 sm:px-[1rem] lg:px-[1.153rem] py-3 sm:py-4 bg-[#FF700A] text-[#FFEEE1] rounded-xl sm:rounded-[1.25rem] font-bold md:text-base text-sm hover:bg-[#fc9924] transition-colors duration-200 cursor-pointer w-auto">
                  Register your Restaurant
                </button>
              </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
