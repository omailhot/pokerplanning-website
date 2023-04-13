import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Results from "./components/Results/Results";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/:sessionId" element={<Results />} />
        <Route path="/:sessionId/:featureId" element={<Results />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    
  );
};

export default App;
