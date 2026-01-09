
const Leftbar = () => {
  return (
    <div className=" w-[50%]  bg-gray-800 flex flex-col px-4 py-2 ml-4 mt-0 mb-2 rounded-2xl border relative">
      <ul className="flex flex-col gap-4 py-2 text-2xl">
        <li>Home</li>
        <li>Explore</li>
        <li>Genres</li>
        <li>Favourites</li>
        <li className="border-b-2"></li>
        <li>Continue</li>
        <li>Watchlist</li>
        <li>My Collections</li>
        <li>Downloads</li>
        <li>History</li>
        <li className="border-b-2"></li>
        <li>Settings</li>
        <li>Help</li>

      </ul>
      <h3 className=" w-full absolute bottom-0 left-0 px-2 text-2xl border-t-2 py-2"><i className="ri-logout-box-r-line"></i> Log Out</h3>
    </div>
  )
}

export default Leftbar