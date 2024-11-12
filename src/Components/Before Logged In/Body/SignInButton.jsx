import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignInButton = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
  return (
    <div>
        <button onClick={handleClick} className='px-4 py-[0.4rem] text-gray-700  bg-slate-200 font-bold text-sm rounded-full hover:bg-slate-300'>
            Sign In
        </button>
    </div>
  )
}

export default SignInButton