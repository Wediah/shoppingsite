import React from 'react'

function Landing() {
  return (
    <div className='min-h-screen pt-36 px-10'>

      <div className=''>
        <div className=" bg-no-repeat  bg-cover bg-center  bg-black  " style={{ backgroundImage: 'url(pjbg1.svg)'}}>
          <div className='text-6xl font-bold p-28 text-white'>
            Get 20% OFF! <br /> When You Purchase above $100 <br />
            <button className='text-black font-bold text-xl outline-white outline hover:outline-none outline-offset-4 rounded-full p-3 bg-white ' type='button' title='shop now'>Shop Now!</button>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

    </div>
  )
}

export default Landing