import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import ss from '../sass/DollarCards.module.css'

function DollarCards({ dolar = [] }) {

  const [datePrice, setDatePrice] = React.useState('')

  useEffect(() => {
    Array.isArray(dolar) && dolar.map((d) => {
      {
        const jsonDate = (new Date(d.fechaActualizacion)).toJSON()
        const backToDate = new Date(jsonDate)
        const date = backToDate.toLocaleDateString('es-AR', { year: '2-digit', month: 'numeric', day: 'numeric' })
        const time = backToDate.toLocaleTimeString()
        const timeWithoutSeconds = time.slice(0, -3)
        timeWithoutSeconds && setDatePrice(`${date} ${timeWithoutSeconds}`)
      }
    })
  }, [dolar])

  return (
    <section className={ss.sectionCard}>
      {
        Array.isArray(dolar) && dolar.map((dolar, i) => {
          return (
            <div key={i} className={ss.sectionCard__card}>
              {/* dollar type */}
              <div className={ss.card__dollarName}>
                <div className={ss.dollarName__value}>
                  {
                    dolar.casa === 'oficial' ? <FontAwesomeIcon icon={faDollarSign} className={ss.text__dollarGreen} /> : dolar.casa === 'blue' ? <FontAwesomeIcon icon={faDollarSign} className={ss.text__dollarBlue} /> : <FontAwesomeIcon icon={faDollarSign} className={ss.text__dollarIcon} />
                  }
                  <h3>{dolar.compra ? Math.floor(dolar.compra) : '-'}</h3>
                </div>
                {
                  dolar.casa === 'contadoconliqui'
                    ? <h4>CCL</h4>
                    : dolar.casa === 'contadoconliqui'
                      ? <h4>CCL</h4>
                      : dolar.casa === 'solidario'
                        ? <h4>Turista</h4>
                        : <h4>{dolar.nombre}</h4>
                }
              </div>
              <hr />
              {/* price */}
              <div className={ss.card__price}>
                <div className={ss.price__value}>
                  <span>Compra</span>
                  <h2>{dolar.compra ? '$' + dolar.compra : 'Sin datos'}</h2>
                </div>
                <div className={ss.price__value}>
                  <span>Venta</span>
                  <h2>${dolar.venta ? dolar.venta : 'Sin datos'}</h2>
                </div>
              </div>
              <hr />
              {/* update */}
              <div className={ss.card__update}>
                <span>Ultima actualizacion</span>
                <span>{datePrice}</span>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default DollarCards
