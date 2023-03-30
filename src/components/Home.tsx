import { useTranslation } from "react-i18next"
import Navbar from "./Navbar/Navbar"

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center">
      <a className="rounded-2xl text-xl mt-72 bg-blue-600 hover:bg-blue-500 text-slate-50"
       href="https://discord.gg/VqcXXKGZJf" target="_blank">
        <button className="flex items-center justify-between px-4 py-3 w-80">
          {t('home.join')}
          <div className="flex items-center justify-center rounded-full bg-white w-10 h-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 h-6 stroke-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </button>
      </a>

      <div className="pt-4 flex items-center">
        <a href="https://discord.com/api/oauth2/authorize?client_id=1085652481167609887&permissions=8&scope=bot%20applications.commands" target="_blank"
           className="text-xl underline text-slate-700 dark:text-slate-400 cursor-pointer">
           {t('home.add')}
        </a>
      </div>
    </div>
    </>
  )
}

export default Home
