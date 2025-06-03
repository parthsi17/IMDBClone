import React from 'react'
import { useState } from 'react'
import genreids from '../utility/genre'
import { useEffect } from 'react'

function WatchList({ watchlist , setWatchList, handleRemovefromWatchlist}) {
  const [search, setSearch] = useState('')
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currentGenre , setCurrentGenre] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }

  let sortIncreasing = () => {
    let sortInc = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    }
    )
    setWatchList([...sortInc])

  }

  let sortDecreasing = () => {
    let sortDec = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    }
    )
    setWatchList([...sortDec])
  }
  

  let handleFilter = (genre) => {
    setCurrentGenre(genre)


  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreids.genres.find(genre => genre.id === movieObj.genre_ids[0]).name || "Unknown"
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
  },[watchlist])

  console.log("genreids", watchlist)

  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {
          genreList.map((genre) =>{
            return <div onClick={()=>handleFilter(genre)} className={currentGenre===genre ? 'flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl mx-4' : 'flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl mx-4'}>{genre}</div>

          })
        }

      </div>
      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type="text" placeholder='Search for Movies' className='h-[3rem] w-[18-rem] bg-gray-200 outline-none px-4' />
      </div>
      <div className='overflow-hidden rounded-lg border border-gray-200 m-8 '>
        <table className='w-full text-gray-500 text-center '>
          <thead className='border-b-2 '>
            <tr>
              <th>Name</th>
              <th className='flex justify-center'>
                <div onClick={sortIncreasing} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
                <div className='p-2'>Ratings </div>
                <div onClick={sortDecreasing} className='p-2'> <i class="fa-solid fa-arrow-up"></i> </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>

            </tr>

          </thead>
          <tbody className="divide-y divide-gray-200">

            {watchlist.filter((movieObj) => {
              if(currentGenre == "All Genres"){
                  return true
              } else {
                console.log("rfrf", movieObj.genre_ids[0])
                    return genreids.genres.find(genre => genre.id === movieObj.genre_ids[0]).name==currentGenre;
              }
            }).filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj) => {
              return <tr className='border-b-2'>
                <td className="flex items-center px-6 py-4">
                  <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} />
                  <div className='mx-10'> {movieObj.title} </div>
                </td>
                <td> {movieObj.vote_average} </td>
                <td> {movieObj.popularity} </td>
                <td>
                  {
                     genreids.genres.find(genre => genre.id === movieObj.genre_ids[0]).name || "Unknown"
                  }
                </td>                
                <td onClick={()=>handleRemovefromWatchlist(movieObj)} className='text-red-800'> Delete </td>
              </tr>
            })}

          </tbody>
        </table>
      </div>
    </>

  )
}

export default WatchList
