import { useTranslation } from "react-i18next";

const ToggleLanguage = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <button className="text-lg w-8 text-blue-700 dark:text-slate-50" onClick={() => changeLanguage(i18n.language === "en" ? "fr" : "en")}>
      {i18n.language === "en" ? "FR" : "EN"}
    </button>
  );
};

export default ToggleLanguage;