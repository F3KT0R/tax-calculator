import React, { useState } from 'react'
import Banner from './Banner'
import Main from './Main'
import Footer from './Footer'
import Popup from './Popup';

function App() {
  const [alert, setAlert] = useState()
  
  return (
    <div className='grid w-screen h-screen m-auto p-8 place-items-center text-center text-white font-roboto bg-gradient-radial from-classy-navy to-classy-green'>
        {alert ? <Popup message={['The value you have entered is not a number!', 'Please enter a valid number.']} callbackFromApp={setAlert} /> : ''}
        <Banner />

        <div className='grid w-1/2 bg-classy-gray rounded-sm bg-opacity-50 shadow-xl'>
            <Main callbackFromApp={setAlert}/>
        </div>
        <Footer />
    </div>
  )
}

export default App