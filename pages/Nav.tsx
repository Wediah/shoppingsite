import React from 'react'
import {TbSearch} from 'react-icons/tb'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
 
function Nav() {
  return (
    <nav className='bg-white shadow-lg w-full fixed z-20 '>
        <div className='w-full'>
            <div className='flex items-center h-20 w-full'>
                <div className='flex items-center mx-10 justify-between w-full'>
                    <div>
                      <div>
                        <div><TbSearch className='text-2xl hover:scale-75 duration-100 cursor-pointer'/></div>
                        <input type="text" placeholder='Search' className='w-full h-10 outline-none border-none text-md font-semibold rounded-full bg-gray-300 p-2xbn focus:outline-none placeholder:text-slate-400 placeholder:italic placeholder:focus:opacity-0 placeholder:transition-all placeholder:ease-in-out placeholder:duration-75' />
                      </div>
                    </div>
                    <div>
                      <h1 className='text-2xl font-bold cursor-pointer'>PJ</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                      <div><AiOutlineShoppingCart className='text-2xl hover:scale-75 duration-100 cursor-pointer'/></div>
                      <div><BsPerson className='text-2xl hover:scale-75 duration-100 cursor-pointer'/></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav