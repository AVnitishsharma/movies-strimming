import { NavLink } from "react-router-dom"

const Leftbar = () => {
  return (
    <div className=" w-[20%] h-[90vh]  bg-gray-800 flex flex-col px-4 py-2 ml-4 mt-0 mb-2 rounded-2xl border relative">
      <ul className="flex flex-col gap-4 py-2 text-2xl ">
        <NavLink 
          to="/"
          className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" :" hover:text-amber-200 hover:font-semibold cursor-pointer"}>
          <i class="ri-home-5-line"></i> Home
        </NavLink>
        <NavLink 
          to="/viewall"
          className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" :" hover:text-amber-200 hover:font-semibold cursor-pointer"}>
          <i class="ri-compass-3-line"></i> Explore
        </NavLink>
        <NavLink
          to="/recent"
          className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" :" hover:text-amber-200 hover:font-semibold cursor-pointer"}>
          <i class="ri-history-line"></i> Recent
        </NavLink>
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" :" hover:text-amber-200 hover:font-semibold cursor-pointer"}>
          <i class="ri-heart-3-line"></i> Favourites
        </NavLink>
        <li className="border-b-2"></li>
        <NavLink
          to="/continue"
          className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" :" hover:text-amber-200 hover:font-semibold cursor-pointer"}>
          <i class="ri-play-circle-line"></i> Continue
        </NavLink>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" :" hover:text-amber-200 hover:font-semibold cursor-pointer"}>
          <i class="ri-play-list-2-fill"></i> Watchlist
        </NavLink>
        <NavLink
          to="/my-collections"
          className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" :" hover:text-amber-200 hover:font-semibold cursor-pointer"}>
          <i class="ri-folders-line"></i> My Collections
        </NavLink>
        <NavLink
          to="/downloads"
          className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" :" hover:text-amber-200 hover:font-semibold cursor-pointer"}>
          <i class="ri-download-2-line"></i> Downloads
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" :" hover:text-amber-200 hover:font-semibold cursor-pointer"}>
          <i class="ri-folder-history-line"></i> History
        </NavLink>
        <li className="border-b-2"></li>
        <li className=" hover:text-amber-200 hover:font-semibold cursor-pointer">
          <i class="ri-settings-3-line"></i> Settings 
        </li>
        <li className=" hover:text-amber-200 hover:font-semibold cursor-pointer">
          <i class="ri-customer-service-line"></i> Help
        </li>

      </ul>
      <h3 className=" w-full absolute bottom-0 left-0 px-2 text-2xl border-t-2 py-2">
        <i className="ri-logout-box-r-line"></i> Log Out
      </h3>
    </div>
  )
}

export default Leftbar