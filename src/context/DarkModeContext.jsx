import { createContext, useState, useEffect } from "react";



    const darkMode = {
        body: '#1c1c1c',
    };

    

export const DarkModeContext = createContext()

export const DarkModeProvider = ({children}) => {

     const [darkMode, setDarkMode] = useState(false); 
     console.log('darkMode', darkMode)

     useEffect(() => {
       if (darkMode) {
        document.body.classList.add('dark');
       }else {
        document.body.classList.remove('dark')
       }
     }, [darkMode]);

     const changeMode = () => {
        setDarkMode(!darkMode)
    } 



    return(
        <DarkModeContext.Provider value={{
            darkMode,
           changeMode
        }}>
          {children}
        </DarkModeContext.Provider>
    )
}