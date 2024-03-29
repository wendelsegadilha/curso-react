import React from 'react'

import { useState, useEffect } from 'react'

//4 - ustom hook
import { useFetch } from './hooks/useFetch';

//url base
const url = "http://localhost:3000/products";

const App = () => {

  const [products, setProducts] = useState([]);

  //4 - custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url);
  //armazena os dados do formulario
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  //1 - resgatando dados da API
  /*
  useEffect(() => {
    //necessario a funcao ser async para poder usar o await
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);*/ //importante informar o array de dependência para evitar loop infinito

  //2-Requisições de POST
  //enviar o formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); //para nao enviar o formulario (reload da pagina)
    const product = {
      'name':name,
      'price':price,
    }

    /*
    const res = await fetch(url, { //requisição do mtipo POST
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(product) //converte product para json
    });

    //3 - carregamento dinamico - atualizando a lista de produtos
    const addedProduct = await res.json();
    //pegando os valores antigos que já existiam na lista e criando uma nova lista com o produto novo
    setProducts((prevProducts) => [...prevProducts, addedProduct])
    */
    
    //5 - refatorando POST
    httpConfig(product, "POST");

    //resetando os dados do formulário (reset states)
    setName('');
    setPrice('');
  };

  const handleExcluir = (id) => {
    httpConfig(id, 'DELETE');
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error &&  
        <ul>
        {items && items.map((product) => ( //valida se existem dadas para executar o map
          <li key={product.id}>
            {product.name} - R$: {product.price} - <button onClick={() => handleExcluir(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      }
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Preço:
            <input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <br />
          {/*7 - loading para post*/}
          {loading && <button type='submit' disabled>Aguarde...</button>}
          {!loading && <button type='submit'>Cadastrar</button>}
        </form>
      </div>
    </div>
  )
}

export default App
