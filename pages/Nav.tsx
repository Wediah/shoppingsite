import React from 'react'
import {TbSearch} from 'react-icons/tb'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import { useRouter } from 'next/router'
 
function Nav() {

  const router = useRouter()

  return (
    <nav className='bg-transparent shadow-2xl w-full fixed z-20 '>
        <div className='w-full'>
            <div className='flex items-center h-20 w-full'>
                <div className='flex items-center mx-10 justify-between w-full'>
                    <div className='flex h-10 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full overflow-hidden text-center'>
                        <div><TbSearch className='text-2xl  cursor-pointer align-middle m-2'/></div>
                    </div>
                    <div>
                      <h1 className='text-2xl font-bold cursor-pointer text-white' onClick={() => router.push('/')}>PJ</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                      <div><AiOutlineShoppingCart className='text-2xl hover:scale-75 duration-100 cursor-pointer text-white'/></div>
                      <div><BsPerson className='text-2xl hover:scale-75 duration-100 cursor-pointer text-white' onClick={() => router.push('/Signin')}/></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav