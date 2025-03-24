import React, { createContext, useEffect, useState } from 'react'
export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [light, setLight] = useState(true)

  useEffect(() => {
    document.body.className = light ? 'light-mode' : 'dark-mode'
  }, [light]) 

  return (
    <>
      <ThemeContext.Provider value={{ light, setLight }}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider
