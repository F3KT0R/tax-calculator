import React, { useContext } from 'react'
import { ResetContext } from './Main'

function Sidebar({ buttonStatus, sendToParent }) {
    const { handleToogle } = useContext(ResetContext);

    return (
        <div className='flex flex-col text-center'>
            {buttonStatus ? 
                <button onClick={handleToogle} className='py-7 px-12 hover:bg-reset-red shadow-lg'>Reset</button> : 
                <button onClick={handleToogle} className='py-7 px-12 hover:bg-classy-green shadow-lg'>Submit</button>
            }
            <ul className='list-none shadow-xl'>
                <li onClick={(value) => sendToParent(value.target.innerText.toLowerCase())} value={'weekly'} className='py-7 px-12 border-b-2 border-classy-dark cursor-pointer hover:bg-classy-green active:bg-classy-green active:underline underline-offset-8 decoration-white'>Weekly</li>
                <li onClick={(value) => sendToParent(value.target.innerText.toLowerCase())} value={'fortnightly'} className='py-7 px-12 border-b-2 border-classy-dark cursor-pointer hover:bg-classy-green active:bg-classy-green active:underline underline-offset-8 decoration-white'>Fortnightly</li>
                <li onClick={(value) => sendToParent(value.target.innerText.toLowerCase())} value={'monthly'} className='py-7 px-12 border-b-2 border-classy-dark cursor-pointer hover:bg-classy-green active:bg-classy-green active:underline underline-offset-8 decoration-white'>Monthly</li>
                <li onClick={(value) => sendToParent(value.target.innerText.toLowerCase())} value={'annually'} className='py-7 px-12 cursor-pointer hover:bg-classy-green active:bg-classy-green active:underline underline-offset-8 decoration-white'>Anually</li>
            </ul>
        </div>
    )
}

export default Sidebar