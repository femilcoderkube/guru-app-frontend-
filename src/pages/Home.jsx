import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // ✅ add Pagination
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // ✅ import pagination css
import logo from "../assets/Images/guru_logo.png";
import dark_logo from "../assets/Images/dark_logo.png";
import TW from "../assets/Images/twitter.png";
import LN from "../assets/Images/Ln.png";
import FB from "../assets/Images/fb.png";
import food_shape from "../assets/Images/food-shape.png";
import food_app from "../assets/Images/food-app.png";
import food_delivery from "../assets/Images/food-delivery.png";
import food_top_shape from "../assets/Images/food-top-shape.png";
import our_mission from "../assets/Images/our-mission.png";
import discover from "../assets/Images/discover.png";
import rate from "../assets/Images/rate.png";
import shere from "../assets/Images/shere.png";
import al_majlish_shape from "../assets/Images/al-majlish-shape.png";
import majlish_profile from "../assets/Images/majlish-profile.png";
import cake from "../assets/Images/cake.jpg";
import imogi_rev from "../assets/Images/imogi-rev.png";
import option_1 from "../assets/Images/option-1.jpg";
import custom_btn_arrow from "../assets/Images/custom-btn-arrow.png";
import custom_btn_arrow_left from "../assets/Images/custom_btn_arrow-left.png";
import why_guru from "../assets/Images/why-guru.png";
import app_store from "../assets/Images/app-store.png";
import play_store from "../assets/Images/play-store.png";
import guru_list from "../assets/Images/guru-list.png";
import footer_shape from "../assets/Images/footer-shape.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  leftToRight,
  rightToLeft,
  cardVariantsAni,
} from "../Componets/animation.jsx";
import { motion } from "motion/react";
const Home = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  const { t } = useTranslation();
  // ✅ Define refs here
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();
  const mainSwiperRef = useRef(null);
  const { i18n } = useTranslation();
  const [langKey, setLangKey] = useState(i18n.language);

  useEffect(() => {
    setLangKey(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    if (
      mainSwiperRef.current &&
      mainSwiperRef.current.swiper &&
      prevRef.current &&
      nextRef.current
    ) {
      const swiper = mainSwiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [prevRef, nextRef, mainSwiperRef, langKey]);
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
              {(() => {
                const navItems = [
                  { label: t("about"), to: "/" },
                  { label: t("our_rating"), to: "/rating" },
                  { label: t("contactus"), to: "/contactus" },
                ];
                // Determine active tab by current location
                const activeIdx = navItems.findIndex(
                  (item) => location.pathname === item.to
                );
                return (
                  <ul className="flex flex-col gap-2 px-6 mt-8">
                    {navItems.map((item, idx) => (
                      <li
                        key={item.label}
                        className={`py-2 border-b border-gray-200 cursor-pointer font-semibold ${
                          activeIdx === idx
                            ? "text-[#FF700A] font-bold"
                            : "text-[#0D0D12]"
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
                );
              })()}
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
      <div className="relative mx-2 sm:mx-4 md:mx-8 lg:mx-10  md:mt-[2.5rem] sm:mt-[5.875rem] mt-[5.875rem] rounded-[1.25rem] sm:rounded-[1.875rem] bg-transparent">
        {/* Background Video */}
        <div className="aspect-[16/9] w-full rounded-[1.25rem] sm:rounded-[1.875rem] overflow-hidden min-h-[350px] md:min-h-[400px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full !h-full object-cover z-0"
          >
            {/* Dummy video from sample-videos.com */}
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

              {(() => {
                const navItems = [
                  { label: `${t("about")}`, to: "/" },
                  { label: `${t("our_rating")}`, to: "/rating" },
                  { label: `${t("contactus")}`, to: "/contactus" },
                ];
                const [activeIdx, setActiveIdx] = React.useState(0);

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
        {/* Responsive Banner Content */}
        {(() => {
          const words = [
            t("no_ads"),
            t("real_ratings"),
            t("trusted_sources"),
            t("verified_users"),
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
              className="absolute left-0 right-0 top-[20%] md:top-[30%] xl:top-[15.313rem] z-10 px-2 sm:px-6 md:px-[3.95rem] banner-content flex flex-col items-start"
              variants={leftToRight}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-[2.2rem] lg:text-[3.125rem] text-[#FFEEE1] font-bold leading-tight sm:leading-[2.5rem] md:leading-[2.8rem] lg:leading-[3.875rem] ltr:text-left rtl:text-right">
                {t("tired_of_fake_reviews")} <br className="hidden sm:block" />{" "}
                {t("so_are_we")}{" "}
                <span className="change-text">{words[index]}</span>
              </h1>
              <h5 className="text-base md:text-xl lg:text-2xl font-normal text-[#FFEAC2] mt-3 sm:mt-4 ltr:text-left rtl:text-right">
                {t("guru")}
              </h5>
              <div className="flex items-center flex-wrap md:gap-5 gap-2 mt-4 lg:mt-8">
                <button className="px-6 sm:px-[2rem] lg:px-[2.188rem] py-3 sm:py-4 bg-[#FF700A] text-[#FFEEE1] rounded-xl sm:rounded-[1.25rem] font-bold text-base hover:bg-[#fc9924] transition-colors duration-200 cursor-pointer w-auto">
                  {t("download")}
                </button>
              </div>
            </motion.div>
          );
        })()}

        <motion.div
          className="absolute bottom-2 sm:bottom-4 md:bottom-[2.5rem] z-10 w-full flex justify-center"
          initial="hidden"
          whileInView="visible"
          variants={cardVariantsAni}
          viewport={{ once: true, amount: 0 }}
        >
          <ul className="flex items-center justify-center gap-4 sm:gap-6">
            <li className="cursor-pointer transition-transform duration-200 hover:scale-105">
              <img src={TW} alt="Twitter" className="h-6 w-6 sm:h-7 sm:w-7" />
            </li>
            <li className="cursor-pointer transition-transform duration-200 hover:scale-105">
              <img src={LN} alt="LinkedIn" className="h-6 w-6 sm:h-7 sm:w-7" />
            </li>
            <li className="cursor-pointer transition-transform duration-200 hover:scale-105">
              <img src={FB} alt="Facebook" className="h-6 w-6 sm:h-7 sm:w-7" />
            </li>
          </ul>
        </motion.div>
        {/* Optional: overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none rounded-[1.25rem] sm:rounded-[1.875rem]"></div>
      </div>
      {/* Hero Section End */}

      {/* Food App Start */}
      <div className="food-app-sec relative mx-2 sm:mx-4 md:mx-10 mt-10 md:mt-[6.938rem] mb-10 md:mb-16 lg:mb-[8.5rem]">
        <div className="food-app-wp flex flex-col md:flex-row items-center gap-8 md:gap-[3.188rem] max-w-[85rem] mx-auto w-full">
          {/* Left: Text */}
          <motion.div
            className="food-app-left relative w-full md:max-w-[25rem] ltr:pl-4 rtl:pr-4 ltr:sm:pl-6 rtl:sm:pr-6 ltr:md:pl-8 rtl:md:pr-8 mb-8 md:mb-0"
            variants={leftToRight}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="absolute ltr:left-0 rtl:right-0 top-0 w-10 sm:w-14 md:w-auto">
              <img src={food_shape} alt="" className="w-full h-auto" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-[2.813rem] font-bold leading-tight md:leading-[3.75rem] text-[#32191E] mb-2">
              {t("this_isn't_another")}
              <span className="text-[#FF700A] pl-1">{t("food_app")}</span>
            </h2>
            <ul className="mt-4 mb-4 text-lg sm:text-xl md:text-2xl text-[#32191E] font-normal list-none pl-0 space-y-1">
              <li> {t("stars")}</li>
              <li>{t("influencers")}</li>
              <li>{t("noise")}</li>
            </ul>
          </motion.div>
          {/* Right: Card grid */}
          <motion.div
            className="food-app-right relative flex flex-col md:flex-row gap-4 w-full h-full"
            variants={rightToLeft}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="food-shape absolute ltr:right-0 rtl:left-0 -top-12 sm:-top-16 md:top-[-6.4rem] w-24 sm:w-32 md:w-auto z-0 pointer-events-none">
              <img src={food_top_shape} alt="" className="w-full h-auto" />
            </div>
            {/* Card 1: App screenshot */}
            <div className="flex-1 min-w-0">
              <div className="relative flex bg-[#FFEAC2] rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.875rem] max-w-full 2xl:max-w-[26rem] md:max-w-[23.563rem] w-full h-48 sm:h-64 md:h-[17.188rem] items-end overflow-hidden">
                <img
                  className="ltr:ml-2 rtl:mr-2 ltr:sm:ml-5 rtl:sm:mr-5 w-2/3 sm:w-auto max-h-full object-contain"
                  src={food_app}
                  alt=""
                />
              </div>
              <div className="food-explore bg-white rounded-xl shadow-[0px_4px_74px_0px_#0000001A] p-4 mt-4 sm:mt-6 md:mt-6.5 w-full md:w-[calc(100%+5rem)] relative z-10">
                <h5 className="text-[#32191E] text-lg sm:text-xl md:text-2xl font-bold">
                  {t("vibe")}
                </h5>
                <p className="text-[#4A282F] mt-2 sm:mt-2.5 text-base sm:text-lg">
                  {t("with_guru")}
                </p>
                <button className="mt-4 px-4 py-3 sm:py-[0.83rem] bg-[#FF700A] text-[#FFEEE1] rounded-xl font-bold hover:bg-[#fc9924] transition-colors duration-200 cursor-pointer text-base sm:text-lg">
                  {t("start_exploring")}
                </button>
              </div>
            </div>
            {/* Card 2: Food photo */}
            <div className="md:mb-[2.188rem] food-pic relative bg-[#FFEAC2] rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.875rem] md:max-w-[15rem] w-full lg:max-w-[20rem] xl:max-w-[29.813rem] min-h-[12rem] sm:min-h-[15rem] lg:min-h-[17rem]  xl:min-h-[26.813rem] flex">
              <img
                className="ml-auto relative z-10 ltr:xl:left-4 rtl:xl:right-4 top-0 w-2/3 sm:w-3/4 md:w-auto max-h-full object-contain"
                src={food_delivery}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Food App End */}

      {/* Our Mission start */}
      <div className="our-mission-sec bg-[#FFEAC2] flex flex-col md:flex-row items-center relative w-full px-4 sm:px-8 md:px-12 xl:px-20 py-10 sm:py-14 md:py-20">
        {/* Left: Text */}
        <motion.div
          className="flex-1 max-w-2xl xl:max-w-[46.313rem] md:max-w-[40rem] w-full z-10"
          variants={leftToRight}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#32191E] mb-2">
            {t("our_mission")}
          </h3>
          <h6 className="text-[#32191E] text-base sm:text-lg md:text-xl font-medium mb-4 md:mb-6">
            {t("born")}
          </h6>
          <p className="text-[#32191E] text-base sm:text-lg md:text-xl">
            {t("moment")}
          </p>
        </motion.div>
        {/* Right: Image */}
        <motion.div
          className="mission-img relative w-full md:w-auto flex justify-center md:justify-end md:absolute md:bottom-[5rem] md:right-0 md:translate-y-1/4 rtl:md:justify-start rtl:md:left-0 rtl:md:right-auto"
          variants={rightToLeft}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            src={our_mission}
            alt="Riyadh Skyline"
            className="w-3/4 sm:w-2/3 md:w-[22rem] lg:w-[28rem] xl:w-[38rem] 2xl:w-[42rem] max-w-full h-auto object-contain rtl:[transform:rotateY(180deg)]"
          />
        </motion.div>
      </div>
      {/* Our Mission End */}

      {/* How it work start */}
      <motion.div
        className="how-it-works-section mt-8 sm:mt-12 mb-10 sm:mb-20 relative z-10 max-w-[84.375rem] mx-auto px-2 sm:px-6"
        initial="hidden"
        whileInView="visible"
        variants={cardVariantsAni}
        viewport={{ once: true, amount: 0 }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#32191E]">
            {t("how_it_works")}
          </h2>
          <span className="text-[#FF700A] font-normal text-lg sm:text-xl md:text-2xl">
            {t("taste_talk_repeat")}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Discover Card */}
          <div className="flex flex-col bg-white rounded-xl sm:rounded-[1.25rem] p-4 sm:p-5 shadow-[0px_4px_34px_0px_#0000001A] cursor-pointer h-full">
            <img
              src={discover}
              alt="Discover"
              className="w-full h-auto mb-4 sm:mb-6"
            />
            <h4 className="text-xl sm:text-[1.5rem] md:text-[1.75rem] font-bold text-[#0D0D12] mb-1 sm:mb-2">
              {t("discover")}
            </h4>
            <p className="text-[#4A282F] text-base sm:text-lg">{t("city")}</p>
          </div>
          {/* Rate Card */}
          <div className="flex flex-col bg-white rounded-xl sm:rounded-[1.25rem] p-4 sm:p-5 shadow-[0px_4px_34px_0px_#0000001A] cursor-pointer h-full">
            <img src={rate} alt="Rate" className="w-full h-auto mb-4 sm:mb-6" />
            <h4 className="text-xl sm:text-[1.5rem] md:text-[1.75rem] font-bold text-[#0D0D12] mb-1 sm:mb-2">
              {t("rate")}
            </h4>
            <p className="text-[#4A282F] text-base sm:text-lg">{t("say_it")}</p>
          </div>
          {/* Share Card */}
          <div className="flex flex-col bg-white rounded-xl sm:rounded-[1.25rem] p-4 sm:p-5 shadow-[0px_4px_34px_0px_#0000001A] cursor-pointer h-full">
            <img
              src={shere}
              alt="Share"
              className="w-full h-auto mb-4 sm:mb-6"
            />
            <h4 className="text-xl sm:text-[1.5rem] md:text-[1.75rem] font-bold text-[#0D0D12] mb-1 sm:mb-2">
              {t("share")}
            </h4>
            <p className="text-[#4A282F] text-base sm:text-lg">{t("build")}</p>
          </div>
        </div>
      </motion.div>
      {/* How it work end */}
      {/* Al Majlish Section Start */}
      <div className="relative mx-2 sm:mx-4 md:mx-8 lg:mx-10 mb-10 sm:mb-16 md:mb-20 lg:mb-[8.75rem]">
        <div className="al-majlish-sec rounded-[1.875rem] bg-[#32191E] shadow-lg relative overflow-hidden">
          <img
            className="absolute ltr:right-0 rtl:left-0 top-[1rem] sm:top-[2rem] lg:!block !hidden rtl:[transform:rotateY(180deg)]"
            src={al_majlish_shape}
            alt=""
          />
          <motion.div
            className="mx-4 sm:mx-8 md:mx-10 pt-[2rem] sm:pt-[2.5rem] md:pt-[3.188rem]"
            initial="hidden"
            whileInView="visible"
            variants={cardVariantsAni}
            viewport={{ once: true, amount: 0 }}
          >
            <h2 className="relative text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#FFEAC2] mb-6 sm:mb-8 md:mb-9">
              {t("al_majlis")}
            </h2>
            <p className="text-[#FFEAC2] text-base sm:text-lg md:text-xl max-w-full md:max-w-[49.9rem]">
              {t("guru_social")}{" "}
              <span className="text-[#9FE379]"> {t("open")}</span>
            </p>
          </motion.div>
          <motion.div
            className="al-majlish-slider relative mt-10 sm:mt-14 md:mt-16 pb-[4rem] sm:pb-[5rem] md:pb-[6rem]"
            initial="hidden"
            whileInView="visible"
            variants={cardVariantsAni}
            viewport={{ once: true, amount: 0 }}
          >
            <Swiper
              dir={i18n.language === "ar" ? "ltr" : "rtl"}
              spaceBetween={8}
              slidesPerView={1.05}
              centeredSlides={false}
              autoHeight={false} // ✅ prevents jump
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full inline-block mx-1 bg-[#FFEAC2]"></span>`;
                },
              }}
              modules={[Pagination]}
              breakpoints={{
                576: { slidesPerView: 1.6, spaceBetween: 12 },
                640: { slidesPerView: 1.8, spaceBetween: 14 },
                768: { slidesPerView: 2.3, spaceBetween: 16 },
                1024: { slidesPerView: 2.8, spaceBetween: 18 },
                1280: { slidesPerView: 3.2, spaceBetween: 20 },
                1536: { slidesPerView: 3.5, spaceBetween: 22 },
              }}
              className="!overflow-visible"
            >
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <SwiperSlide key={idx} className="h-full flex">
                  {/* Slide */}
                  <div className="al-majlish-card flex flex-col justify-between relative h-full">
                    <div className="al-majlish-wp h-full">
                      <div className="flex items-center gap-2 mb-2.5">
                        <img src={majlish_profile} alt="" />
                        <div>
                          <h6 className="flex items-center gap-1 text-[#FFEEE1]">
                            {t("mohsen")}
                            <span className="bg-[#DFE3FC] text-[#6A76B7] text-xs font-medium px-2 py-1 rounded-full">
                              {t("foodie")}
                            </span>
                            <span className="text-[0.625rem] text-[#FFEEE1] font-bold">
                              {t("rated_this_dish")}
                            </span>
                          </h6>
                          <p className="text-[0.625rem] text-[#FFEEE1]">
                            {t("today")}
                          </p>
                        </div>
                      </div>
                      <div className="ltr:mr-[2.625rem] rtl:ml-[2.625rem] bg-[#4A282F] rounded-3xl h-full">
                        <img
                          src={cake}
                          alt="Dish 1"
                          className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-t-lg"
                        />
                        <div className="rounded-3xl px-4 py-3 shadow-md flex justify-between">
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-[#FFEEE1] mb-1">
                              {t("chocolate_pancakes")}
                            </h4>
                            <p className="text-[#FFEEE1] text-[0.625rem]">
                              {t("maison_bites")}
                            </p>
                          </div>
                          <div className="flex flex-col items-center gap-1 -mt-8 sm:-mt-10 md:-mt-11">
                            <img
                              className="w-full h-[13]"
                              src={imogi_rev}
                              alt=""
                            />
                            <span className="text-[#FFD688] text-[0.625rem] Exceptional">
                              {t("exceptional")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
      {/* Al Majlish Section End */}

      {/* Real Option Section Start */}
      <motion.div
        className="mx-auto mb-16 max-w-[82.5rem] px-2 sm:px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        variants={cardVariantsAni}
        viewport={{ once: true, amount: 0 }}
      >
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:gap-0 md:justify-between md:items-center">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#32191E] leading-tight">
            {t("real_opinions")}{" "}
            <span className=" text-[#FF700A] font-normal text-base sm:text-lg md:text-[1.5rem] ml-0 md:ml-2 tracking-wide">
              {t("unfiltered_unpaid_undeniable")}
            </span>
          </h2>

          {/* ✅ Custom navigation buttons */}
          <div
            className="custom-swiper-btn flex justify-center gap-3 mt-2 md:mt-0"
            dir="ltr"
          >
            <button
              ref={prevRef}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 flex items-center justify-center rounded-full bg-[#32191E1C] cursor-pointer border border-transparent transition-all duration-200 ease-in-out hover:border-[#32191E]"
            >
              <img src={custom_btn_arrow_left} alt="" />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 flex items-center justify-center rounded-full bg-[#32191E1C] cursor-pointer border border-transparent transition-all duration-200 ease-in-out hover:border-[#32191E]"
            >
              <img src={custom_btn_arrow} alt="" />
            </button>
          </div>
        </div>

        <Swiper
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          spaceBetween={12}
          slidesPerView={1}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 14 },
            768: { slidesPerView: 1.2, spaceBetween: 16 },
            900: { slidesPerView: 2, spaceBetween: 16 },
            1200: { slidesPerView: 2.5, spaceBetween: 18 },
            1366: { slidesPerView: 3, spaceBetween: 18 },
          }}
          className="real-option-slider !overflow-visible"
        >
          {[1, 2, 3, 4].map((_, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative real-option-card-wp h-full w-full bg-cover bg-center px-3 sm:px-4 md:px-6 pt-4 sm:pt-[0.875rem] pb-4 sm:pb-5 rounded-[1.25rem] z-2 min-h-[14rem] flex flex-col justify-between"
                style={{ backgroundImage: `url(${option_1})` }}
              >
                <div className="real-option-card flex flex-col items-center ltr:ml-auto rtl:mr-auto p-2 sm:p-4 max-w-[5rem] sm:max-w-[6.063rem] mb-6 sm:mb-[4rem]">
                  <img
                    className="w-8 h-8 sm:w-[3.25rem] sm:h-[3.25rem] p-[0.125rem] bg-[#FFFFFF17] rounded-full backdrop-blur-[1.488rem]"
                    src={imogi_rev}
                    alt=""
                  />
                  <span className="text-[#FFD688] text-xs sm:text-[0.625rem]">
                    {t("exceptional")}
                  </span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#FFEAC2] mb-1">
                    {t("avocado_egg_toast_stack")}
                  </h4>
                  <p className="text-[#FFEAC2] text-xs sm:text-sm">
                    {t("maison_bites")}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      {/* Real Option Section End */}

      {/* Why Guru Section Start */}
      <div className="relative why-guru-section bg-[#FFEAC2] px-4 sm:px-6 md:px-10 pt-8 sm:pt-10 mt-8 sm:mt-10 mb-10 sm:mb-16">
        {/* Left: Text Content */}
        <div className="mx-auto max-w-[82.5rem] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="flex-1 z-10 w-full"
            variants={leftToRight}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#32191E] mb-2 sm:mb-3">
              <span>{t("why_guru")}</span>
            </h2>
            <h5 className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6.5 font-medium">
              {t("we_dont_do_stars")}
            </h5>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start gap-3 sm:gap-6">
                <img src={guru_list} alt="" />
                <div>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#32191E]">
                    {t("top_rated")}
                  </span>
                  <p className="text-[#4A282F] text-sm sm:text-base md:text-lg ml-0.5">
                    {t("top_rated_desc")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-6">
                <img src={guru_list} alt="" />
                <div>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#32191E]">
                    {t("food_first_feed")}
                  </span>
                  <p className="text-[#4A282F] text-sm sm:text-base md:text-lg ml-0.5">
                    {t("food_first_feed_desc")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-6">
                <img src={guru_list} alt="" />
                <div>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#32191E]">
                    {t("save_the_dish")}
                  </span>
                  <p className="text-[#4A282F] text-sm sm:text-base md:text-lg ml-0.5">
                    {t("save_the_dish_desc")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-6">
                <img src={guru_list} alt="" />
                <div>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#32191E]">
                    {t("private_personal")}
                  </span>
                  <p className="text-[#4A282F] text-sm sm:text-base md:text-lg ml-0.5">
                    {t("private_personal_desc")}
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
          {/* Right: App Images */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end items-center relative z-10 w-full"
            variants={rightToLeft}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="relative flex items-end w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={why_guru}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Why Guru Section End */}
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

export default Home;
