import Home from "./components/Home";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Viewall from "./components/Viewall";

const App = () => {
  const location = useLocation();
  const isViewAllPage = location.pathname === "/viewall";

  return (
    <div className=" w-screen h-screen bg-gray-900 text-white">
      <Navbar />
      <div className={isViewAllPage ? "w-full flex " : "w-full flex justify-between"}>
      {!isViewAllPage && <Leftbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewall" element={<Viewall />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;