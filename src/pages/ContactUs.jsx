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
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Header from "./Header";
import {
  leftToRight,
  rightToLeft,
  cardVariantsAni,
} from "../Componets/animation.jsx";
import { motion } from "motion/react";
import countryList from "react-select-country-list";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postCall } from "../utils/api";
import toast from "react-hot-toast";
import axios from "axios";

const ContactUs = () => {
  // Responsive nav state for mobile menu
  const [navOpen, setNavOpen] = React.useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const options = useMemo(() => countryList().getData(), []); // all countries
  const [country, setCountry] = useState("");

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required(`${t("first_name")} ${t("is_required")}`),
    last_name: Yup.string().required(`${t("last_name")} ${t("is_required")}`),
    company: Yup.string().required(`${t("company_name")} ${t("is_required")}`),
    country: Yup.string().required(`${t("country")} ${t("is_required")}`),
    email: Yup.string()
      .email(t("invalid_email"))
      .required(`${t("emaill")} ${t("is_required")}`),
    message: Yup.string().required(`${t("message")} ${t("is_required")}`),
  });
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const payload = {
        first_name: values.first_name,
        last_name: values.last_name,
        company: values.company,
        country: values.country,
        email: values.email,
        message: values.message,
      };
      console.log("Payload:", payload);
      await postCall("/contact-us/createContact", payload, true);
      resetForm();
    } catch (error) {
      console.error("Error submitting contact form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // const handleSubmit = async (values, { resetForm }) => {
  //   try {
  //     const response = await axios.post("https://yourapi.com/contact", values, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (response) {
  //       toast.success(t("form submitted successfully"));
  //       resetForm();
  //     } else {
  //       toast.error(t("something went wrong"));
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error(t("something went wrong"));
  //   }
  // };

  return (
    <>
      <Header />

      {/* inner-banner start */}
      <div className="w-full flex justify-center bg-[#FFEAC2] mt-[5.875rem] md:mt-[6.375rem] py-3 md:py-[1.375rem] px-2">
        <div
          className="flex items-center gap-2 sm:gap-4 w-full max-w-[76.5rem] mx-auto"
          initial="hidden"
          animate="visible"
          variants={leftToRight}
        >
          <button className="flex items-center text-[#0D0D12] bg-[#FFFFFF] border border-[#DFE1E7] outline-none cursor-pointer rounded-[0.875rem] px-4 py-2 text-sm md:text-base">
            {t("back")}
          </button>
          <span
            className="text-[#32191E] font-bold text-base"
            variants={leftToRight}
            custom={2}
          >
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
          {/* ✅ Formik form */}
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              company: "",
              country: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form className="space-y-6 md:space-y-8 max-w-full md:max-w-[46.438rem] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 md:gap-y-8">
                  {/* First Name */}
                  <div>
                    <label
                      className="block text-[#0D0D12] text-base mb-1"
                      htmlFor="first_name"
                    >
                      {t("first_name")}
                    </label>
                    <Field
                      name="first_name"
                      type="text"
                      className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                      placeholder={t("type_first_name")}
                    />
                    <ErrorMessage
                      name="first_name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label
                      className="block text-[#0D0D12] text-base mb-1"
                      htmlFor="last_name"
                    >
                      {t("last_name")}
                    </label>
                    <Field
                      name="last_name"
                      type="text"
                      className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                      placeholder={t("type_last_name")}
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* Company */}
                  <div>
                    <label
                      className="block text-[#0D0D12] text-base mb-1"
                      htmlFor="company"
                    >
                      {t("company")}
                    </label>
                    <Field
                      name="company"
                      type="text"
                      className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                      placeholder={t("type_company_name")}
                    />
                    <ErrorMessage
                      name="company"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* Country */}
                  <div className="relative">
                    <label
                      className="block text-[#0D0D12] text-base mb-1"
                      htmlFor="Country"
                    >
                      {t("country")}
                    </label>
                    <div className="relative">
                      <Field
                        as="select"
                        name="country"
                        // value={country}
                        // onChange={(e) => setCountry(e.target.value)}
                        className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl appearance-none pr-10 text-sm md:text-base"
                        aria-describedby="country-error"
                      >
                        <option value="" disabled>
                          {t("select")}
                        </option>
                        {options.map((c) => (
                          <option key={c.value} value={c.label}>
                            {c.label}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                      <span className="pointer-events-none absolute ltr:right-3 rtl:left-3 top-1/2 transform -translate-y-1/2 text-[#32191E]">
                        <img
                          src={select_icon}
                          alt="Dropdown arrow"
                          className="w-4 h-4"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/* Email */}
                {/* Email */}
                <div>
                  <label
                    className="block text-[#0D0D12] text-base mb-1"
                    htmlFor="email"
                  >
                    {t("email")}
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                    placeholder={t("enter_email")}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-[#0D0D12] text-base mb-1"
                    htmlFor="how-can-we-help"
                  >
                    {t("how_can_we_help")}
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows={4}
                    className="w-full bg-[#F6F8FA] border border-[#DFE1E7] px-3 py-3 md:py-4.5 text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl resize-none text-sm md:text-base"
                    placeholder={t("type_here")}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="text-base bg-[#FF700A] hover:bg-[#e88a1e] text-white font-bold w-full md:w-[12.813rem] h-[3rem] rounded-2xl transition duration-200 cursor-pointer flex items-center justify-center"
                  >
                    {t("submit")}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
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

export default ContactUs;
