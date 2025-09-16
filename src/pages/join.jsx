import React, { useMemo, useState, useRef } from "react";
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
import upload from "../assets/Images/upload.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import {
  leftToRight,
  rightToLeft,
  cardVariantsAni,
} from "../Componets/animation.jsx";
import { motion } from "motion/react";
import { Upload } from 'lucide-react';
const Join = () => {
      // Responsive nav state for mobile menu
  const [navOpen, setNavOpen] = React.useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  return (
    <>
    {/* dark-header start */}    
      <Header />
      {/* dark-header End */}

      {/* inner-banner start */}
      <div className="w-full flex justify-center bg-[#FFEAC2] mt-[5.875rem] md:mt-[6.375rem] py-3 md:py-[1.375rem] px-2">
        <motion.div
          className="flex items-center gap-2 sm:gap-4 w-full max-w-[76.5rem] mx-auto"
          initial="hidden"
          animate="visible"
          variants={leftToRight}
        >
          <button className="flex items-center text-[#0D0D12] bg-[#FFFFFF] border border-[#DFE1E7] outline-none cursor-pointer rounded-[0.875rem] px-4 py-2 text-sm md:text-base">
            {t("back")}
          </button>
          <span className="text-[#32191E] font-bold text-base">
          Join as a restaurant
          </span>
        </motion.div>
      </div>
      {/* inner-banner End */}

      <div className="faq-sec-wp relative contact-wp flex justify-center items-center py-6 md:py-[2.563rem] bg-[#F8FAFB] px-2">
        <div className="w-full max-w-[76.5rem] mx-auto bg-white rounded-2xl shadow-[0_4px_74px_0_#0000001A] px-2 sm:px-4 md:px-8 py-10 md:pt-15 lg:pb-[7.19rem] md:pb-[4rem]">
          <motion.div className="text-center mb-6 md:mb-12"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.3, ease: "easeOut" }}
           viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-[#32191E]">
            Join as a restaurant
            </h2>
            <p className="text-base md:text-lg text-[#32191E]">
            welcome to <span className="text-[#FF700A] font-bold">Guru</span> platform
            </p>
          </motion.div>
          <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
          <form className="space-y-6 md:space-y-8 max-w-full md:max-w-[46.438rem] mx-auto">
          <label className="w-full h-[10rem] md:h-[15.313rem] border border-[#DFE1E7] px-3 py-2 md:py-[0.57rem] bg-[#F6F8FA] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl flex flex-col items-center justify-center cursor-pointer relative">
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              name="restaurantLogo"
            />
                <img className="mb-4" src={upload} alt="" />
            <p className="text-[#666D80] text-base">Upload your restaurant logo</p>
          </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 md:gap-y-8">
              <div>
                <label
                  className="block text-[#0D0D12] text-base mb-1"
                  htmlFor="first-name"
                >
                  Restaurant Name — English
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                  placeholder="Type Restaurant name"
                />
              </div>
              <div>
                <label
                  className="block text-[#0D0D12] text-base mb-1"
                  htmlFor="last-name"
                >
                  Restaurant Name — Arabic:
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                  placeholder="Type Restaurant name"
                />
              </div>
              <div>
                <label
                  className="block text-[#0D0D12] text-base mb-1"
                  htmlFor="Contact Number"
                >
                  Contact Number
                </label>
                <input
                  id="contact-number"
                  type="tel"
                  className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                  placeholder="Type contact number"
                />
              </div>
              <div className="relative">
                <label
                  className="block text-[#0D0D12] text-base mb-1"
                  htmlFor="Cuisines"
                >
                  Cuisines
                </label>
                <div className="relative">
                  <select
                    id="Cuisines"
                    className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl appearance-none pr-10 text-sm md:text-base"
                  >
                    <option>Select</option>
                    <option value="Indian">Indian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="French">French</option>
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
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                placeholder="Add the E-mail here"
              />
            </div>

            <div>
              <label className="block text-[#0D0D12] text-base mb-1">
                Website link (URL)
              </label>
              <input
                type="url"
                name="website"
                placeholder="Add the URL here"
                className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-[#0D0D12] text-base mb-1">
                Location - Google map link (URL)
              </label>
              <input
                type="url"
                name="location"
                placeholder="Add Google map URL here"
                className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
              />
            </div>
            <div>
              <button
                className="text-base bg-[#FF700A] hover:bg-[#e88a1e] text-white font-bold w-full h-[3rem] rounded-2xl transition duration-200 cursor-pointer flex items-center justify-center"
              >
                Send
              </button>
            </div>
          </form>
          </motion.div>
        </div>
      </div>

      {/* footer start */}
      <footer className="footer-sec pt-8 md:pt-13 pb-8 md:pb-10.5 relative px-2">
        <img
          className="footer-shape absolute ltr:-right-4 rtl:-left-4 ltr:md:-right-[2rem] rtl:md:-left-[2rem] -top-10 md:-top-[5rem] z-3 w-32 md:w-auto rtl:[transform:rotateY(180deg)]"
          src={footer_shape}
          alt=""
        />
        <motion.div
          className="mx-auto max-w-[80rem]"
          initial="hidden"
          whileInView="visible"
          variants={cardVariantsAni}
          viewport={{ once: true, amount: 0 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between flex-1 md:gap-6 gap-4">
            <div className="max-w-full md:max-w-[38.938rem]">
              <h2 className="text-xl md:text-[2.5rem] font-bold text-[#32191E] mb-2">
                {t("make_it_count")}
              </h2>
              <p className="text-base md:text-xl text-[#4A282F]">
                {t("make_it_count_desc")}
              </p>
            </div>
            <div className="store flex items-center gap-3 md:gap-4 mt-4 md:mt-0 ltr:mr-[5rem] rtl:ml-[5rem]">
              <a
                href="#"
                className="inline-block transition-transform duration-200 hover:scale-103"
              >
                <img src={app_store} alt="" className="h-10 w-auto" />
              </a>
              <a
                href="#"
                className="inline-block transition-transform duration-200 hover:scale-103"
              >
                <img src={play_store} alt="" className="h-10 w-auto" />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-6 pt-6 border-t border-[#D1D1D1] gap-4">
            <div className="text-[#32191E] text-sm md:text-base text-center md:text-left">
              {t("all_rights_reserved")}
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-[#32191E] mt-2 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-[#32191E] text-sm md:text-base transition-colors duration-200 hover:text-[#FF700A]"
              >
                {t("privacy_policy")}
              </Link>
              <Link
                to="/terms-of-use"
                className="text-[#32191E] text-sm md:text-base transition-colors duration-200 hover:text-[#FF700A]"
              >
                {t("terms_of_use")}
              </Link>
            </div>
            <ul className="footer-icon flex items-center justify-center gap-4 md:gap-6 mt-2 md:mt-0">
              <li className="cursor-pointer transition-transform duration-200 hover:scale-105">
                <img src={TW} alt="" className="h-6 w-6" />
              </li>
              <li className="cursor-pointer transition-transform duration-200 hover:scale-105">
                <img src={LN} alt="" className="h-6 w-6" />
              </li>
              <li className="cursor-pointer transition-transform duration-200 hover:scale-105">
                <img src={FB} alt="" className="h-6 w-6" />
              </li>
            </ul>
          </div>
        </motion.div>
      </footer>
      {/* footer End */}
    </>
  );
};

export default Join;
