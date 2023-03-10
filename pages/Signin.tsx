import React from 'react'
import Nav from './Nav'
import { useRouter } from 'next/router'
import mail from '../public/gmail.png'
import Image from 'next/image'
import {BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'

function Signin() {

    const router = useRouter()
  return (

    <>
        <Nav/>
        <div className='min-h-screen relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 cursor-default'>
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
                                <label htmlFor="email" className='pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peerr-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'>Email Address</label>
                            </div>
                            <div className='relative mt-6'>
                                <input type="password" name='password' id='password' placeholder='Password' className='peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500m focus:outline-none' />
                                <label htmlFor="password" className='pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peerr-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'>Password</label>
                            </div>
                            <div className="mt-6 mb-2">
                                <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                            </div>
                            <p className="text-center text-sm cursor-default">Forgot your password? <a href="" className='cursor-pointer hover:underline focus:text-gray-400 underline-offset-2'> Get Help.</a></p>
                            <p className="text-center text-sm text-gray-500 cursor-default">Don&#x27;t have an account yet? <a href="#!" className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none" onClick={() => router.push('/Signup')}>Sign up</a>.</p>
                            <p className='text-center text-sm text-gray-500'>or</p>
                            <div className='flex gap-5 justify-center mt-2'>
                                <button className='text-sm flex bg-black h-8 text-white p-2 font-semibold rounded-md cursor-pointer'><FcGoogle className='text-lg align-middle mr-1 '/>Sign in with Google</button>
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

export default Signin