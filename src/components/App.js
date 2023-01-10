import React from 'react'
import Banner from './Banner'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className='grid w-screen h-screen m-auto p-8 place-items-center text-center text-white font-roboto bg-gradient-radial from-classy-navy to-classy-green'>
        <Banner />

        <div className='grid w-1/2 bg-classy-gray rounded-sm bg-opacity-50 shadow-xl'>
            <Main />
        </div>
        <Footer />
    </div>
  )
}

export default App