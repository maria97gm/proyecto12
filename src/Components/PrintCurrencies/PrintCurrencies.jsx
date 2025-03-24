import React from 'react'

const PrintCurrencies = ({ name, currencies, register, funcion }) => {
  return (
    <>
      <label htmlFor={name}>
        {name === 'fromCurrency' ? 'Moneda origen *' : 'Moneda destino *'}
      </label>
      <select {...register(name)} id={name} onChange={funcion}>
        {currencies.map((currency) => (
          <option key={currency[0]} value={currency[0]}>
            {currency[1]}
          </option>
        ))}
      </select>
    </>
  )
}

export default PrintCurrencies
