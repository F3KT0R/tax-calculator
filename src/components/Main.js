import React, { useState, createContext } from 'react'
import Form from './Form';
import Submitted from './Submitted';

export const ResetContext = createContext({
    handleToogle: null
  });

function Main() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleToogle = () => {
        setIsSubmitted((previous) => !previous )
    }

    return (
        <ResetContext.Provider value={{handleToogle}}>
            {isSubmitted ? <Submitted buttonStatus={isSubmitted} /> : <Form buttonStatus={isSubmitted} />}
        </ResetContext.Provider>
    )
}

export default Main