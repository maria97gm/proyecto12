import { useEffect, useReducer, useState } from 'react'
import { INITIAL_STATE, reducer } from '../Reducers/converter/converterReducer'

export const useRates = (fromCurrency) => {
  const [rates, setRates] = useState({})
  useEffect(() => {
    const API_KEY = 'ee8e677239dbf8c6df7e3b33'

    fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRates(data.conversion_rates)
      })
  }, [fromCurrency])
  return rates
}
