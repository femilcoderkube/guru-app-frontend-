import React, { useMemo, useState, useRef, useEffect } from "react";
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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { getCall, postCall } from "../utils/api";
import Select from "react-select";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  Box,
  DialogActions,
  Modal,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormikContext } from "formik";
const Join = () => {
  // Responsive nav state for mobile menu
  const [navOpen, setNavOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [preview, setPreview] = useState(null);
  const [mealsCategory, setMealsCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [pendingValues, setPendingValues] = useState(null);
  // const { setFieldValue, values } = useFormikContext();
  const arabicRegex =
    /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u0660-\u0669 0-9\s\-،؛؟.!ـ]+$/;

  const validationSchema = Yup.object().shape({
    profile_photo: Yup.mixed().required(t("restaurant_logo_required")),
    restaurant_name: Yup.string().required(
      t("restaurant_name_english_is_required")
    ),
    restaurant_name_ar: Yup.string()
      .required(t("restaurant_name_arbic_is_required"))
      .test(
        "not-only-spaces",
        t("restaurant_name_arbic_is_required"),
        (value) => !!value && value.trim().length > 0
      )
      .matches(arabicRegex, t("restaurant_name_arbic_required_allowed")),
    phone_number: Yup.string()
      .required(t("contact_number_is_required"))
      .matches(/^\+[0-9]+$/, t("only_numbers_allowed"))
      .min(6, t("contact_number_min"))
      .max(15, t("contact_number_max")),
    cuisines: Yup.array()
      .required(t("cuisines_is_required"))
      .min(1, t("cuisines_is_required")),
    email: Yup.string()
      .email(t("invalid_email"))
      .required(t("email_is_required")),
    website_link: Yup.string()
      .url(t("invalid_url"))
      .required(t("Website_link_is_required")),
    location_url: Yup.string()
      .url(t("invalid_url"))
      .required(t("location_is_required")),
    terms: Yup.boolean().oneOf([true], t("must_accept_terms")),
  });

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      minHeight: "40px",
      fontSize: "0.98rem",
      backgroundColor: "#F6F8FA",
      borderRadius: "12px",
      borderColor: state.isFocused ? "#FC9924" : "#DFE1E7",
      boxShadow: state.isFocused ? "0 0 0 2px #FC9924" : "none",
      // paddingLeft: "0.75rem",
      // paddingRight: "2.5rem",
      // paddingTop: "0.57rem",
      // paddingBottom: "0.57rem",
      color: "#0D0D12",
      transition: "all 0.2s ease-in-out",
      appearance: "none",
      "&:hover": { borderColor: "#DFE1E7" },
    }),
    menu: (provided) => ({
      ...provided,
      fontSize: "0.98rem",
      backgroundColor: "#F6F8FA",
      borderRadius: "12px",
      marginTop: "4px",
      zIndex: 9999,
    }),
  };

  useEffect(() => {
    const fetchMealCategories = async () => {
      try {
        const response = await getCall(
          `/meal-category/getAllMealCategoriesForRestaurant`
        );
        const data = response?.data?.map((res) => ({
          value: res?._id,
          // label: res?.name,
          label: i18n.language === "ar" ? res?.name_ar || res?.name : res?.name,
        }));
        setMealsCategory(Array.isArray(response?.data) ? data : []);
      } catch (error) {
        console.error("Error fetching meal categories:", error);
        setMealsCategory([]);
      }
    };
    fetchMealCategories();
  }, [t, i18n.language]);

  const handleSubmit = async () => {
    if (!pendingValues) return;
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("restaurant_name", pendingValues.restaurant_name);
      formDataToSend.append(
        "restaurant_name_ar",
        pendingValues.restaurant_name_ar
      );
      formDataToSend.append("phone_number", pendingValues.phone_number);
      formDataToSend.append("cuisines", JSON.stringify(pendingValues.cuisines));
      formDataToSend.append("email", pendingValues.email);
      formDataToSend.append("website_link", pendingValues.website_link);
      formDataToSend.append("location_url", pendingValues.location_url);
      if (pendingValues.profile_photo)
        formDataToSend.append("profile_photo", pendingValues.profile_photo);

      await postCall(
        "/restaurant-user/createRestaurantUser",
        formDataToSend,
        true
      );
      setDialogOpen(false);
      navigate("/thankyou");
    } catch (error) {
      setDialogOpen(false);
      console.error("something went wrong", error);
    } finally {
      setIsLoading(false);
    }
  };

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
          <button
            className="flex items-center text-[#0D0D12] bg-[#FFFFFF] border border-[#DFE1E7] outline-none cursor-pointer rounded-[0.875rem] px-4 py-2 text-sm md:text-base"
            onClick={() => navigate("/")}
          >
            {t("back")}
          </button>
          <span className="text-[#32191E] font-bold text-base">
            {t("join_as_a_restaurant")}
          </span>
        </motion.div>
      </div>
      {/* inner-banner End */}

      <div className="faq-sec-wp relative contact-wp flex justify-center items-center py-6 md:py-[2.563rem] bg-[#F8FAFB] px-2">
        <div className="w-full max-w-[76.5rem] mx-auto bg-white rounded-2xl shadow-[0_4px_74px_0_#0000001A] px-2 sm:px-4 md:px-8 py-10 md:pt-15 lg:pb-[7.19rem] md:pb-[4rem]">
          <motion.div
            className="text-center mb-6 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-[#32191E]">
              {t("join_as_a_restaurant")}
            </h2>
            <p className="text-base md:text-lg text-[#32191E]">
              {t("welcome_to")}{" "}
              <span className="text-[#FF700A] font-bold"> {t("guru1")}</span>{" "}
              {t("platform")}
            </p>
          </motion.div>

          <Formik
            initialValues={{
              profile_photo: null,
              restaurant_name: "",
              restaurant_name_ar: "",
              phone_number: "",
              cuisines: [],
              email: "",
              website_link: "",
              location_url: "",
              terms: false,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setIsLoading(true);
              try {
                const formData = new FormData();
                formData.append("restaurant_name", values.restaurant_name);
                formData.append(
                  "restaurant_name_ar",
                  values.restaurant_name_ar
                );
                formData.append("phone_number", values.phone_number);
                formData.append("cuisines", JSON.stringify(values.cuisines));
                formData.append("email", values.email);
                formData.append("website_link", values.website_link);
                formData.append("location_url", values.location_url);
                if (values.profile_photo)
                  formData.append("profile_photo", values.profile_photo);

                await postCall(
                  "/restaurant-user/createRestaurantUser",
                  formData,
                  true
                );
                navigate("/thankyou");
              } catch (err) {
                console.log("error", err);
              } finally {
                setIsLoading(false);
                setSubmitting(false);
              }
            }}
          >
            {({ values, handleChange, setFieldValue, setFieldTouched }) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Form className="space-y-6 md:space-y-8 max-w-full md:max-w-[46.438rem] mx-auto">
                  <label className="w-full h-[10rem] md:h-[15.313rem] border border-[#DFE1E7] px-3 py-2 md:py-[0.57rem] bg-[#F6F8FA] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl flex flex-col items-center justify-center cursor-pointer relative">
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      name="profile_photo"
                      onChange={(e) => {
                        const file = e.currentTarget.files[0];
                        setFieldValue("profile_photo", file);
                        if (file) {
                          const objectUrl = URL.createObjectURL(file);
                          setPreview(objectUrl);
                        } else {
                          setPreview(null);
                        }
                      }}
                    />
                    {!preview ? (
                      <>
                        <img className="mb-4" src={upload} alt="" />
                        <p className="text-[#666D80] text-base">
                          {t("Upload_your_restaurant_logo")}
                        </p>
                      </>
                    ) : (
                      <img
                        src={preview}
                        alt="Logo Preview"
                        className="w-40 h-40 object-contain rounded-md"
                      />
                    )}
                  </label>
                  <ErrorMessage
                    name="profile_photo"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 md:gap-y-8">
                    <div>
                      <label
                        className="block text-[#0D0D12] text-base mb-1"
                        htmlFor="first-name"
                      >
                        {t("Restaurant_Name_English")}
                      </label>
                      <Field
                        name="restaurant_name"
                        type="text"
                        className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                        placeholder={t("Type_restaurant_name")}
                      />
                      <ErrorMessage
                        name="restaurant_name"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[#0D0D12] text-base mb-1"
                        htmlFor="restaurant_name_ar"
                      >
                        {t("Restaurant_Name_Arabic")}
                      </label>
                      <Field
                        name="restaurant_name_ar"
                        type="text"
                        className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                        placeholder={t("Type_restaurant_name")}
                      />
                      <ErrorMessage
                        name="restaurant_name_ar"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div
                      className=""
                      dir={currentLang === "ar" ? "rtl" : "ltr"}
                    >
                      <label
                        className="block text-[#0D0D12] text-base mb-1"
                        htmlFor="Contact Number"
                      >
                        {t("contact_number")}
                      </label>
                      {/* <Field
                        name="phone_number"
                        type="tel"
                        className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                        placeholder={t("Type_contact_number")}
                      /> */}
                      <div
                        style={{
                          position: "relative",
                          direction: "ltr", // Force ltr for PhoneInput wrapper so flag stays inside
                        }}
                      >
                        <PhoneInput
                          country={"sa"} // default
                          value={values.phone_number}
                          onChange={(value, country) => {
                            // value includes country code (e.g. "919876543210")
                            const formatted = value.startsWith("+")
                              ? value
                              : `+${value}`;
                            setFieldValue("phone_number", formatted);
                            setFieldValue(
                              "country_code",
                              `+${country.dialCode}`
                            );
                          }}
                          inputClass="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                          placeholder={t("Type_contact_number")}
                          enableAreaCodes={false}
                          disableCountryCode={false}
                          countryCodeEditable={true}
                          autoFormat={false}
                          inputStyle={{
                            width: "100%",
                            height: "43px",
                            fontSize: "0.85rem",
                            borderRadius: "10px",
                            backgroundColor: "#F6F8FA",
                            border: "1px solid #919eab33",
                            textAlign: currentLang === "ar" ? "right" : "left", // Align numbers properly
                            paddingRight:
                              currentLang === "ar" ? "50px" : "12px", // Keep flag inside on RTL
                            paddingLeft: currentLang === "en" ? "50px" : "12px", // Keep flag inside on LTR
                          }}
                          buttonStyle={{
                            background: "transparent",
                            // border: "none",
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            [currentLang === "ar" ? "right" : "left"]: 0, // Flag sticks inside correctly
                          }}
                        />
                      </div>
                      <ErrorMessage
                        name="phone_number"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="relative">
                      <label
                        className="block text-[#0D0D12] text-base mb-1"
                        htmlFor="cuisines"
                      >
                        {t("cuisines")}
                      </label>
                      <div className="relative">
                        <Select
                          isMulti
                          // className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl appearance-none pr-10 text-sm md:text-base"
                          options={mealsCategory}
                          onChange={(options) => {
                            const valuesArr = options
                              ? options.map((o) => o.value)
                              : [];
                            setFieldValue("cuisines", valuesArr);
                            setFieldTouched("cuisines", true, false);
                          }}
                          onBlur={() => setFieldTouched("cuisines", true, true)}
                          value={mealsCategory.filter((o) =>
                            values.cuisines.includes(o.value)
                          )}
                          placeholder={t("select")}
                          styles={customStyles}
                        />
                        <ErrorMessage
                          name="cuisines"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                        {/* Custom arrow */}
                        {/* <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#32191E]">
                          <img src={select_icon} alt="" className="w-4 h-4" />
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-[#0D0D12] text-base mb-1"
                      htmlFor="email"
                    >
                      {t("E-mail")}
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                      placeholder={t("Add_the_E-mail_here")}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0D0D12] text-base mb-1">
                      {t("Website_link")}
                    </label>
                    <Field
                      type="url"
                      name="website_link"
                      placeholder={t("Add_the_URL_here")}
                      className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                    />
                    <ErrorMessage
                      name="website_link"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0D0D12] text-base mb-1">
                      {t("location")}
                    </label>
                    <Field
                      type="url"
                      name="location_url"
                      placeholder={t("Add_Google_map_URL_here")}
                      className="w-full border border-[#DFE1E7] bg-[#F6F8FA] px-3 py-2 md:py-[0.57rem] text-[#0D0D12] focus:outline-none focus:ring-2 focus:ring-[#FC9924] transition rounded-xl text-sm md:text-base"
                    />
                    <ErrorMessage
                      name="location_url"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="flex items-center cursor-pointer">
                      {/* Hidden default checkbox */}
                      <Field name="terms">
                        {({ field, form }) => (
                          <input
                            type="checkbox"
                            {...field}
                            checked={field.value}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setDialogOpen(true);
                              } else {
                                form.setFieldValue("terms", false);
                              }
                            }}
                            className="hidden"
                          />
                        )}
                      </Field>

                      {/* ✅ Custom checkbox design */}
                      <Field name="terms">
                        {({ field }) => (
                          <span
                            className={`w-6 h-5 flex items-center justify-center border 
            ${
              field.value
                ? "bg-green-500 border-green-500"
                : "bg-[#F6F8FA] border-[#DFE1E7]"
            }
            transition-all duration-200 rounded  relative -mt-3 
          `}
                          >
                            {field.value && (
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </span>
                        )}
                      </Field>

                      {/* Text next to checkbox */}
                      <span className="ml-2 text-[#0D0D12] text-base leading-5">
                        {t("join_label")}
                      </span>
                    </label>
                  </div>

                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="text-red-500 text-sm "
                  />
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="text-base bg-[#FF700A] hover:bg-[#e88a1e] text-white font-bold w-full h-[3rem] rounded-2xl transition duration-200 cursor-pointer flex items-center justify-center"
                    >
                      {isLoading ? t("submitting") : t("submit")}
                    </button>
                  </div>
                </Form>
                <Dialog
                  open={dialogOpen}
                  onClose={() => setDialogOpen(false)}
                  maxWidth="sm"
                  fullWidth
                  PaperProps={{
                    sx: {
                      borderRadius: 5,
                      p: 3,
                      width: "100%",
                      height: "auto",
                      maxWidth: "59.25rem",
                    },
                  }}
                >
                  <DialogTitle
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#FF700A",
                      pb: 5,
                      fontSize: "1.5rem",
                      "@media (max-width:767px)": {
                        fontSize: "1rem",
                        padding: "1rem",
                      },
                    }}
                  >
                    {t("dialog_label")}
                  </DialogTitle>

                  <DialogContent>
                    <Box display="flex" flexDirection="column" gap={2.5}>
                      <Typography variant="body2">
                        {t("dialog_label1")}
                      </Typography>
                      <Typography variant="body2">
                        {t("dialog_label2")}
                      </Typography>
                      <Typography variant="body2">
                        {t("dialog_label3")}
                      </Typography>
                      <Typography variant="body2">
                        {t("dialog_label4")}
                      </Typography>
                      <Typography variant="body2" sx={{ pb: 3 }}>
                        {t("dialog_label5")}
                      </Typography>
                    </Box>
                  </DialogContent>

                  <DialogActions sx={{ px: 3, pb: 1, pt: 3 }}>
                    <Button
                      fullWidth
                      onClick={() => {
                        setDialogOpen(false);
                        setTermsAccepted(true);
                        setFieldValue("terms", true);
                      }}
                      sx={{
                        fontSize: "1rem",
                        backgroundColor: "#FF700A",
                        color: "white",
                        fontWeight: "bold",
                        height: "3rem",
                        borderRadius: "1rem",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": { backgroundColor: "#e88a1e" },
                      }}
                    >
                      {t("i_agree")}
                    </Button>
                  </DialogActions>
                </Dialog>
              </motion.div>
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

export default Join;
