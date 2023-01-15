import React, { useState, createContext, useEffect } from 'react'
import Form from './Form';
import Submitted from './Submitted';

export const ResetContext = createContext({
    handleToogle: null
  });

function Main({ callbackFromApp }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState({
        type: '',
        occurance: '',
        gross_income: 0,
        net_income: 0,
        tax: 0
    });
    const [alert, setAlert] = useState();

    useEffect(() => {
        callbackFromApp(alert);
    }, [alert])
    
    const handleToogle = () => {
        setIsSubmitted((previous) => !previous );
    }
    
    return (
        <ResetContext.Provider value={{handleToogle}}>
            {isSubmitted ? <Submitted submittedData={submittedData} /> : <Form sendToParent={setSubmittedData} callbackFromMain={setAlert} />}
        </ResetContext.Provider>
    )
}

export default Main