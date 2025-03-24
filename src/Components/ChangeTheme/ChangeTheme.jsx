import React, { useContext } from 'react'
import { ThemeContext } from '../../Providers/ThemeProvider'

const ChangeTheme = () => {
  const { light, setLight } = useContext(ThemeContext)
  return (
    <button onClick={() => setLight(!light)}>
      Cambiar a modo {light ? 'noche' : 'día'}
    </button>
  )
}

export default ChangeTheme
