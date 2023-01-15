import React, { useState, useContext, useEffect } from 'react';
import Table from './Table';
import { ResetContext } from './Main';
import { occurance_data } from '../data/data';
import { getConvertedData } from '../utils/getConvertedData'

function Submitted({ submittedData }) {
  const [data, setData] = useState(submittedData)
  const { handleToogle } = useContext(ResetContext);

  const convert = (param) => {
    if(data.occurance === param) return;
    
    let updatedData = getConvertedData(data.occurance, param, data.gross_income, data.net_income, data.tax);
    setData(updatedData);
  }

  return (
    <div className='grid grid-cols-3'>
      <div className='grid text-center col-span-1'>
        <button onClick={handleToogle} className='py-7 px-12 hover:bg-reset-red shadow-lg'>Reset</button>
        <div className='grid grid-row shadow-xl'>
          {occurance_data.map(({occurance}) => {
            return (
              <button key={occurance} onClick={(value) => convert(value.target.innerText.toLowerCase())} 
                  value={occurance} 
                  className={occurance === data.occurance ?
                    'py-7 border-b-2 border-classy-dark cursor-pointer  bg-classy-green underline underline-offset-8 decoration-white ease-linear duration-400 transition-all' :
                    'py-7 border-b-2 border-classy-dark cursor-pointer hover:bg-classy-green ease-linear duration-400 transition-all'}
              >
                {`${occurance.charAt(0).toUpperCase()}${occurance.slice(1)}`}
              </button>
            )
          })}
        </div>
      </div>
      <div className='grid col-span-2'>
        <Table data={data} />
      </div>
    </div>
  )
}

export default Submitted