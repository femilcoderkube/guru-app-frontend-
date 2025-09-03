import React, { useRef } from "react";
import logo from "../assets/Images/guru_logo.png";
import dark_logo from "../assets/Images/dark_logo.png";
import terms_list from "../assets/Images/terms-list.png";
import TW from "../assets/Images/twitter.png";
import LN from "../assets/Images/Ln.png";
import FB from "../assets/Images/fb.png";
import app_store from "../assets/Images/app-store.png";
import play_store from "../assets/Images/play-store.png";
import footer_shape from "../assets/Images/footer-shape.png";
import select_icon from "../assets/Images/select-icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const ContactUs = () => {
  // Responsive nav state for mobile menu
  const [navOpen, setNavOpen] = React.useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      {/* dark-header start */}
      <header className="fixed top-0 z-100 w-full bg-[#FFFFFF] py-6 px-4 md:px-10 lg:px-[6.25rem]">
        <div className="flex items-center justify-between w-full max-w-[76.5rem] mx-auto">
          <div className="site-logo flex-shrink-0">
            <img src={dark_logo} alt="Guru Logo" className="h-8 md:h-10" />
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 h-[3.375rem]">
            {(() => {
              const navItems = [
                { label: t("about"), to: "/" },
                { label: t("our_rating"), to: "/rating" },
                { label: t("contactus"), to: "/contactus" },
              ];
              const [activeIdx, setActiveIdx] = React.useState(0);

              return (
                <ul className="dark-header header-nav flex items-center gap-4 lg:gap-[1.875rem] bg-[#F6F8FA] rounded-2xl px-4 lg:px-[1.938rem] border border-[#DFE1E7] border-opacity-[0.34] h-full">
                  {navItems.map((item, idx) => (
                    <li
                      key={item.label}
                      className={
                        "relative text-sm sm:text-base leading-none h-full flex justify-center items-center cursor-pointer " +
                        (activeIdx === idx ? "active-tab" : "font-normal") +
                        " text-[#0D0D12]"
                      }
                      onClick={() => {
                        navigate(item.to);
                        setActiveIdx(idx);
                      }}
                    >
                      {item.label}
                    </li>
                    // <li key={item.label}>
                    //   <NavLink
                    //     to={item.to}
                    //     className={({ isActive }) =>
                    //       "relative text-sm sm:text-base leading-none h-full flex justify-center items-center cursor-pointer text-[#FFEAC2] " +
                    //       (isActive ? "active-tab" : "font-normal")
                    //     }
                    //   >
                    //     {item.label}
                    //   </NavLink>
                    // </li>
                  ))}
                </ul>
              );
            })()}
            <div className="py-2 md:py-4 bg-[#F6F8FA] rounded-2xl px-4 lg:px-[1.938rem] border border-[#DFE1E7] border-opacity-[0.34] h-full flex items-center">
              <span className="cursor-pointer text-base font-normal text-[#0D0D12] leading-none">
                <LanguageSwitcher />
              </span>
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
                {[t("about"), t("our_rating"), t("contactus")].map((item) => (
                  <li
                    key={item}
                    className="py-2 border-b border-gray-200 text-[#0D0D12] font-semibold cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 px-6">
                <div className="py-2 bg-[#F6F8FA] rounded-2xl px-4 border border-[#DFE1E7] border-opacity-[0.34] w-fit">
                  <span className="cursor-pointer text-base font-normal text-[#0D0D12] leading-none">
                    <LanguageSwitcher />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* dark-header End */}

      {/* inner-banner start */}
      <div className="w-full flex justify-center bg-[#FFEAC2] mt-[5.875rem] md:mt-[6.375rem] py-3 md:py-[1.375rem] px-2">
        <div className="flex items-center gap-2 sm:gap-4 w-full max-w-[76.5rem] mx-auto">
          <button
            className="flex items-center text-[#0D0D12] bg-[#FFFFFF] border border-[#DFE1E7] outline-none cursor-pointer rounded-[0.875rem] px-4 py-2 text-sm md:text-base"
            onClick={() => navigate("/")}
          >
            {t("back")}
          </button>
          <span className="text-[#32191E] font-bold text-lg md:text-xl">
            {t("contactus")}
          </span>
        </div>
      </div>
      {/* inner-banner End */}

      <div className="faq-sec-wp relative contact-wp flex justify-center items-center py-6 md:py-[2.563rem] bg-[#F8FAFB] px-2">
        <div className="w-full max-w-[76.5rem] mx-auto bg-white rounded-2xl shadow-[0_4px_74px_0_#0000001A] px-2 sm:px-4 md:px-8 py-6 md:py-10">
          <div className="text-center mb-6 md:mb-9">
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-[#32191E]">
              {t("get_in_touch")}
            </h2>
            <p className="text-base md:text-lg text-[#32191E]">
              {t("get_in_touch_desc")}
            </p>
          </div>
          <form className="space-y-6 md:space-y-8 max-w-full md:max-w-[46.438rem] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 md:gap-y-8">
              <div>
                <label
                  className="block text-[#0D0D12] text-base mb-1"
                  htmlFor="first-name"
                >
                  {t("first_name")}
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                  placeholder={t("type_first_name")}
                />
              </div>
              <div>
                <label
                  className="block text-[#0D0D12] text-base mb-1"
                  htmlFor="last-name"
                >
                  {t("last_name")}
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                  placeholder={t("type_last_name")}
                />
              </div>
              <div>
                <label
                  className="block text-[#0D0D12] text-base mb-1"
                  htmlFor="company"
                >
                  {t("company")}
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                  placeholder={t("type_company_name")}
                />
              </div>
              <div className="relative">
                <label
                  className="block text-[#0D0D12] text-base mb-1"
                  htmlFor="Country"
                >
                  {t("country")}
                </label>
                <div className="relative">
                  <select
                    id="Country"
                    className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl appearance-none pr-10 text-sm md:text-base"
                  >
                    <option>{t("select")}</option>
                    <option value="india">{t("india")}</option>
                    <option value="usa">{t("usa")}</option>
                    <option value="uk">{t("uk")}</option>
                  </select>
                  {/* Custom arrow */}
                  <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#32191E]">
                    <img src={select_icon} alt="" className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label
                className="block text-[#0D0D12] text-base mb-1"
                htmlFor="email"
              >
                {t("email")}
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                placeholder={t("enter_email")}
              />
            </div>
            <div>
              <label
                className="block text-[#0D0D12] text-base mb-1"
                htmlFor="how-can-we-help"
              >
                {t("how_can_we_help")}
              </label>
              <textarea
                id="how-can-we-help"
                rows={4}
                className="w-full bg-[#F6F8FA] border border-[#DFE1E7] px-3 py-3 md:py-4.5 text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl resize-none text-sm md:text-base"
                placeholder={t("type_here")}
              />
            </div>
            <div>
              <button
                type="submit"
                className="text-base bg-[#FF700A] hover:bg-[#e88a1e] text-white font-bold w-full md:w-[12.813rem] h-[3rem] rounded-2xl transition duration-200 cursor-pointer flex items-center justify-center"
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* footer start */}
      <footer className="footer-sec pt-8 md:pt-13 pb-8 md:pb-10.5 relative px-2">
        <img
          className="footer-shape absolute -right-4 md:-right-[2rem] -top-10 md:-top-[5rem] z-3 w-32 md:w-auto"
          src={footer_shape}
          alt=""
        />
        <div className="mx-auto max-w-[80rem]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between flex-1 md:gap-6 gap-4">
            <div className="max-w-full md:max-w-[38.938rem]">
              <h2 className="text-xl md:text-2xl font-bold text-[#32191E] mb-2">
                {t("make_it_count")}
              </h2>
              <p className="text-base md:text-xl text-[#4A282F]">
                {t("make_it_count_desc")}
              </p>
            </div>
            <div className="store flex items-center gap-3 md:gap-4 mt-4 md:mt-0 mr-[5rem]">
              <a href="#" className="inline-block">
                <img src={app_store} alt="" className="h-10 w-auto" />
              </a>
              <a href="#" className="inline-block">
                <img src={play_store} alt="" className="h-10 w-auto" />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-6 pt-6 border-t border-[#D1D1D1] gap-4">
            <div className="text-[#32191E] text-sm md:text-base text-center md:text-left">
              {t("all_rights_reserved")}
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-[#32191E] mt-2 md:mt-0">
              <a
                href="/privacy-policy"
                className="text-[#32191E] text-sm md:text-base"
              >
                {t("privacy_policy")}
              </a>
              <a
                href="/terms-of-use"
                className="text-[#32191E] text-sm md:text-base"
              >
                {t("terms_of_use")}
              </a>
            </div>
            <ul className="footer-icon flex items-center justify-center gap-4 md:gap-6 mt-2 md:mt-0">
              <li className="cursor-pointer">
                <img src={TW} alt="" className="h-6 w-6" />
              </li>
              <li className="cursor-pointer">
                <img src={LN} alt="" className="h-6 w-6" />
              </li>
              <li className="cursor-pointer">
                <img src={FB} alt="" className="h-6 w-6" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* footer End */}
    </>
  );
};

export default ContactUs;
