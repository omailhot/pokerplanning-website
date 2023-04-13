import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const { t } = useTranslation();

  const [inputCode, setInputCode] = useState("");

  return (
    <div className="flex mr-8">
      <div className="relative">
        <input type="text" value={inputCode} placeholder={t("home.search") + ""} className="bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-50 
        rounded-md w-72 h-10 pl-4 pr-4 border-slate-600 border-solid border-2 dark:border-slate-500 focus:outline-none" onChange={e => setInputCode(e.target.value)}/>
        <Link to={`/${inputCode}`}>
          <button type="submit" onClick={() => {setInputCode("");}}
            className="absolute top-0 right-0 p-2.5 h-10 text-sm font-medium text-white bg-blue-700 rounded-r-md border border-blue-700 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">Search</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchResults;