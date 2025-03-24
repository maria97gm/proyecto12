import { useEffect, useState } from 'react'

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    const API_KEY = 'ee8e677239dbf8c6df7e3b33'

    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(data.supported_codes || [])
      })
  }, [])

  return currencies
}
