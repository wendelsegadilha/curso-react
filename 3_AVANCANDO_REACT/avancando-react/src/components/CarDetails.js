const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h1>CarDetails</h1>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Color: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails