import './SearchForm.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SearchForm = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search?q=" + query);
    };

  return(
    <form onSubmit={handleSubmit}>
        <input type="text" name='search' placeholder='pesquisar...' onChange={(e) => setQuery(e.target.value)} />
        <button type='submit'>OK</button>
    </form>
  )
}

export default SearchForm