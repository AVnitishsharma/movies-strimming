import axios from "axios"
import { useState } from "react"
const Home = () => {

  const [movie, setMovie] = useState([])
  const [topMovie, settopMovie] = useState('')
  const [trailer, setTrailer] = useState(null)


  const getdata = async () => {
    const movieData = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1")

    setMovie(movieData.data.results.slice(0, 8))

    settopMovie(movieData.data.results[6])
  }

  const getTrailer = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=04c35731a5ee918f014970082a0088b1`
    );
    const json = await data.json();
    setTrailer(json.results[0]?.key);

  }

  getdata()
  

  return (
    <div className="w-[82%] h-full flex flex-col px-6 gap-2">
      <div className=" h-[50vh] bg-red-400 rounded-2xl border flex flex-col justify-end relative">
        <img 
          className="w-full h-full object-cover rounded-2xl object-bottom "
          src="https://i.pinimg.com/1200x/81/75/70/8175708014aedbf46c1af4b07e7c7273.jpg"
          alt="" 
        />
        <h3 className="text-4xl font-semibold absolute  bottom-40 left-3 px-2 text-white">{topMovie.title}</h3>
        <p className="w-1/2 text-sm py-2 absolute bottom-13 left-3 px-2 text-white">{topMovie.overview}</p>
        <button 
          onClick={() => getTrailer(topMovie.id)}
          className="w-1/5 bg-cyan-600 px-2 py-1 rounded-3xl font-semibold absolute bottom-5 left-5 ">
            <i className="ri-play-fill"></i>
            Watch Now
        </button> 
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Popular Movies</h2>
        <button 
          className="underline py-0.5 px-1 mr-2 font-semibold" 
          onClick={()=> window.location.href = '/viewall'}
        >view all</button>
      </div>
      <div className="h-[35vh] flex flex-row gap-2 overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {
          movie.map((item, index) => {
            return (
              <div 
                key={index} 
                onClick={() => getTrailer(item.id)}
                className=" w-50 bg-cyan-600 rounded-2xl border flex flex-col justify-end shrink-0 relative">
                <img 
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <h3 className="text-2xl font-bold absolute bottom-0 left-0 px-2 text-white">{item.title}</h3>
                {/* <p className="text-md py-2">{item.overview}</p> */}
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