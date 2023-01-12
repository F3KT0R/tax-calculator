import React, { useState } from 'react'

function Table({ data }) {
  
  return (
    <div className='grid grid-rows-5 text-xl'>
      <div className='grid grid-cols-2 row-span-1 bg-classy-blue shadow-xl place-items-center'>
        <div>
          <p className='text-sm underline underline-offset-6 pb-4'>Gross Income:</p>
          {`$${data.gross_income}`}
        </div>
        <div>
        <p className='text-sm underline underline-offset-6 pb-4'>Tax:</p>
        {`$${data.tax}`}
        </div>
      </div>
      <div className='grid row-span-4 bg-classy-green text-5xl place-items-center'>
        <div>
        <p className='text-sm underline underline-offset-6 pb-14'>Your net income is:</p>
        {`$${data.net_income}`}
        </div>
      </div>
    </div>
  )
}

export default Table