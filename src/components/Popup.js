import React from 'react'
import { IoMdClose } from 'react-icons/io'

function Popup({ message, callbackFromApp }) {
  return (
    <div className='grid fixed h-full w-full justify-center items-center bg-classy-dark bg-opacity-50 z-10'>
        <div className='grid bg-classy-dark px-10 pt-5 pb-10'>
            {/* <div className='grid grid-cols-10'>            
                <h1 className='grid col-span-9 font-bold pb-10'>Warning!</h1>
                <IoMdClose className='grid col-span-1' />
            </div> */}    
            <IoMdClose onClick={() => callbackFromApp(false)} className='relative left-full cursor-pointer' />
            <h1 className='font-bold pb-11 text-red-500 text-xl shadow-classy-gray'>Warning!</h1>
            {message.map((item, index) => {
                return (
                    <p key={index} className='pb-1'>{item}</p>
                )
            })} 
        </div>
    </div>
  )
}

export default Popup