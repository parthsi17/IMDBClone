import React from 'react'

function MovieCard({ movieObj, poster_path, name, handleAdd2Watchlist, handleRemovefromWatchlist, watchlist }) {
  function checkWatchList(movieObj) {


    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true
      }
    }
    return false
  }
  return (
    <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 flex flex-col justify-between items-end hover:cursor-pointer' style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`
    }}>
      {checkWatchList(movieObj) ? (
        <div onClick={() => (handleRemovefromWatchlist(movieObj))} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg'>
          &#10060;
        </div>)
        :
        (<div onClick={() => (handleAdd2Watchlist(movieObj))} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg'>
          &#128525;
        </div>)}

      <div className='text-white text-xl w-full p-2 bg-gray-900/60'>
        {name}
      </div>
    </div>
  );
}
export default MovieCard
