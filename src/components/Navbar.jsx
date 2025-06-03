import React from 'react'

import logo from '../images.jpeg'

import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[100px]' src = {logo}/>
      <Link to='/' className='text-blue-400 text-4xl font-bold'> Movies </Link>
      <Link to='/watchlist' className='text-blue-400 text-4xl font-bold'> Watchlist </Link>

    </div>
  )
}

export default Navbar
