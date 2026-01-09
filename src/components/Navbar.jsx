import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchmoves, setSearchmoves] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  return (
    <nav className="width-full flex justify-between items-center py-2 px-6 ">
      <h2 className="text-3xl font-bold">Movies-Streming</h2>
      <div className="flex gap-4 text-lg items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/viewall?search=${searchmoves}`);
            setSearchmoves("");
            inputRef.current.blur();
          }}
        >
          <input
            ref={inputRef}
            type="text"
            className="p-2 border bg-gray-800 w-full rounded-3xl text-white"
            placeholder="Search Movies"
            value={searchmoves}
            onChange={(e) => {
              setSearchmoves(e.target.value);
            }}
          />
        </form>
        <i className="ri-notification-3-line text-white   font-bold"></i>
        <div className="bg-emerald-400 text-xl font-semibold px-2 py-1 rounded-3xl">
          N
        </div>
      </div>
    </nav>
  );
};

export default Navbar;