import React, { useState, useContext, useEffect } from 'react';
import Table from './Table';
import { ResetContext } from './Main';
import { data } from '../data/data';

function Submitted({ submittedData }) {
  const [newOccurance, setNewOccurance] = useState('');
  const { handleToogle } = useContext(ResetContext);

  return (
    <div className='grid grid-cols-2'>
      <div className='grid text-center'>
        <button onClick={handleToogle} className='py-7 px-12 hover:bg-reset-red shadow-lg'>Reset</button>
        <div className='grid grid-row shadow-xl'>
          {data.map(({occurance}) => {
            return (
              <button key={occurance} onClick={(value) => setNewOccurance(value.target.innerText.toLowerCase())} 
                  value={occurance} 
                  className='py-7 border-b-2 border-classy-dark cursor-pointer hover:bg-classy-green focus:bg-classy-green active:underline underline-offset-8 decoration-white'
              >
                {occurance.charAt(0).toUpperCase() + occurance.slice(1)}
              </button>
            )
          })}
        </div>
      </div>
      <Table data={submittedData} occurance={newOccurance} />
    </div>
  )
}

export default Submitted