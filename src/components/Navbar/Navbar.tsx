import SearchResults from "./SearchResults";
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="h-28 sm:h-16 flex flex-wrap justify-between items-center">
      <h1 className="ml-8 text-xl text-blue-700 dark:text-slate-50 cursor-pointer" onClick={() => navigate("/")}>Planning Poker AI</h1>
      <div className="sm:hidden flex items-center md:w-auto ml-8">
        <ToggleLanguage/>
        <ToggleTheme/>
      </div>
      <div className="flex items-center w-full sm:justify-center sm:w-auto ml-8">
        <SearchResults/>
        <div className="md:flex hidden items-center md:w-auto ml-8">
          <ToggleLanguage/>
          <ToggleTheme/>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;