import ToggleLanguage from "./ToggleLanguage"
import ToggleTheme from "./ToggleTheme"

const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-center w-full">
      <h1 className="ml-8 text-xl text-blue-700 dark:text-slate-50">Planning Poker AI</h1>
      <ToggleLanguage/>
      <ToggleTheme/>
    </div>
  )
}

export default Navbar