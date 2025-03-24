import { useForm } from 'react-hook-form'
import './Convertidor.css'
import { useCurrencies } from '../../Hooks/useCurrencies'
import React, { useEffect, useReducer } from 'react'
import PrintCurrencies from '../../Components/PrintCurrencies/PrintCurrencies'
import RenderError from '../../Components/RenderError/RenderError'
import {
  INITIAL_STATE,
  reducer
} from '../../Reducers/converter/converterReducer'
import {
  calculateResult,
  changeAmount,
  changeFrom,
  changeTo,
  loading,
  saveRates
} from '../../Reducers/converter/converterActions'
import { useRates } from '../../Hooks/useRates'
import Loading from '../../Components/Loading/Loading'

const Convertidor = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch
  } = useForm()

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const currencies = useCurrencies()
  const rates = useRates(state.fromCurrency)

  useEffect(() => {
    if (rates && Object.keys(rates).length > 0) {
      dispatch(saveRates(rates))
    }
  }, [rates])

  const onSubmit = (values) => {
    dispatch(loading(true))
    const { amount, fromCurrency, toCurrency } = values

    if (!amount || !fromCurrency || !toCurrency) {
      console.error('Faltan datos para calcular la conversión')
      return
    }

    setTimeout(() => {
      dispatch(loading(false))
      dispatch(calculateResult(amount))
    }, 3000)
  }

  const resultFinal = state.result

  return (
    <div className='converter'>
      <h1>Bienvenido a tu convertidor online de confianza. ¿Qué necesitas?</h1>

      {state.loading ? (
        <Loading />
      ) : (
        <>
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='amount'>Importe *</label>
            <input
              {...register('amount', {
                required: {
                  value: true,
                  message: 'Este campo es obligatorio'
                },
                pattern: {
                  value: /^(?!0(\.0+)?$)(\d+(\.\d{1,2})?)$/,
                  message:
                    'La cantidad debe ser mayor que cero y como máximo con dos decimales'
                }
              })}
              type='number'
              id='amount'
              onChange={(e) => dispatch(changeAmount(e.target.value))}
            />
            <RenderError field={'amount'} errors={errors} />
            <PrintCurrencies
              name={'fromCurrency'}
              currencies={currencies}
              register={register}
              funcion={(e) => dispatch(changeFrom(e.target.value))}
            />
            <PrintCurrencies
              name={'toCurrency'}
              currencies={currencies}
              register={register}
              funcion={(e) => dispatch(changeTo(e.target.value))}
            />
            <button type='submit'>Calcular</button>
          </form>

          {state.result && (
            <div className='result'>
              <h2>
                Resultado: {Number(state.result).toFixed(2)} {state.toCurrency}
              </h2>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Convertidor
