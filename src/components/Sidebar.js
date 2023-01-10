import React, { useContext } from 'react'
import { ResetContext } from './Main'

function Sidebar({ buttonStatus }) {
    const { handleToogle } = useContext(ResetContext);

    return (
        <div className='flex flex-col text-center'>
            {buttonStatus ? <button onClick={handleToogle} className='py-7 px-12 hover:bg-reset-red shadow-lg'>Reset</button> : <button onClick={handleToogle} className='py-7 px-12 hover:bg-classy-green shadow-lg'>Submit</button>}
            <ul className='list-none shadow-xl'>
                <li className='py-7 px-12 border-b-2 border-classy-dark cursor-pointer hover:bg-classy-green active:bg-classy-green active:underline underline-offset-8 decoration-white'>Weekly</li>
                <li className='py-7 px-12 border-b-2 border-classy-dark cursor-pointer hover:bg-classy-green active:bg-classy-green active:underline underline-offset-8 decoration-white'>Fortnightly</li>
                <li className='py-7 px-12 border-b-2 border-classy-dark cursor-pointer hover:bg-classy-green active:bg-classy-green active:underline underline-offset-8 decoration-white'>Monthly</li>
                <li className='py-7 px-12 cursor-pointer hover:bg-classy-green active:bg-classy-green active:underline underline-offset-8 decoration-white'>Anually</li>
            </ul>
        </div>
    )
}

export default Sidebar