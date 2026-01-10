import { useEffect, useState } from "react";

const Recent = () => {
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    const storedRecents = JSON.parse(localStorage.getItem("recents")) || [];
    setRecents(storedRecents);
  }, []);

  return (
    <div className="h-full w-full flex flex-wrap gap-4 bg-gray-900 p-6 overflow-y-auto">
      {recents.length > 0 ? (
        recents.map((item, index) => (
          <div key={index} className="w-50 h-60 bg-cyan-600 rounded-2xl border flex flex-col justify-end shrink-0 relative hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <img 
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              className="w-full h-full object-cover rounded-2xl"
              alt={item.title}
            />
            <h3 className="text-xl font-bold absolute bottom-0 left-0 px-2 text-white bg-black/50 w-full rounded-b-2xl">
              {item.title}
            </h3>
          </div>
        ))
      ) : (
        <h1 className="text-white text-2xl">No Recent Movies</h1>
      )}
    </div>
  )
}

export default Recent