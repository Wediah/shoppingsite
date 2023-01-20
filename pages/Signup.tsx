import React from 'react'
import Nav from './Nav'
import { useRouter } from 'next/router'
import {BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'

function Signup() {
    const router = useRouter()
  return (
    <>
        <Nav/>
        <div className='min-h-screen relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 '>
            <div className='relative mx-auto w-full max-w-md bg-white px-6 pt-10 mt-20 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10'>
                <div className='w-full'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-semibold text-gray-900'>Sign up</h1>
                        <p className='mt-2 text-gray-500'>Sign up here for your free account</p>
                    </div>
                    <div className='mt-5'>
                        <form action="">
                            
                            <div className='relative mt-6'>
                                <input type="email" name='email' id='email' placeholder='Email Address' className='peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="off"'/>
                                <label htmlFor="email" className='pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800'>Email Address</label>
                            </div>
                            
                            <div className='relative mt-6'>
                                <input type="password" name='password' id='password' placeholder='Password' className='peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="off"'/>
                                <label htmlFor="password" className='pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800'>Password</label>
                            </div>
                            <div className='relative mt-6'>
                                <input type="password" name='password' id='password' placeholder='Password' className='peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="off"'/>
                                <label htmlFor="password" className='pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800'>Enter Password Again</label>
                            </div>
                            
                            <div className="my-6">
                                <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign up</button>
                            </div>
                            <p className="text-center text-sm text-gray-500">Already having an account? <a href="#!" className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none" onClick={() => router.push('/Signin')}>Sign in</a>.</p>
                            <p className='text-center text-sm text-gray-500'>or</p>
                            <div className='flex gap-5 justify-center mt-2'>
                                <button className='text-sm flex bg-black h-8 text-white p-2 font-semibold rounded-md cursor-pointer'><FcGoogle className='text-lg align-middle mr-1 '/>Sign up with Google</button>
                                <button className='text-sm flex bg-black h-8 text-white p-2 font-semibold rounded-md cursor-pointer'><BsApple className='text-lg align-middle mr-1'/>Continue with Apple</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </>


  )
}

export default Signup