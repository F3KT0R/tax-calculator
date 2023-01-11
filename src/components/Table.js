import React, { useState } from 'react'

function Table({ data, occurance }) {
  
  return (
    <div className='grid'>
      <div>
        {data.net_income}
      </div>
    </div>
  )
}

export default Table