import React from 'react';
import logo from '../assets/images/logo.png';

function Banner() {
  return (
    <div className='flex flex-row justify-between content-center'>
        <p className='p-4 text-lg'>Income Tax <br /> Calculator</p>
        <img src={logo} className='h-20'/>
    </div>
  )
}

export default Banner