import { useTranslation } from "react-i18next"

const ToggleLanguage = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <button className="ml-auto text-lg text-blue-700 dark:text-slate-50" onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}>
      {t('language')}
    </button>
  )
}

export default ToggleLanguage;