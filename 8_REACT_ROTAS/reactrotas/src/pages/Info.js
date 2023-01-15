import { useParams } from "react-router-dom"

const Info = () => {
    const {id} = useParams();
  return (
    <div>
        <h1>Mais informações sobre o produto ID: {id}</h1>
    </div>
  )
}

export default Info