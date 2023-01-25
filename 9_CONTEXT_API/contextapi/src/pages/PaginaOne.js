//import {useContext} from 'react'
import ChangCounter from '../components/ChangCounter';
//import {CounterContext} from '../context/CounterContext'

// refatorando com hook
import {useCounterContext} from '../hooks/useCounterContext'
import {useTitleColorContext} from '../hooks/useTitleColorContext'

const PaginaOne = () => {

 // const {counter} = useContext(CounterContext); 
  const {counter} = useCounterContext();

  //5 contexto complexo
  const {color, dispatch} = useTitleColorContext();

  //
  const setTitleColor = (color) => {
    dispatch({type:color});
  }

  return (
    <div>
      <h1 style={{color: color}}>PaginaOne</h1>
      <p>Valor: {counter}</p>
      {/* alterando valor do contexto */}
      <ChangCounter />
      <div>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default PaginaOne