import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div onClick={toggleLanguage}>
      <span>{i18n.language.toUpperCase()}</span>
    </div>
  );

  // return (
  //   <div
  //     className="bg-[#FFEEE11A] cursor-pointer rounded-2xl px-3 sm:px-4 md:px-[1.938rem] py-2 sm:py-4 border border-[#FFEEE1] border-opacity-[0.34] h-full flex items-center"
  //     onClick={toggleLanguage}
  //   >
  //     <span className=" text-sm sm:text-base font-normal text-[#FFEAC2] leading-none">
  //       <span>{i18n.language.toUpperCase()}</span>
  //     </span>
  //   </div>
  // );
}
