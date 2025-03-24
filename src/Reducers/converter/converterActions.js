export const CHANGE_AMOUNT = 'CHANGE_AMOUNT'
export const CHANGE_FROM = 'CHANGE_FROM'
export const CHANGE_TO = 'CHANGE_TO'
export const SAVE_RATES = 'SAVE_RATES'
export const CALCULATE_RESULT = 'CALCULATE_RESULT'
export const LOADING = 'LOADING'

export const changeAmount = (amount) => ({
  type: CHANGE_AMOUNT,
  payload: amount
})

export const changeFrom = (fromCurrency) => ({
  type: CHANGE_FROM,
  payload: fromCurrency
})

export const changeTo = (toCurrency) => ({
  type: CHANGE_TO,
  payload: toCurrency
})

export const saveRates = (rates) => ({
  type: SAVE_RATES,
  payload: rates
})

export const calculateResult = (amoumt) => ({
  type: CALCULATE_RESULT,
  payload: amoumt
})

export const loading = (boolean) => ({
  type: LOADING,
  payload: boolean
})
