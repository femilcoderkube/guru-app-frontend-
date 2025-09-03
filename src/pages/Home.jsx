import React, { useRef } from "react";
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
import banner_video from "../assets/Images/banner-video.mp4";
const Home = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  // ✅ Define refs here
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      {/* dark-header start */}
      <header className="fixed top-0 z-100 w-full bg-[#FFFFFF] py-6 px-4 md:px-10 lg:px-[6.25rem] md:hidden block">
        <div className="flex items-center justify-between w-full max-w-[76.5rem] mx-auto">
          <div className="site-logo flex-shrink-0 ">
            <img src={dark_logo} alt="Guru Logo" className="h-8 md:h-10" />
          </div>        
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
                <li className="py-2 border-b border-gray-200 text-[#0D0D12] font-semibold cursor-pointer">
                  About
                </li>
                <li className="py-2 border-b border-gray-200 text-[#0D0D12] font-semibold cursor-pointer">
                  Our Rating
                </li>
                <li className="py-2 border-b border-gray-200 text-[#0D0D12] font-semibold cursor-pointer">
                  Contact Us
                </li>
              </ul>
              <div className="mt-6 px-6">
                <div className="py-2 bg-[#F6F8FA] rounded-2xl px-4 border border-[#DFE1E7] border-opacity-[0.34] w-fit">
                  <span className="cursor-pointer text-base font-normal text-[#0D0D12] leading-none">
                    EN
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* dark-header End */}

      {/* Hero Section Start */}
      <div className="relative mx-2 sm:mx-4 md:mx-8 lg:mx-10  md:mt-[2.5rem] sm:mt-[5.875rem] mt-[5.875rem] rounded-[1.25rem] sm:rounded-[1.875rem] bg-transparent">
        {/* Background Video */}
        <div className="aspect-[16/9] w-full rounded-[1.25rem] sm:rounded-[1.875rem] overflow-hidden min-h-[330px] md:min-h-[400px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full !h-full object-cover z-0"
          >
            {/* Dummy video from sample-videos.com */}
            <source src={banner_video} type="video/mp4" />
          </video>
        </div>
        {/* Overlay content */}
        <div className="absolute top-2 sm:top-4 md:top-[1.875rem] z-10 px-2 sm:px-6 md:px-[3.95rem] w-full md:block hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
            <div className="site-logo flex-shrink-0 md:block hidden">
              <img src={logo} alt="Guru Logo" className="h-8 sm:h-10 md:h-12" />
            </div>
            <div className="flex items-center gap-2 sm:gap-4 h-[2.5rem] sm:h-[3.375rem] mt-2 sm:mt-0">
              {(() => {
                const navItems = [
                  { label: "About", to: "/" },
                  { label: "Our Rating", to: "/Page" },
                  { label: "Contact Us", to: "/Page2" },
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
                        onClick={() => setActiveIdx(idx)}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                );
              })()}
              <div className="bg-[#FFEEE11A] rounded-2xl px-3 sm:px-4 md:px-[1.938rem] py-2 sm:py-4 border border-[#FFEEE1] border-opacity-[0.34] h-full flex items-center">
                <span className="cursor-pointer text-sm sm:text-base font-normal text-[#FFEAC2] leading-none">
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Responsive Banner Content */}
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
            <div className="absolute left-0 right-0 top-[20%] md:top-[30%] xl:top-[15.313rem] z-10 px-2 sm:px-6 md:px-[3.95rem] banner-content flex flex-col items-start">
              <h1 className="text-2xl sm:text-3xl md:text-[2.2rem] lg:text-[3.125rem] text-[#FFEEE1] font-bold leading-tight sm:leading-[2.5rem] md:leading-[2.8rem] lg:leading-[3.875rem] text-left">
                Tired of fake reviews? <br className="hidden sm:block" /> So are
                we. <span className="change-text">{words[index]}</span>
              </h1>
              <h5 className="text-base md:text-xl lg:text-2xl font-normal text-[#FFEAC2] mt-3 sm:mt-4 text-left">
                Guru is where real people talk about real food.
              </h5>
              <button className="mt-4 lg:mt-8 px-6 sm:px-[2rem] lg:px-[2.188rem] py-3 sm:py-4 bg-[#FF700A] text-[#FFEEE1] rounded-xl sm:rounded-[1.25rem] font-bold text-base hover:bg-[#fc9924] transition-colors duration-200 cursor-pointer w-auto">
                Download your app
              </button>
            </div>
          );
        })()}

        <div className="absolute bottom-2 sm:bottom-4 md:bottom-[2.5rem] z-10 w-full flex justify-center">
          <ul className="flex items-center justify-center gap-4 sm:gap-6">
            <li className="cursor-pointer">
              <img src={TW} alt="Twitter" className="h-6 w-6 sm:h-7 sm:w-7" />
            </li>
            <li className="cursor-pointer">
              <img src={LN} alt="LinkedIn" className="h-6 w-6 sm:h-7 sm:w-7" />
            </li>
            <li className="cursor-pointer">
              <img src={FB} alt="Facebook" className="h-6 w-6 sm:h-7 sm:w-7" />
            </li>
          </ul>
        </div>
        {/* Optional: overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none rounded-[1.25rem] sm:rounded-[1.875rem]"></div>
      </div>
      {/* Hero Section End */}

      {/* Food App Start */}
      <div className="food-app-sec relative mx-2 sm:mx-4 md:mx-10 mt-10 md:mt-16 lg:mt-[6.938rem] mb-10 md:mb-16 lg:mb-[8.5rem]">
        <div className="food-app-wp flex flex-col md:flex-row items-center gap-8 md:gap-[3.188rem] max-w-[85rem] mx-auto w-full">
          {/* Left: Text */}
          <div className="food-app-left relative w-full md:max-w-[25rem] pl-4 sm:pl-6 md:pl-8 mb-8 md:mb-0">
            <div className="absolute left-0 top-0 w-10 sm:w-14 md:w-auto">
              <img src={food_shape} alt="" className="w-full h-auto" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-[2.813rem] font-bold leading-tight md:leading-[3.75rem] text-[#32191E] mb-2">
              THIS ISN'T ANOTHER
              <span className="text-[#FF700A] pl-1">FOOD APP</span>
            </h2>
            <ul className="mt-4 mb-4 text-lg sm:text-xl md:text-2xl text-[#32191E] font-normal list-none pl-0 space-y-1">
              <li>You don’t need stars.</li>
              <li>You don’t need influencers.</li>
              <li>You don’t need sponsored noise.</li>
            </ul>
          </div>
          {/* Right: Card grid */}
          <div className="food-app-right relative flex flex-col md:flex-row gap-4 w-full h-full">
            <div className="food-shape absolute right-0 -top-12 sm:-top-16 md:top-[-6.4rem] w-24 sm:w-32 md:w-auto z-0 pointer-events-none">
              <img src={food_top_shape} alt="" className="w-full h-auto" />
            </div>
            {/* Card 1: App screenshot */}
            <div className="flex-1 min-w-0">
              <div className="relative flex bg-[#FFEAC2] rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.875rem] max-w-full 2xl:max-w-[26rem] md:max-w-[23.563rem] w-full h-48 sm:h-64 md:h-[17.188rem] items-end overflow-hidden">
                <img
                  className="ml-2 sm:ml-5 w-2/3 sm:w-auto max-h-full object-contain"
                  src={food_app}
                  alt=""
                />
              </div>
              <div className="food-explore bg-white rounded-xl shadow-[0px_4px_74px_0px_#0000001A] p-4 mt-4 sm:mt-6 md:mt-6.5 w-full md:w-[calc(100%+5rem)] relative z-10">
                <h5 className="text-[#32191E] text-lg sm:text-xl md:text-2xl font-bold">
                  The right dish. The right vibe.
                </h5>
                <p className="text-[#4A282F] mt-2 sm:mt-2.5 text-base sm:text-lg">
                  Find the perfect spot for every mood — with GURU
                </p>
                <button className="mt-4 px-4 py-3 sm:py-[0.83rem] bg-[#FF700A] text-[#FFEEE1] rounded-xl font-bold hover:bg-[#fc9924] transition-colors duration-200 cursor-pointer text-base sm:text-lg">
                  Start exploring
                </button>
              </div>
            </div>
            {/* Card 2: Food photo */}
            <div className="md:mb-[2.188rem] food-pic relative bg-[#FFEAC2] rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.875rem] md:max-w-[15rem] w-full lg:max-w-[20rem] xl:max-w-[29.813rem] min-h-[12rem] sm:min-h-[15rem] lg:min-h-[17rem]  xl:min-h-[26.813rem] flex">
              <img
                className="ml-auto relative z-10 xl:left-4 top-0 w-2/3 sm:w-3/4 md:w-auto max-h-full object-contain"
                src={food_delivery}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Food App End */}

      {/* Our Mission start */}
      <div className="our-mission-sec bg-[#FFEAC2] flex flex-col md:flex-row items-center relative w-full px-4 sm:px-8 md:px-12 xl:px-20 py-10 sm:py-14 md:py-20">
        {/* Left: Text */}
        <div className="flex-1 max-w-2xl xl:max-w-[46.313rem] md:max-w-[40rem] w-full z-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#32191E] mb-2">
            Our Mission
          </h3>
          <h6 className="text-[#32191E] text-base sm:text-lg md:text-xl font-medium mb-4 md:mb-6">
            Born in Saudi, but for food lovers!
          </h6>
          <p className="text-[#32191E] text-base sm:text-lg md:text-xl">
            Help you discover the dishes & spots most loved by real, people for
            every mood and moment.
          </p>
        </div>
        {/* Right: Image */}
        <div className="mission-img relative w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0 md:absolute md:bottom-[5rem] md:right-0 md:translate-y-1/4">
          <img
            src={our_mission}
            alt="Riyadh Skyline"
            className="w-3/4 sm:w-2/3 md:w-[22rem] lg:w-[28rem] xl:w-[38rem] 2xl:w-[42rem] max-w-full h-auto object-contain"
          />
        </div>
      </div>
      {/* Our Mission End */}

      {/* How it work start */}
      <div className="how-it-works-section mt-8 sm:mt-12 mb-10 sm:mb-20 relative z-10 max-w-[84.375rem] mx-auto px-2 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#32191E]">
            How It Works
          </h2>
          <span className="text-[#FF700A] font-normal text-lg sm:text-xl md:text-2xl">
            "TASTE. TALK. REPEAT."
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
              Discover
            </h4>
            <p className="text-[#4A282F] text-base sm:text-lg">
              See what’s trending in your city.
            </p>
          </div>
          {/* Rate Card */}
          <div className="flex flex-col bg-white rounded-xl sm:rounded-[1.25rem] p-4 sm:p-5 shadow-[0px_4px_34px_0px_#0000001A] cursor-pointer h-full">
            <img src={rate} alt="Rate" className="w-full h-auto mb-4 sm:mb-6" />
            <h4 className="text-xl sm:text-[1.5rem] md:text-[1.75rem] font-bold text-[#0D0D12] mb-1 sm:mb-2">
              Rate
            </h4>
            <p className="text-[#4A282F] text-base sm:text-lg">
              Ate it? Say it.
            </p>
          </div>
          {/* Share Card */}
          <div className="flex flex-col bg-white rounded-xl sm:rounded-[1.25rem] p-4 sm:p-5 shadow-[0px_4px_34px_0px_#0000001A] cursor-pointer h-full">
            <img
              src={shere}
              alt="Share"
              className="w-full h-auto mb-4 sm:mb-6"
            />
            <h4 className="text-xl sm:text-[1.5rem] md:text-[1.75rem] font-bold text-[#0D0D12] mb-1 sm:mb-2">
              Share
            </h4>
            <p className="text-[#4A282F] text-base sm:text-lg">
              Build your flavor profile. Follow honest eaters
            </p>
          </div>
        </div>
      </div>
      {/* How it work end */}
      {/* Al Majlish Section Start */}
      <div className="relative mx-2 sm:mx-4 md:mx-8 lg:mx-10 mb-10 sm:mb-16 md:mb-20 lg:mb-[8.75rem]">
        <div className="al-majlish-sec rounded-[1.875rem] bg-[#32191E] shadow-lg relative overflow-hidden">
          <div className="mx-4 sm:mx-8 md:mx-10 pt-[2rem] sm:pt-[2.5rem] md:pt-[3.188rem]">
            <img
              className=" absolute right-0 top-[1rem] sm:top-[2rem] lg:!block !hidden"
              src={al_majlish_shape}
              alt=""
            />
            <h2 className="relative text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#FFEAC2] mb-6 sm:mb-8 md:mb-9">
              Al Majlis
            </h2>
            <p className="text-[#FFEAC2] text-base sm:text-lg md:text-xl max-w-full md:max-w-[49.9rem]">
              GURU’s social heart — where friends gather to share ratings,
              recommend top dishs and places worth experiencing.{" "}
              <span className="text-[#9FE379]">open 24/7.</span>
            </p>
          </div>
          <div className="al-majlish-slider relative mt-10 sm:mt-14 md:mt-16 pb-[4rem] sm:pb-[5rem] md:pb-[6rem]">
  <Swiper
    spaceBetween={8}
    slidesPerView={1.05}
    centeredSlides={false}
    autoHeight={false} // ✅ prevents jump
    dir="rtl"
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
        <div className="flex flex-col justify-between relative h-full" dir="ltr">
          <div className="al-majlish-wp h-full">
            <div className="flex items-center gap-2 mb-2.5">
              <img src={majlish_profile} alt="" />
              <div>
                <h6 className="flex items-center gap-1 text-[#FFEEE1]">
                  Mohsen
                  <span className="bg-[#DFE3FC] text-[#6A76B7] text-xs font-medium px-2 py-1 rounded-full">
                    Foodie
                  </span>
                  <span className="text-[0.625rem] text-[#FFEEE1] font-bold">
                    rated this dish
                  </span>
                </h6>
                <p className="text-[0.625rem] text-[#FFEEE1]">Today, 10:30 am</p>
              </div>
            </div>
            <div className="ml-[2.625rem] bg-[#4A282F] rounded-3xl h-full">
              <img
                src={cake}
                alt="Dish 1"
                className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-t-lg"
              />
              <div className="rounded-3xl px-4 py-3 shadow-md flex justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#FFEEE1] mb-1">
                    Chocolate Pancakes
                  </h4>
                  <p className="text-[#FFEEE1] text-[0.625rem]">Maison Bites</p>
                </div>
                <div className="flex flex-col items-center gap-1 -mt-8 sm:-mt-10 md:-mt-11">
                  <img className="w-full h-[13]" src={imogi_rev} alt="" />
                  <span className="text-[#FFD688] text-[0.625rem] Exceptional">
                    Exceptional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        </div>
      </div>
      {/* Al Majlish Section End */}

      {/* Real Option Section Start */}
      <div className="mx-auto mb-16 max-w-[82.5rem] px-2 sm:px-4 md:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:gap-0 md:justify-between md:items-center">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#32191E] leading-tight">
            Real Opinions{" "}
            <span className=" text-[#FF700A] font-normal text-base sm:text-lg md:text-[1.5rem] ml-0 md:ml-2 tracking-wide">
              UNFILTERED. UNPAID. UNDENIABLE.
            </span>
          </h2>

          {/* ✅ Custom navigation buttons */}
          <div className="custom-swiper-btn flex justify-center gap-3 mt-2 md:mt-0">
            <button
              ref={prevRef}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 flex items-center justify-center rounded-full prev-btn cursor-pointer"
            >
              <img src={custom_btn_arrow_left} alt="" />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 flex items-center justify-center rounded-full cursor-pointer"
            >
              <img src={custom_btn_arrow} alt="" />
            </button>
          </div>
        </div>

        <Swiper
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
                <div className="real-option-card flex flex-col items-center ml-auto p-2 sm:p-4 max-w-[5rem] sm:max-w-[6.063rem] mb-6 sm:mb-[4rem]">
                  <img
                    className="w-8 h-8 sm:w-[3.25rem] sm:h-[3.25rem] p-[0.125rem] bg-[#FFFFFF17] rounded-full backdrop-blur-[1.488rem]"
                    src={imogi_rev}
                    alt=""
                  />
                  <span className="text-[#FFD688] text-xs sm:text-[0.625rem]">
                    Exceptional
                  </span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#FFEAC2] mb-1">
                    Avocado Egg Toast Stack
                  </h4>
                  <p className="text-[#FFEAC2] text-xs sm:text-sm">
                    Maison Bites
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Real Option Section End */}

      {/* Why Guru Section Start */}
      <div className="relative why-guru-section bg-[#FFEAC2] px-4 sm:px-6 md:px-10 pt-8 sm:pt-10 mt-8 sm:mt-10 mb-10 sm:mb-16">
        {/* Left: Text Content */}
        <div className="mx-auto max-w-[82.5rem] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 z-10 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#32191E] mb-2 sm:mb-3">
              <span>Why Guru?</span>
            </h2>
            <h5 className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6.5">
              We don’t do stars, we do experiences
            </h5>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start gap-3 sm:gap-6">
                <img src={guru_list} alt="" />
                <div>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#32191E]">
                    Top Rated
                  </span>
                  <p className="text-[#4A282F] text-sm sm:text-base md:text-lg ml-0.5">
                    Dishes loved across Saudi — if it’s on this list, it’s worth
                    the bite.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-6">
                <img src={guru_list} alt="" />
                <div>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#32191E]">
                    Food-first feed.
                  </span>
                  <p className="text-[#4A282F] text-sm sm:text-base md:text-lg ml-0.5">
                    See what people are actually eating — not “ad-world” shots.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-6">
                <img src={guru_list} alt="" />
                <div>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#32191E]">
                    Save the dish.
                  </span>
                  <p className="text-[#4A282F] text-sm sm:text-base md:text-lg ml-0.5">
                    Not just the place. Save the exact dish you crave.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-6">
                <img src={guru_list} alt="" />
                <div>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#32191E]">
                    Private &amp; Personal.
                  </span>
                  <p className="text-[#4A282F] text-sm sm:text-base md:text-lg ml-0.5">
                    Your taste, your list. No one else can see it.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* Right: App Images */}
          <div className="flex-1 flex justify-center md:justify-end items-center relative z-10 mt-8 md:mt-0 w-full">
            <div className="relative flex items-end w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={why_guru}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Why Guru Section End */}
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
                Make it count.
              </h2>
              <p className="text-base md:text-xl text-[#4A282F]">
                One real review can help someone skip a bland bite — or find the
                best. So do it well!
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
              ⓒ All Rights Reserved for Guru 2025
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-[#32191E] mt-2 md:mt-0">
              <a href="#" className="text-[#32191E] text-sm md:text-base">
                Privacy Policy
              </a>
              <a href="#" className="text-[#32191E] text-sm md:text-base">
                Terms of Use
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

export default Home;
