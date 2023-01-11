import React, { useState, createContext } from 'react'
import Form from './Form';
import Submitted from './Submitted';

export const ResetContext = createContext({
    handleToogle: null
  });

function Main() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState({
        type: '',
        occurance: '',
        gross_income: 0,
        net_income: 0,
        tax: 0
    });

    const handleToogle = () => {
        setIsSubmitted((previous) => !previous )
    }
    
    return (
        <ResetContext.Provider value={{handleToogle}}>
            {isSubmitted ? <Submitted submittedData={submittedData} /> : <Form sendToParent={setSubmittedData} />}
        </ResetContext.Provider>
    )
}

export default Main