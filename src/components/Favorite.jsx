import { useEffect, useState } from "react";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="h-full w-full flex flex-wrap gap-4 bg-gray-900 p-6 overflow-y-auto">
      {favorites.length > 0 ? (
        favorites.map((item, index) => (
          <div key={index} className="group w-50 h-60 bg-cyan-600 rounded-2xl border flex flex-col justify-end shrink-0 relative hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <img 
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              className="w-full h-full object-cover rounded-2xl"
              alt={item.title}
            />
            <h3 className="text-xl font-bold absolute bottom-0 left-0 px-2 text-white bg-black/50 w-full rounded-b-2xl">
              {item.title}
            </h3>
            <i 
              className="ri-delete-bin-line absolute top-2 right-2 text-2xl text-red-600 bg-white/80 rounded-full p-1 hidden group-hover:block hover:bg-white"
              onClick={() => removeFromFavorites(item.id)}
            ></i>
          </div>
        ))
      ) : (
        <h1 className="text-white text-2xl">No Favorites Added Yet</h1>
      )}
    </div>
  )
}

export default Favorite