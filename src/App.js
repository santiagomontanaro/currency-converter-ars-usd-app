import { useEffect, useState } from 'react';
import 'normalize.css'
import ss from './assets/sass/App.module.css'
import DollarCards from './assets/components/DollarCards';
import Calculator from './assets/components/Calculator';

function App() {

  const API_URL = 'https://dolar-api-argentina.vercel.app/v1/dolares'

  const [dolar, setDolar] = useState({})

  useEffect(() => {
    fetch(API_URL)
      .then(data => data.json())
      .then(res => {
        res === undefined ? setDolar({}) : setDolar(res)
      })
      .catch(err => console.log(err))
  }, [])

  if (Object.keys(dolar).length === 0) {
    return <h1>Loading...</h1>
  } else {
    return (
      <main className={ss.App}>
        <div className={ss.App__noise}></div>
        <div className={ss.App__container}>
          <DollarCards dolar={dolar} />
          <Calculator dolar={dolar} />
        </div>
      </main>
    );
  }

}

export default App;