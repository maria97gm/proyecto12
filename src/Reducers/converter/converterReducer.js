import { loading } from './converterActions'

export const INITIAL_STATE = {
  amount: 1,
  fromCurrency: 'EUR',
  toCurrency: 'USD',
  result: null,
  rates: {},
  loading: false
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_AMOUNT':
      return { ...state, amount: action.payload, result: null }
    case 'CHANGE_FROM':
      return { ...state, fromCurrency: action.payload, result: null }
    case 'CHANGE_TO':
      return { ...state, toCurrency: action.payload, result: null }
    case 'SAVE_RATES':
      return {
        ...state,
        rates: action.payload
      }
    case 'CALCULATE_RESULT':
      const rate = state.rates[state.toCurrency.toUpperCase()]

      if (!rate) {
        return {
          ...state,
          result: 'No podemos calcular el resultado sin la tasa de cambio'
        }
      }

      return { ...state, result: state.amount * rate }

    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      }
  }
}
