import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Banner from "./components/Banner";
import { useState } from "react";
import { useEffect } from "react";


function App() {

  let [watchlist , setWatchList] = useState([])

  let handleAdd2Watchlist =(movieObj)=>{
    console.log('movieObj', movieObj)
      let newWatchList = [...watchlist, movieObj]
      localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
      setWatchList(newWatchList)
      console.log("watchlist", newWatchList)
  }

  let handleRemovefromWatchlist =(movieObj)=>{
    console.log("gotccllsls")
    let filteredWatchList = watchlist.filter((movie) =>{
      return movie.id != movieObj.id
    })
    setWatchList(filteredWatchList)
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList))
}

useEffect(() => {
  let moviesfromLocalStorage = localStorage.getItem('moviesApp');
  if (!moviesfromLocalStorage) {
    return;
  }
  setWatchList(JSON.parse(moviesfromLocalStorage));
},[]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/' element={
            <> 
          <Banner/>
          <Movies handleAdd2Watchlist={handleAdd2Watchlist}  handleRemovefromWatchlist ={handleRemovefromWatchlist} watchlist={watchlist} /> 

          </> }/>
          <Route path = '/watchlist' element={ <WatchList watchlist={watchlist} setWatchList={setWatchList} handleRemovefromWatchlist={handleRemovefromWatchlist} />}/>
        </Routes>
     
      </BrowserRouter>
    </>
  );

}

export default App
