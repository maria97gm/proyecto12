import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { ThemeContext } from '../../Providers/ThemeProvider'
import ChangeTheme from '../../Components/ChangeTheme/ChangeTheme'

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/convertidor'>Convertidor</Link>
            </li>
          </ul>
        </nav>
        <ChangeTheme />
      </header>
    </div>
  )
}

export default Header
