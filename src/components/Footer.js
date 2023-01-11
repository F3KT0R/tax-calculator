import React from 'react';
import f3_logo from '../assets/images/f3.png';

function Footer() {
  return (
    <div className='flex flex-row gap-6 pt-20'>
      <p className='p-1'>Designed and developed by:</p>
      <a href='https://tibor-balint.netlify.app/' target='_blank'>
        <img src={f3_logo} className='h-9' />
      </a>
    </div>
  )
}

export default Footer