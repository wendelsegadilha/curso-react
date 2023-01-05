import {useState} from 'react'

const ManageData = () => {

    let valor = 10;
    console.log(valor);

    const [number, setNumber] = useState(15);
    console.log(number)
    
  return (
    <div>
        <h1>ManageData</h1>
        <div>
            <p>valor: {valor}</p>
            <button onClick={() => valor = 15}>Mudar valor</button>
        </div>

        <div>
            <p>valor: {number}</p>
            <button onClick={() => setNumber(50)}>Mudar valor</button>
        </div>

    </div>
  )
}

export default ManageData