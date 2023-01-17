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
                      <div><TbSearch className='text-2xl hover:scale-75 duration-100'/></div>
                    </div>
                    <div>
                      <h1 className='text-2xl font-bold'>PJ</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                      <div><AiOutlineShoppingCart className='text-2xl hover:scale-75 duration-100'/></div>
                      <div><BsPerson className='text-2xl hover:scale-75 duration-100'/></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav