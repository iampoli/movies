import Nav from "./components/nav/Nav"
import Movie from "./components/movie/Movie"
import {useState,useEffect} from 'react';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

import './app.scss';


const API_KEY = "53fee10cd66a19977f421d0efa113883";
const POPULAR_MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`;
const SEARCH_MOVIES_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`
const IMG = `https://image.tmdb.org/t/p/w500`

function App() {
  const [value,setValue] = useState('');
  const [movies,setMovies] = useState([]);
  const [page,setPage] = useState(1);
  useEffect(()=>{
    document.querySelector(".dots").classList.add("hide");
    if(value){
      fetch( SEARCH_MOVIES_API + value  )
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        setMovies(data.results);
      })
    }
    else{
    document.querySelector(".dots").classList.remove("hide");

      fetch(POPULAR_MOVIES_API + page)
    .then(res=> res.json())
    .then(data=> {
      setMovies(data.results);
    })
    }
  },[value])

  useEffect(()=>{
    fetch(POPULAR_MOVIES_API + page)
    .then(res=> res.json())
    .then(data=> {
      setMovies(data.results);
    })
  },[page]);
  const handlePrev=()=>{
    document.documentElement.scrollTop = 0;
    page!==1 && setPage(page-1);
  }
  const handleNext = ()=>{
    document.documentElement.scrollTop = 0;
    setPage(page+1);
  }
  


  return (
    <div className="App">
      <Nav value={value} setValue={setValue}/>
      <div className="movies">
        <h1>{value ?  value : "Popular Movies"}</h1>
        <div className="movies__list">
        {movies.map(item=>{
          return <Movie img={IMG + item.poster_path} title={item.title} star={item.vote_average} des={item.overview} date={item.release_date}/>
        })}
        </div>
        <div className="dots ">
            <div className="prev slide-btn" onClick={handlePrev}>
                <AiOutlineArrowLeft/>
            </div>
            <div className="page">{page}</div>
            <div className="next slide-btn" onClick={handleNext}>
                <AiOutlineArrowRight/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
