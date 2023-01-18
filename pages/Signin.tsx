import React from 'react'

function Signin() {
  return (
    <div className='min-h-screen relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
        <div className='relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10'>
            <div className='w-full'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-gray-900'>Sign in</h1>
                    <p className='mt-2 text-gray-500'>Sign in here to again access to your account</p>
                </div>
                <div className='mt-5'>
                    <form action="">
                        <div className='relative mt-6'>
                            <input type="email" name='email' id='email' placeholder='Email Address' className='peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500m focus:outline-none' autoComplete='NA' />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signin