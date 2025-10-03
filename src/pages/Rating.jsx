import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // ✅ add Pagination
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // ✅ import pagination css
import logo from "../assets/Images/guru_logo.png";
import dark_logo from "../assets/Images/dark_logo.png";
import insta from "../assets/Images/insta.png";
import ticktok from "../assets/Images/ticktok.png";
import TW from "../assets/Images/twitter.png";
import LN from "../assets/Images/Ln.png";
import FB from "../assets/Images/fb.png";
import app_store from "../assets/Images/app-store.png";
import play_store from "../assets/Images/play-store.png";
import footer_shape from "../assets/Images/footer-shape.png";
import imogi_rev from "../assets/Images/imogi-rev.png";
import faq_arrow from "../assets/Images/faq-arrow.png";
import choice from "../assets/Images/choice.png";
import okay from "../assets/Images/okay_1.png";
import good from "../assets/Images/good.png";
import delicious from "../assets/Images/delicious.png";

import { useLocation, NavLink, useNavigate, Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import {
  leftToRight,
  rightToLeft,
  cardVariantsAni,
} from "../Componets/animation.jsx";
import { motion } from "motion/react";
const Rating = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navItems = [
    { label: t("about"), to: "/" },
    { label: t("our_rating"), to: "/rating" },
    { label: t("contactus"), to: "/contactus" },
  ];
  return (
    <>
      {/* dark-header start */}
      <header className="mob-header fixed top-0 z-100 w-full bg-[#FFFFFF] py-6 px-4 md:px-10 lg:px-[6.25rem]">
        <div className="flex items-center justify-between w-full max-w-[76.5rem] mx-auto">
          <div className="site-logo flex-shrink-0 ">
            <img src={dark_logo} alt="Guru Logo" className="h-8 md:h-10" />
          </div>
          {/* Mobile Nav Toggle */}
          <button
            className="flex items-center justify-center p-2 rounded focus:outline-none"
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
              <button
                className="text-base bg-[#FF700A] hover:bg-[#e88a1e] text-white font-bold w-full md:w-[12.813rem] h-[3rem] rounded-2xl transition duration-200 cursor-pointer flex items-center justify-center"
                onClick={() => navigate("/join")}
              >
                {t("join_as_a_restaurant")}
              </button>
              <ul className="flex flex-col gap-2 px-6 mt-8">
                {[
                  { label: t("about"), to: "/" },
                  { label: t("our_rating"), to: "/rating" },
                  { label: t("contactus"), to: "/contactus" },
                ].map((item) => (
                  <li
                    key={item.to}
                    className={`py-2 border-b border-gray-200 cursor-pointer ${
                      location.pathname === item.to
                        ? "font-bold text-[#FF700A]"
                        : "font-semibold text-[#0D0D12]"
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
                  <span className="cursor-pointer text-base font-normal text-[#0D0D12] leading-none">
                    <LanguageSwitcher />
                  </span>
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
      </header>
      {/* dark-header End */}
      {/* Hero Section Start */}
      <div className="relative mx-2 sm:mx-4 md:mx-10 my-4 sm:my-8 md:my-[2.5rem] rounded-[1.25rem] sm:rounded-[1.5rem] md:mt-[2.5rem] sm:mt-[5.875rem] mt-[5.875rem] md:rounded-[1.875rem] bg-transparent">
        {/* Background Video */}
        <div className="aspect-[16/9] w-full rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.875rem] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full !h-full object-cover z-0"
          >
            <source src={"/banner-Video.mp4"} type="video/mp4" />
          </video>
        </div>

        {/* Overlay content */}
        <div className="desktop-header absolute top-2 sm:top-4 md:top-[1.875rem] z-10 px-2 sm:px-6 md:px-[3.95rem] w-full">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
            <div className="site-logo flex-shrink-0 md:block hidden">
              <img src={logo} alt="Guru Logo" className="h-8 sm:h-10 md:h-12" />
            </div>
            <div className="flex items-center gap-2 sm:gap-4 h-[2.5rem] sm:h-[3.375rem] mt-2 sm:mt-0">
              <button className="hidden px-6 sm:px-[1rem] lg:px-[1.153rem] py-3 sm:py-4 bg-[#FF700A] text-[#FFEEE1] rounded-xl sm:rounded-[1.25rem] font-bold text-base hover:bg-[#fc9924] transition-colors duration-200 cursor-pointer w-auto">
                Register your Restaurant
              </button>
              <button
                className="text-base bg-[#FF700A] hover:bg-[#e88a1e] text-white font-bold w-full md:w-[12.813rem] h-[3rem] rounded-2xl transition duration-200 cursor-pointer flex items-center justify-center"
                onClick={() => navigate("/join")}
              >
                {t("join_as_a_restaurant")}
              </button>
              {(() => {
                const navItems = [
                  { label: `${t("about")}`, to: "/" },
                  { label: `${t("our_rating")}`, to: "/rating" },
                  { label: `${t("contactus")}`, to: "/contactus" },
                ];
                const [activeIdx, setActiveIdx] = React.useState(1);

                return (
                  <ul className="header-nav flex items-center gap-2 sm:gap-[1.875rem] bg-[#FFEEE11A] rounded-2xl px-2 sm:px-4 md:px-[1.938rem] border border-[#FFEEE1] border-opacity-[0.34] h-full">
                    {navItems.map((item, idx) => (
                      <li
                        key={item.label}
                        className={
                          "relative text-sm sm:text-base leading-none h-full flex justify-center items-center cursor-pointer " +
                          (activeIdx === idx ? "active-tab" : "font-normal") +
                          " text-[#FFEAC2]"
                        }
                        onClick={() => {
                          navigate(item.to);
                          setActiveIdx(idx);
                        }}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                );
              })()}
              <div className="bg-[#FFEEE11A] rounded-2xl px-3 sm:px-4 md:px-[1.938rem] py-2 sm:py-4 border border-[#FFEEE1] border-opacity-[0.34] h-full flex items-center">
                <span className="cursor-pointer text-sm sm:text-base font-normal text-[#FFEAC2] leading-none">
                  <LanguageSwitcher />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        {(() => {
          const words = [
            "No ads",
            "Real ratings",
            "Trusted sources",
            "Verified users",
          ];
          const [index, setIndex] = React.useState(0);

          React.useEffect(() => {
            const interval = setInterval(() => {
              setIndex((prev) => (prev + 1) % words.length);
            }, 3000);
            return () => clearInterval(interval);
          }, []);

          return (
            <motion.div
              className="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 z-10 px-3 sm:px-6 md:px-[3.95rem] flex flex-col items-start w-full max-w-[48rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-[3.125rem] text-[#FFEEE1] font-bold leading-tight md:leading-[3.875rem] ltr:text-left rtl:text-right">
                {t("our_ratings_guide")}
              </h1>
              <h5 className="text-base sm:text-lg md:text-2xl font-normal text-[#FFEAC2] mt-2 md:mt-[1.5rem] ltr:text-left rtl:text-right">
                {t("we_dont_do_stars")}
              </h5>
            </motion.div>
          );
        })()}

        {/* Social Icons */}
        <motion.div
          className="absolute bottom-2 sm:bottom-4 md:bottom-[2.5rem] z-10 w-full flex justify-center"
          initial="hidden"
          whileInView="visible"
          variants={cardVariantsAni}
          viewport={{ once: true, amount: 0 }}
        >
          <ul className="flex items-center justify-center gap-4 sm:gap-6">
            <li className="cursor-pointer transition-transform duration-200 hover:scale-105">
              <Link
                to="https://x.com/guru_arabia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TW} alt="Twitter" className="h-6 w-6 sm:h-7 sm:w-7" />
              </Link>
            </li>
            <li className="cursor-pointer transition-transform duration-200 hover:scale-105">
              <Link
                to="https://www.instagram.com/guruarabia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta}
                  alt="Instagram"
                  className="h-6 w-6 sm:h-7 sm:w-7"
                />
              </Link>
            </li>
            <li className="cursor-pointer transition-transform duration-200 hover:scale-105">
              <Link
                to="https://www.tiktok.com/@guruarabia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ticktok} alt="" className="h-6 w-6 sm:h-7 sm:w-7" />
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.875rem]"></div>
      </div>
      {/* Hero Section End */}

      {/* Tabbing Section Start */}
      <div className="relative">
        <div className="bg-[#FFF5E1] pt-8 md:pt-[3.125rem] pb-6 md:pb-9 px-3 sm:px-4 md:px-6">
          <motion.div
            className="max-w-[73.188rem] mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={cardVariantsAni}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="flex flex-col gap-3 items-center mb-13 md:mb-[4.375rem]">
              <div className="flex items-center justify-center bg-[#32191E] rounded-[2.5rem] h-[2.25rem] border border-[#32191E]">
                {(() => {
                  const tabs = [
                    { label: `${t("for_dishes")}` },
                    { label: `${t("for_restaurants")}` },
                  ];
                  return (
                    <>
                      {tabs.map((tab, idx) => (
                        <button
                          key={tab.label}
                          onClick={() => setActiveTab(idx)}
                          className={
                            "px-8 sm:text-sm text-xs font-medium transition-colors duration-200 h-[2.25rem] cursor-pointer" +
                            (activeTab === idx
                              ? " bg-[#FF700A] text-[#4A282F] h-[2.25rem]"
                              : " bg-transparent text-[#966422] h-[2.25rem]") +
                            (idx === 0
                              ? " rounded-[2.5rem]"
                              : " rounded-[2.5rem]")
                          }
                          style={{
                            border:
                              activeTab === idx
                                ? "-1px solid #FFA86D"
                                : "-1px solid transparent",
                            boxShadow:
                              activeTab === idx ? "0 0 0 1px #FFA86D" : "none",
                            backgroundColor:
                              activeTab === idx ? "#FF700A" : "transparent", // Explicitly set active bg color
                          }}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </>
                  );
                })()}
              </div>
              <p className="text-[#0D0D12] text-base sm:text-lg md:text-xl text-center max-w-full sm:max-w-[36rem] md:max-w-[47rem]">
                {t("our_team_dines_anonymously")}
              </p>
            </div>

            {activeTab === 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 sm:gap-x-5">
                <div className="relative bg-[#FFD688] rounded-xl px-3 sm:px-4 pb-4 sm:pb-5 pt-9 sm:pt-11 flex flex-col shadow-sm">
                  <img
                    className="absolute -top-7 sm:-top-[2.188rem] left-3 sm:left-5 w-14 sm:w-[4.375rem] h-14 sm:h-[4.375rem] bg-[#FFFFFF17] p-2 border border-[#FFD688] rounded-full backdrop-blur-[1.488rem]"
                    src={imogi_rev}
                    alt=""
                  />
                  <h4 className="font-bold text-lg sm:text-xl md:text-[1.5rem] text-[#32191E] mb-2 sm:mb-3">
                    {t("exceptional")}
                  </h4>
                  <p className="text-[#4A282F] text-sm sm:text-base">
                    {t("exceptional_desc")}
                  </p>
                </div>
                <div className="relative bg-[#FFD688] rounded-xl px-3 sm:px-4 pb-4 sm:pb-5 pt-9 sm:pt-11 flex flex-col shadow-sm">
                  <img
                    className="absolute -top-7 sm:-top-[2.188rem] left-3 sm:left-5 w-14 sm:w-[4.375rem] h-14 sm:h-[4.375rem] bg-[#FFFFFF17] p-2 border border-[#FFD688] rounded-full backdrop-blur-[1.488rem]"
                    src={delicious}
                    alt=""
                  />
                  <h4 className="font-bold text-lg sm:text-xl md:text-[1.5rem] text-[#32191E] mb-2 sm:mb-3">
                    {t("delicious")}
                  </h4>
                  <p className="text-[#4A282F] text-sm sm:text-base">
                    {t("delicious_desc")}
                  </p>
                </div>
                <div className="relative bg-[#FFD688] rounded-xl px-3 sm:px-4 pb-4 sm:pb-5 pt-9 sm:pt-11 flex flex-col shadow-sm">
                  <img
                    className="absolute -top-7 sm:-top-[2.188rem] left-3 sm:left-5 w-14 sm:w-[4.375rem] h-14 sm:h-[4.375rem] bg-[#FFFFFF17] p-2 border border-[#FFD688] rounded-full backdrop-blur-[1.488rem]"
                    src={good}
                    alt=""
                  />
                  <h4 className="font-bold text-lg sm:text-xl md:text-[1.5rem] text-[#32191E] mb-2 sm:mb-3">
                    {t("good")}
                  </h4>
                  <p className="text-[#4A282F] text-sm sm:text-base">
                    {t("good_desc")}
                  </p>
                </div>
                <div className="relative bg-[#FFD688] rounded-xl px-3 sm:px-4 pb-4 sm:pb-5 pt-9 sm:pt-11 flex flex-col shadow-sm">
                  <img
                    className="absolute -top-7 sm:-top-[2.188rem] left-3 sm:left-5 w-14 sm:w-[4.375rem] h-14 sm:h-[4.375rem] bg-[#FFFFFF17] p-2 border border-[#FFD688] rounded-full backdrop-blur-[1.488rem]"
                    src={okay}
                    alt=""
                  />
                  <h4 className="font-bold text-lg sm:text-xl md:text-[1.5rem] text-[#32191E] mb-2 sm:mb-3">
                    {t("okay")}
                  </h4>
                  <p className="text-[#4A282F] text-sm sm:text-base">
                    {t("okay_desc")}
                  </p>
                </div>
                <div className="relative bg-[#FFD688] rounded-xl px-3 sm:px-4 pb-4 sm:pb-5 pt-9 sm:pt-11 flex flex-col shadow-sm">
                  <img
                    className="absolute -top-7 sm:-top-[2.188rem] left-3 sm:left-5 w-14 sm:w-[4.375rem] h-14 sm:h-[4.375rem] bg-[#FFFFFF17] p-2 border border-[#FFD688] rounded-full backdrop-blur-[1.488rem]"
                    src={choice}
                    alt=""
                  />
                  <h4 className="font-bold text-lg sm:text-xl md:text-[1.5rem] text-[#32191E] mb-2 sm:mb-3">
                    {t("gurus_choice")}
                  </h4>
                  <p className="text-[#4A282F] text-sm sm:text-base">
                    {t("gurus_choice_desc")}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 sm:gap-x-5">
                <div className="relative bg-[#FFD688] rounded-xl px-3 sm:px-4 pb-4 sm:pb-5 pt-9 sm:pt-11 flex flex-col shadow-sm">
                  <img
                    className="absolute -top-7 sm:-top-[2.188rem] left-3 sm:left-5 w-14 sm:w-[4.375rem] h-14 sm:h-[4.375rem] bg-[#FFFFFF17] p-2 border border-[#FFD688] rounded-full backdrop-blur-[1.488rem]"
                    src={imogi_rev}
                    alt=""
                  />
                  <h4 className="font-bold text-lg sm:text-xl md:text-[1.5rem] text-[#32191E] mb-2 sm:mb-3">
                    {t("exceptional_experience")}
                  </h4>
                  <p className="text-[#4A282F] text-sm sm:text-base">
                    {t("exceptional_experience_desc")}
                  </p>
                </div>
                <div className="relative bg-[#FFD688] rounded-xl px-3 sm:px-4 pb-4 sm:pb-5 pt-9 sm:pt-11 flex flex-col shadow-sm">
                  <img
                    className="absolute -top-7 sm:-top-[2.188rem] left-3 sm:left-5 w-14 sm:w-[4.375rem] h-14 sm:h-[4.375rem] bg-[#FFFFFF17] p-2 border border-[#FFD688] rounded-full backdrop-blur-[1.488rem]"
                    src={delicious}
                    alt=""
                  />
                  <h4 className="font-bold text-lg sm:text-xl md:text-[1.5rem] text-[#32191E] mb-2 sm:mb-3">
                    {t("must_visit")}
                  </h4>
                  <p className="text-[#4A282F] text-sm sm:text-base">
                    {t("must_visit_desc")}
                  </p>
                </div>
                <div className="relative bg-[#FFD688] rounded-xl px-3 sm:px-4 pb-4 sm:pb-5 pt-9 sm:pt-11 flex flex-col shadow-sm">
                  <img
                    className="absolute -top-7 sm:-top-[2.188rem] left-3 sm:left-5 w-14 sm:w-[4.375rem] h-14 sm:h-[4.375rem] bg-[#FFFFFF17] p-2 border border-[#FFD688] rounded-full backdrop-blur-[1.488rem]"
                    src={good}
                    alt=""
                  />
                  <h4 className="font-bold text-lg sm:text-xl md:text-[1.5rem] text-[#32191E] mb-2 sm:mb-3">
                    {t("good_choice")}
                  </h4>
                  <p className="text-[#4A282F] text-sm sm:text-base">
                    {t("good_choice__desc")}
                  </p>
                </div>
                <div className="relative bg-[#FFD688] rounded-xl px-3 sm:px-4 pb-4 sm:pb-5 pt-9 sm:pt-11 flex flex-col shadow-sm">
                  <img
                    className="absolute -top-7 sm:-top-[2.188rem] left-3 sm:left-5 w-14 sm:w-[4.375rem] h-14 sm:h-[4.375rem] bg-[#FFFFFF17] p-2 border border-[#FFD688] rounded-full backdrop-blur-[1.488rem]"
                    src={okay}
                    alt=""
                  />
                  <h4 className="font-bold text-lg sm:text-xl md:text-[1.5rem] text-[#32191E] mb-2 sm:mb-3">
                    {t("okay")}
                  </h4>
                  <p className="text-[#4A282F] text-sm sm:text-base">
                    {t("okay_descc")}
                  </p>
                </div>
                <div className="relative bg-[#FFD688] rounded-xl px-3 sm:px-4 pb-4 sm:pb-5 pt-9 sm:pt-11 flex flex-col shadow-sm">
                  <img
                    className="absolute -top-7 sm:-top-[2.188rem] left-3 sm:left-5 w-14 sm:w-[4.375rem] h-14 sm:h-[4.375rem] bg-[#FFFFFF17] p-2 border border-[#FFD688] rounded-full backdrop-blur-[1.488rem]"
                    src={choice}
                    alt=""
                  />
                  <h4 className="font-bold text-lg sm:text-xl md:text-[1.5rem] text-[#32191E] mb-2 sm:mb-3">
                    {t("gurus_choice")}
                  </h4>
                  <p className="text-[#4A282F] text-sm sm:text-base">
                    {t("gurus_choice_descc")}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      {/* Tabbing Section End */}

      {/* FAQ Section Start */}
      {(() => {
        const faqData = [
          {
            question: t("faq_question_1"),
            answer: t("faq_answer_1"),
          },
          {
            question: t("faq_question_2"),
            answer: t("faq_answer_2"),
          },
          {
            question: t("faq_question_3"),
            answer: t("faq_answer_3"),
          },
          {
            question: t("faq_question_4"),
            answer: t("faq_answer_4"),
          },
        ];

        // By default, the first panel is open
        const [openIdx, setOpenIdx] = React.useState(0);
        const contentRefs = React.useRef([]);

        React.useEffect(() => {
          // When openIdx changes, set maxHeight for smooth transition
          faqData.forEach((_, idx) => {
            const el = contentRefs.current[idx];
            if (el) {
              if (openIdx === idx) {
                el.style.maxHeight = el.scrollHeight + "px";
              } else {
                el.style.maxHeight = "0px";
              }
            }
          });
        }, [openIdx, faqData.length]);

        return (
          <div className="faq-sec-wp relative mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4 py-6 sm:py-[2.52rem] bg-[#F8FAFB]">
            <div className="max-w-[73.188rem] mx-auto">
              <motion.div
                className="faq-sec"
                initial="hidden"
                whileInView="visible"
                variants={cardVariantsAni}
                viewport={{ once: true, amount: 0 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#32191E] mb-4 sm:mb-6">
                  {t("faq")}
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {faqData.map((item, idx) => (
                    <div
                      key={item.question}
                      className="bg-[#FFFFFF] rounded-xl px-3 sm:px-5 py-2 sm:py-3 shadow-[0px_4px_74px_0px_#0000001A]"
                    >
                      <button
                        className="flex items-center justify-between gap-2 sm:gap-3 w-full text-base sm:text-lg md:text-xl text-left focus:outline-none mb-1 sm:mb-2"
                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        aria-expanded={openIdx === idx}
                        aria-controls={`faq-panel-${idx}`}
                      >
                        <div>
                          <div className="font-semibold text-[#32191E]">
                            {item.question}
                          </div>
                        </div>
                        <span className="bg-[#FFEAC2] font-bold select-none flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full flex-shrink-0">
                          <img
                            src={faq_arrow}
                            alt=""
                            style={{
                              transition: "transform 0.3s",
                              transform:
                                openIdx === idx
                                  ? "rotate(0deg)"
                                  : "rotate(180deg)",
                              display: "inline-block",
                            }}
                          />
                        </span>
                      </button>
                      <div
                        id={`faq-panel-${idx}`}
                        ref={(el) => (contentRefs.current[idx] = el)}
                        className="text-[#4A282F] text-sm sm:text-base overflow-hidden transition-all duration-300"
                        style={{
                          maxHeight:
                            openIdx === idx
                              ? (contentRefs.current[idx]?.scrollHeight || 0) +
                                "px"
                              : "0px",
                          opacity: openIdx === idx ? 1 : 0.7,
                        }}
                        aria-hidden={openIdx !== idx}
                      >
                        <div>{item.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );
      })()}
      {/* FAQ Section End */}

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
              {/* <a
                href="https://play.google.com/store/apps/details?id=com.guruarabia.app"
                className="inline-block transition-transform duration-200 hover:scale-103"
              >
                <img src={app_store} alt="" className="h-10 w-auto" />
              </a> */}
              <Link
                to="https://apps.apple.com/us/app/guru-arabia/id6751482805"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-200 hover:scale-103"
              >
                <img src={app_store} alt="" className="h-10 w-auto" />
              </Link>
              {/* <a
                href="https://play.google.com/store/apps/details?id=com.guruarabia.app"
                className="inline-block transition-transform duration-200 hover:scale-103"
              >
                <img src={play_store} alt="" className="h-10 w-auto" />
              </a> */}
              <Link
                to="https://play.google.com/store/apps/details?id=com.guruarabia.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-200 hover:scale-103"
              >
                <img src={play_store} alt="" className="h-10 w-auto" />
              </Link>
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
                <Link to="/twitter">
                  <img src={TW} alt="" className="h-6 w-6" />
                </Link>
              </li>
              <li className="cursor-pointer transition-transform duration-200 hover:scale-105">
                <Link to="/twitter">
                  <img src={LN} alt="" className="h-6 w-6" />
                </Link>
              </li>
              <li className="cursor-pointer transition-transform duration-200 hover:scale-105">
                <Link to="/twitter">
                  <img src={FB} alt="" className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </footer>
      {/* footer End */}
    </>
  );
};

export default Rating;
