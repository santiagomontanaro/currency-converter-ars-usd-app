import React, { useEffect, useState } from 'react'
import ss from '../sass/Calculator.module.css'

function Calculator({ dolar }) {

  const [value, setValue] = useState(1)

  useEffect(() => {
    Array.isArray(dolar) && dolar.map((i) => {
      return value * i.compra
    })
  }, [value])

  return (
    <section className={ss.calculator}>
      <h2>Calculadora</h2>
      <div className={ss.calculator__input}>
        {/* input */}
        <label htmlFor="inputPeso">USD a convertir</label> <br />
        <input type="number" placeholder="Ingrese monto en USD" min={0} onChange={(e) => { setValue(e.target.value) }} id='inputPeso' />
      </div>
      <div className={ss.calculator__result}>
        {
          Array.isArray(dolar) && dolar.map((i, index) => {
            const casa = i.casa.replace(/^\w/, (c) => c.toUpperCase())
            return (
              <div className={ss.result__value} key={index}>
                <h3>{casa === 'Contadoconliqui' ? 'CCL' : casa === 'Solidario' ? 'Solidario' : casa}</h3>
                {
                  value === 0 ? <p>{i.compra}</p> : <p>{i.compra === null ? '$-' : `$${Math.round(value * i.compra).toLocaleString('es-AR')}`}</p>
                }
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
{/* <h3>Dolar {i.nombre}</h3>
<p>${Math.round(value * i.compra).toLocaleString('es-AR')}</p> */}
export default Calculator
