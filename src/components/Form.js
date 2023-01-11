import React, { useState, useContext } from 'react';
import dollar_logo from '../assets/images/dollar_logo.svg';
import { ResetContext } from './Main';
import { data } from '../data/data';

function Form({ sendToParent }) {
  const [occurance, setOccurance] = useState('weekly');
  const [incomeType, setIncomeType] = useState('gross');
  const [value, setValue] = useState(0);
  const { handleToogle } = useContext(ResetContext);

  const handleSubmit = () => {
    let pattern = /^\d+\.?\d*$/;
    
    if(value === 0) {
      alert('Your income cannot be $0!\nPlease add a valid amount.');
    } else if(!pattern.test(value)) {
      alert('The value you have entered is not a number.\nPlease enter a valid number.');
    } else {
      calculate();
      handleToogle();
    }
  }

  const calculate = () => {
    const gross_multiplier = 0.2;
    const net_divider = 0.2;
    const net_tax_divider = 4;

    if(incomeType === 'gross') {
        sendToParent({
          type: incomeType,
          occurance: occurance,
          gross_income: value,
          net_income: value - (value * gross_multiplier),
          tax: value * gross_multiplier
        })
    } else {
      sendToParent({
        type: incomeType,
        occurance: occurance,
        gross_income: value / net_divider,
        net_income: value,
        tax: value / net_tax_divider
      })
    }
  }

  const handleChange = (event) => {
    event.target.value.length !== 0 ? setValue(event.target.value.replace(/\s+/g, ' ').trim()) : setValue(0)
  }

  return (
    <div className='grid grid-cols-3'>
      <div className='flex flex-col text-center'>
        <button onClick={handleSubmit} disabled={value !== 0 ? false : true} className='py-7 px-12 hover:bg-classy-green shadow-lg'>Submit</button>
        <div className='grid grid-row shadow-xl'>
            {data.map(({occurance}) => {
              return (
                <button key={occurance} onClick={(value) => setOccurance(value.target.innerText.toLowerCase())} 
                    value={occurance} 
                    className='py-7 border-b-2 border-classy-dark cursor-pointer hover:bg-classy-green focus:bg-classy-green active:underline underline-offset-8 decoration-white'
                >
                  {occurance.charAt(0).toUpperCase() + occurance.slice(1)}
                </button>
              )
            })}
        </div>
      </div>
      <div className='grid col-span-2 gap-3'>
        <div className='grid grid-rows-2 px-10 py-10 gap-8'>
          <label>What is your total income?</label>
          <div className='grid grid-cols-10'>
            <img src={dollar_logo} className='h-10 p-2 invert' />
            <input type="text" 
                  name="value" 
                  placeholder='10,000' 
                  className='text-classy-dark col-span-9 py-2 px-4 h-10 shadow-lg' 
                  onChange={handleChange}>
            </input>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <button onClick={() => setIncomeType('gross')} className='hover:bg-classy-green shadow-xl focus:bg-classy-green'>Gross Income</button>
          <button onClick={() => setIncomeType('net')} className='hover:bg-classy-green shadow-xl focus:bg-classy-green'>Net Income</button>
        </div>
      </div>
    </div>
  )
}

export default Form