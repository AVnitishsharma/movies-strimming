import Home from "./components/Home";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Viewall from "./components/Viewall";
import Favorite from "./components/Favorite";
import Recent from "./components/Recent";

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
          <Route path="/favourites" element={<Favorite />} />
          <Route path="/recent" element={<Recent />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;