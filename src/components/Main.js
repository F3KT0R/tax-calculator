import React, { useState, createContext } from 'react'
import Form from './Form';
import Submitted from './Submitted';

export const ResetContext = createContext({
    handleToogle: null
  });

function Main() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState({});
    const [calculatedData, setCalculatedData] = useState({
        // gross_income: 0,
        // net_income: 0,
        // tax: 0,
    })

    const handleToogle = () => {
        setIsSubmitted((previous) => !previous )
    }

    const calculate = () => {
        const tax_percent = 0.2

        if(submittedData.type === 'gross') {
            setCalculatedData({
                gross_income: submittedData.amount,
                net_income: submittedData.amount - (submittedData.amount * tax_percent),
                tax: submittedData.amount * tax_percent
            })
        }
    }
    
    return (
        <ResetContext.Provider value={{handleToogle}}>
            {isSubmitted ? <Submitted buttonStatus={isSubmitted} /> : <Form buttonStatus={isSubmitted} sendToParent={setSubmittedData} />}
            {console.log(submittedData)}
        </ResetContext.Provider>
    )
}

export default Main