import React from 'react'
import  { useEffect }  from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import  { useState }  from 'react'
import Pagination from './Pagination'


function Movies({handleAdd2Watchlist , handleRemovefromWatchlist , watchlist}) {

  const [moviesList, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = ()=>{
    if (pageNo == 1){
      setPageNo(pageNo)
    } 
    else {
    setPageNo(pageNo-1)
    }
  }

  const handleNext = ()=>{
    setPageNo(pageNo+1)
  }


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=43c90ef1973792d2ef3a15d759618766&language=en-US&page=${pageNo}`).then(function (res) {
      setMovies(res.data.results) 
    })
  }, [pageNo])


  return (
    <div className='p-5'>
      <div className='text-2xl font-bold text-center'>
        Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around gap-8'>
        {moviesList.map((movieObj) => {
          return <MovieCard key={movieObj._id} movieObj={movieObj} poster_path = {movieObj.poster_path} name = {movieObj.original_title} handleAdd2Watchlist={handleAdd2Watchlist} handleRemovefromWatchlist={handleRemovefromWatchlist} watchlist={watchlist} />
        })}

      </div>
      <Pagination pageNo = {pageNo} handleNext={handleNext} handlePrev = {handlePrev}/>

    </div>
  )
}

export default Movies

