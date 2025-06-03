import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg`}}>
        <div className='text-white text-xl  bg-gray-900/60 text-center w-full p-4 '> Avengers Endgame </div>
    </div>
  )
}

export default Banner
