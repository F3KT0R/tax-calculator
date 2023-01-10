import React from 'react'
import Sidebar from './Sidebar'
import Table from './Table'

function Submitted({ buttonStatus }) {
  return (
    <div>
        <div className='flex flex-row'>
            <Sidebar buttonStatus={buttonStatus}/>
            <Table />
        </div>
    </div>
  )
}

export default Submitted