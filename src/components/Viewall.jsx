import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Viewall = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [trailer, setTrailer] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const getSearchResults = async () => {
    const movieData = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=${searchQuery}&page=${page}`
    );
    if (page === 1) {
      setMovie(movieData.data.results);
    } else {
      setMovie((prev) => [...prev, ...movieData.data.results]);
    }
  };

  const getdata = async () => {
    const movieData = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`
    );

    if (page === 1) {
      setMovie(movieData.data.results);
    } else {
      setMovie((prev) => [...prev, ...movieData.data.results]);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search");
    setSearchQuery(query);
  }, [location.search]);

  useEffect(() => {
    if (searchQuery) {
      getSearchResults();
    } else {
      getdata();
    }
  }, [page, searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        movie.length > 0
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [movie]);

  const getTrailer = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=04c35731a5ee918f014970082a0088b1`
    );
    const json = await data.json();
    setTrailer(json.results[0]?.key);
  };

  return (
    <div className="h-fit w-full flex flex-row flex-wrap gap-2 bg-gray-900 justify-center pt-4 px-10">
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
      {movie.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => getTrailer(item.id)}
            className="h-90 w-60 bg-cyan-600 rounded-2xl border flex flex-col justify-end relative"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              className="w-full h-full object-cover rounded-2xl"
            />
            <h3 className=" w-full text-xl font-bold absolute bottom-0 left-0 px-2 text-white bg-[rgba(0,0,0,0.5)]">
              {item.title}
            </h3>
            {/* <p className="text-md py-2">{item.overview}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Viewall;