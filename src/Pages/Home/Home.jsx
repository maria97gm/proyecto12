import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='home'>
      <img
        src='https://cdn-icons-gif.flaticon.com/12147/12147280.gif'
        alt='Billetes'
      />
      <h1>Convertidor de monedas online</h1>
      <p>
        ¿Conoces el valor de tu moneda en otro lugar del mundo? ¿Te vas de viaje
        y quieres saber qué tipo de cambio te toca? No te preocupes, nosotros te
        lo calculamos
      </p>
      <button onClick={() => navigate('/convertidor')}>
        Ir al convertidor
      </button>
    </div>
  )
}

export default Home
