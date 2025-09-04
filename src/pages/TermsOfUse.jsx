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
import { NavLink, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
const TermsOfUse = () => {
  // Responsive nav state for mobile menu
  const [navOpen, setNavOpen] = React.useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
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
                { label: `${t("about")}`, to: "/" },
                { label: `${t("our_rating")}`, to: "/rating" },
                { label: `${t("contactus")}`, to: "/contactus" },
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
            {t("terms_of_use")}
          </span>
        </div>
      </div>
      {/* inner-banner End */}

      {/* Tearms start */}
      <div className="faq-sec-wp relative terms-sec bg-[#F8FAFB] py-6 sm:py-8 md:py-[2.563rem]">
        <div className="max-w-[76.5rem] mx-auto px-2 sm:px-4 xl:px-0">
          <div className="terms-title mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#32191E]">
              {t("terms_of_use")}
            </h2>
            <p className="text-base sm:text-lg font-medium text-[#32191E]">
              {t("last_updated_jan_2025")}
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-4">
            {/* Sidebar */}
            <div className="w-full md:w-auto md:min-w-[16.688rem]">
              <div className="bg-white rounded-[1.25rem] shadow-[0px_4px_74px_0px_#0000001A] py-4 px-3 sm:py-6 sm:px-5">
                <div className="flex items-center gap-2 mb-3 sm:gap-2.5 sm:mb-4">
                  <span className="flex items-center justify-center rounded-[0.5rem] h-[2rem] w-[2rem] sm:h-[2.125rem] sm:w-[2.125rem] bg-[#FFD688]">
                    <img
                      src={terms_list}
                      alt=""
                      className="max-h-full max-w-full"
                    />
                  </span>
                  <h6 className="text-[#4A282F] font-bold text-sm sm:text-[1rem] leading-none">
                    {t("table_of_contents")}
                  </h6>
                </div>
                <ol className="flex flex-col gap-2 sm:gap-3 list-decimal text-xs sm:text-sm font-medium list-inside">
                  <li className="font-bold text-[#32191E] cursor-pointer">
                    OUR SERVICES
                  </li>
                  <li className="text-[#4A282F] cursor-pointer">
                    INTELLECTUAL PROPERTY
                  </li>
                  <li className="text-[#4A282F] cursor-pointer">
                    USER REPRESENTATIONS
                  </li>
                  <li className="text-[#4A282F] cursor-pointer">
                    USER REGISTRATION
                  </li>
                  <li className="text-[#4A282F] cursor-pointer">PRODUCTS</li>
                  <li className="text-[#4A282F] cursor-pointer">
                    PURCHASES AND PAYMENT
                  </li>
                  <li className="text-[#4A282F] cursor-pointer">
                    REFUNDS POLICY
                  </li>
                  <li className="text-[#4A282F] cursor-pointer">SOFTWARE</li>
                  <li className="text-[#4A282F] cursor-pointer">
                    PROHIBITED ACTIVITIES
                  </li>
                  <li className="text-[#4A282F] cursor-pointer">
                    USER GENERATED CONTRIBUTIONS
                  </li>
                  <li className="text-[#4A282F] cursor-pointer">
                    CONTRIBUTION LICENCE
                  </li>
                  <li className="text-[#4A282F] cursor-pointer">
                    GUIDELINES FOR REVIEWS
                  </li>
                  <li className="text-[#4A282F] cursor-pointer">
                    MOBILE APPLICATION LICENCE
                  </li>
                </ol>
              </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 w-full">
              <div className="relative bg-white rounded-[1.25rem] shadow-[0px_4px_74px_0px_#0000000A] py-4 px-3 sm:py-6 sm:px-5">
                <h2 className="text-sm sm:text-base font-bold text-[#4A282F] mb-3 sm:mb-4">
                  AGREEMENT TO OUR LEGAL TERMS
                </h2>
                <div className="text-[#4A282F] text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">
                  <p>
                    We are Luminary Mindset PTY LTD, doing business as
                    PEEQ® ('Company', 'we', 'us', or 'our'), a company
                    registered in Australia at Level 8, 171 Clarence Street,
                    Sydney , New South Wales 2000.
                  </p>
                  <p>
                    We operate the website https://www.peeq.com.au (the 'Site'),
                    the mobile application PEEQ® (the 'App'), as well as any
                    other related products and services that refer or link to
                    these legal terms (the 'Legal Terms') (collectively,
                    the 'Services').
                  </p>
                  <p>
                    You can contact us by email at support@peeq.com.au, or by
                    mail to Level 8, 171 Clarence Street, Sydney , New South
                    Wales 2000, Australia.
                  </p>
                  <p>
                    These Legal Terms constitute a legally binding agreement
                    made between you, whether personally or on behalf of an
                    entity ('you'), and Luminary Mindset PTY LTD, concerning
                    your access to and use of the Services. You agree that by
                    accessing the Services, you have read, understood, and
                    agreed to be bound by all of these Legal Terms. IF YOU DO
                    NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
                    EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
                    DISCONTINUE USE IMMEDIATELY.
                  </p>
                  <p>
                    We will provide you with prior notice of any scheduled
                    changes to the Services you are using. The modified Legal
                    Terms will become effective upon posting or notifying you
                    by notifications@peeq.com.au, as stated in the email
                    message. By continuing to use the Services after the
                    effective date of any changes, you agree to be bound by the
                    modified terms.
                  </p>
                  <p>
                    The Services are intended for users who are at least 18
                    years old. Persons under the age of 18 are not permitted to
                    use or register for the Services.
                  </p>
                  <p>
                    <strong>
                      We recommend that you print a copy of these Legal Terms
                      for your records.
                    </strong>
                  </p>
                </div>

                <h2 className="text-sm sm:text-base font-bold text-[#4A282F]">
                  Your use of our Services
                </h2>
                <div className="text-[#4A282F] text-sm sm:text-base leading-relaxed">
                  <p>
                    Subject to your compliance with these Legal Terms, including
                    the 'PROHIBITED ACTIVITIES' section below, we grant you a
                    non-exclusive, non-transferable, revocable licence to:
                  </p>
                  <ul className="list-disc list-inside ml-3">
                    <li>access the Services; and</li>
                    <li>
                      download or print a copy of any portion of the Content to
                      which you have properly gained access.
                    </li>
                  </ul>
                  <p>
                    solely for your personal, non-commercial use or internal
                    business purpose.
                  </p>
                  <p>
                    Except as set out in this section or elsewhere in our Legal
                    Terms, no part of the Services and no Content or Marks may
                    be copied, reproduced, aggregated, republished, uploaded,
                    posted, publicly displayed, encoded, translated,
                    transmitted, distributed, sold, licensed, or otherwise
                    exploited for any commercial purpose whatsoever, without our
                    express prior written permission.
                  </p>
                  <p>
                    If you wish to make any use of the Services, Content, or
                    Marks other than as set out in this section or elsewhere in
                    our Legal Terms, please address your request
                    to: support@peeq.com.au. If we ever grant you the permission
                    to post, reproduce, or publicly display any part of our
                    Services or Content, you must identify us as the owners or
                    licensors of the Services, Content, or Marks and ensure that
                    any copyright or proprietary notice appears or is visible on
                    posting, reproducing, or displaying our Content.
                  </p>
                  <p>
                    We reserve all rights not expressly granted to you in and to
                    the Services, Content, and Marks.
                  </p>
                  <p>
                    Any breach of these Intellectual Property Rights will
                    constitute a material breach of our Legal Terms and your
                    right to use our Services will terminate immediately.
                  </p>
                  <p>Your submissions and contributions</p>
                  <p>
                    Please review this section and the 'PROHIBITED
                    ACTIVITIES' section carefully prior to using our Services to
                    understand the (a) rights you give us and (b) obligations
                    you have when you post or upload any content through the
                    Services.
                  </p>
                  <p>
                    Submissions: Bthe right to remove or edit any Contributions
                    at any time without notice if in our reasonable opinion we
                    consider such Contributions harmful or in breach of these
                    Legal Terms. If we remove or edit any such Contributions, we
                    may also suspend or disable your account and report you to
                    the authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tearms End */}
      {/* footer start */}
      <footer className="footer-sec pt-8 md:pt-13 pb-8 md:pb-10.5 relative px-2">
        <img
          className="footer-shape absolute ltr:-right-4 rtl:-left-4 ltr:md:-right-[2rem] rtl:md:-left-[2rem] -top-10 md:-top-[5rem] z-3 w-32 md:w-auto rtl:[transform:rotateY(180deg)]"
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
            <div className="store flex items-center gap-3 md:gap-4 mt-4 md:mt-0 ltr:mr-[5rem] rtl:ml-[5rem]">
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

export default TermsOfUse;
