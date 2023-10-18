import React from 'react'

const Header = () => {
  return (
    <div>
    <h1 className='absolute top-1/2 inset-1/3 font-bold sm:text-3xl md:text-5xl lg:text-6xl'>
      <div className='text-green-800'>CODE.</div>
      <div className='text-rose-800'>FOODS</div>
      </h1>
    <img src="./images/fondo.jpg" alt="" className='h-screen w-screen' />
  </div>
  )
}

export default Header