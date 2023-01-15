import {useState, useEffect} from 'react'

//4 - custom rook
export const useFetch = (url) => {
    //iniciamos como nullo pois nao sabemos o tipo de dado que será trabalhado aqui
    const [data, setData] = useState(null);
    //usando o useEffect para controle de execução
    useEffect(() => {
        //executa um get na url
        const fetchData = async () => {
            //usamos o await pois o retorno pode demorar
            const res = await fetch(url);
            const json = await res.json();
            setData(json); //adiciona o retorno ao data   
        };
        fetchData(); //executa a função
    }, [url]); //url como dependecia para reexecutar a funcao

    //export do resultado com o return
    return {data}; //dado que será utilizado 
}
