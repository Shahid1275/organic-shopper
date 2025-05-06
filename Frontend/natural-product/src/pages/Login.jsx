import React from 'react'
import { useState } from 'react';
const Login = () => {
  const [state,setState] = useState('Login');
  const onsubmitHandler = async (e) =>{
    e.preventDefault();
  }
  return (
    <form onSubmit={onsubmitHandler} className='flex flex-col w-[90%] items-center m-auto sm:max-w-96 mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{state}</p>
        <hr className='border-none h-[1.5px] bg-gray-800 w-8' />
      </div>
      {state === 'Login' ? '' :<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />  }
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className='w-full flex justify-center text-sm mt-[-8px]'>
           <p className='cursor-pointer'> Forgot your password?</p>
           {
            state === 'Login' ? <p className='cursor-pointer' onClick={() => setState('Sign Up')}> Create Account</p> : <p className='cursor-pointer' onClick={() => setState('Login')}> Login Here</p>
           }
      </div>
         <button className='bg-black text-white font-light px-8 py-2 mt-4'>{state === 'Login' ? 'Login' : 'Sign Up'}</button>
    </form>
  )
}

export default Login