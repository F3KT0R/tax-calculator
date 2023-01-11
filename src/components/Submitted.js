import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Table from './Table'

function Submitted({ buttonStatus }) {
  const [occurance, setOccurance] = useState('weekly');

  return (
    <div>
        <div className='flex flex-row'>
            <Sidebar buttonStatus={buttonStatus} sendToParent={setOccurance} />
            <Table currentOccurance={occurance} />
        </div>
    </div>
  )
}

export default Submitted