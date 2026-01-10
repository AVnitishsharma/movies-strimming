import axios from "axios"
import { useState, useEffect } from "react"
const Home = () => {

  const [movie, setMovie] = useState([])
  const [topMovie, settopMovie] = useState('')
  const [trailer, setTrailer] = useState(null)
  const [favorites, setFavorites] = useState([])


  const getdata = async () => {
    const movieData = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1")

    setMovie(movieData.data.results.slice(0, 8))

    settopMovie(movieData.data.results[6])
  }

  const getTrailer = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=04c35731a5ee918f014970082a0088b1`
    );
    const json = await data.json();
    setTrailer(json.results[0]?.key);
    addToRecents(movie);
  }

  const addToFavorites = (movie) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setFavorites(favorites);
    }
  };

  const addToRecents = (movie) => {
    let recents = JSON.parse(localStorage.getItem("recents")) || [];
    recents = recents.filter((recent) => recent.id !== movie.id);
    recents.unshift(movie);
    if (recents.length > 20) {
      recents.pop();
    }
    localStorage.setItem("recents", JSON.stringify(recents));
  };

  useEffect(() => {
    getdata()
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || [])
  }, [])
  

  return (
    <div className="w-[82vw] h-full flex flex-col px-6 gap-2">
      <div className=" h-[50vh] bg-red-400 rounded-2xl border flex flex-col justify-end relative">
        <img 
          className="w-full h-full object-cover rounded-2xl object-bottom "
          src="https://i.pinimg.com/1200x/81/75/70/8175708014aedbf46c1af4b07e7c7273.jpg"
          alt="" 
        />
        <h3 className="text-4xl font-semibold absolute  bottom-40 left-3 px-2 text-white">{topMovie.title}</h3>
        <p className="w-1/2 text-sm py-2 absolute bottom-13 left-3 px-2 text-white">{topMovie.overview}</p>
        <button 
          onClick={() => getTrailer(topMovie)}
          className="w-1/6 bg-cyan-600 px-2 py-1 rounded-3xl font-semibold absolute bottom-5 left-5 hover:scale-105  transition-all duration-300">
            <i className="ri-play-fill"></i>
            Watch Now
        </button>
        <i class="ri-download-2-line absolute bottom-5 left-1/5 px-2 py-1 bg-cyan-600 rounded-full"></i>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Popular Movies</h2>
        <button 
          className="underline py-0.5 px-1 mr-2 font-semibold" 
          onClick={()=> window.location.href = '/viewall'}
        >view all</button>
      </div>
      <div className="h-[35vh] flex flex-row items-center gap-2 pl-2 overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {
          movie.map((item, index) => {
            return (
              <div 
                key={index} 
                onClick={() => getTrailer(item)}
                className="group w-50 h-60 bg-cyan-600 rounded-2xl border flex flex-col justify-end shrink-0 relative hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-cyan-300 transition-transform duration-300">
                <img 
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  className="w-full h-full object-cover rounded-2xl hover:blur-xs transition-all duration-300"
                />
                <h3 className="text-2xl font-bold absolute bottom-0 left-0 px-2 text-white">{item.title}</h3>
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold border-2 rounded-2xl px-1.5 hidden group-hover:block">
                  <i className="ri-play-fill"></i> Watch
                </button>
                <i 
                  className={`ri-heart-3-line absolute top-1 right-1 text-2xl px-1.5 hidden group-hover:block ${favorites.some((fav) => fav.id === item.id) ? "text-red-600" : "hover:text-red-600"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToFavorites(item);
                  }}
                ></i>
              </div>
            )
          })
        }
      </div>
      {trailer && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-50">
          <div className="relative w-[80%] h-[80%] bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setTrailer(null)}
              className="absolute top-5 right-5 text-white text-3xl font-bold z-10 cursor-pointer"
            >
              <i className="ri-close-fill"></i>
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )} 
    </div>
  )
}

export default Home