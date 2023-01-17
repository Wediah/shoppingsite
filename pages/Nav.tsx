import React from 'react'
import {TbSearch} from 'react-icons/tb'

function Nav() {
  return (
    <nav className='bg-white shadow-lg w-full fixed z-20 '>
        <div className='w-full'>
            <div className='flex items-center h-20 w-full'>
                <div className='flex items-center mx-10 justify-between w-full'>
                    <div>
                      <div><TbSearch/></div>
                    </div>
                    <div>
                      <h1 className='text-2xl font-bold'>PJ</h1>
                    </div>
                    <div>h3</div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav