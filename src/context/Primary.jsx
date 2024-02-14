import React,{createContext} from 'react'
export const ThemeContext = createContext();
const Primary = ({children}) => {
  return (
     <ThemeContext.Provider value = "">
         {children}
     </ThemeContext.Provider>
  )
}

export default Primary