import {useState, useEffect} from 'react'

//4 - custom rook
export const useFetch = (url) => {
    //iniciamos como nullo pois nao sabemos o tipo de dado que será trabalhado aqui
    const [data, setData] = useState(null);
    //usando o useEffect para controle de execução

    //5 - refatorando com POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //6-estado de loading (carregando)
    const [loading, setLoading] = useState(false);

    const httpConfig = (data, method) => {
        if(method === 'POST'){
            setConfig({
                method,
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            })
        }
        setMethod(method);
    }

    useEffect(() => {
        //executa um get na url
        const fetchData = async () => {
            setLoading(true); //carregando os dados
            //usamos o await pois o retorno pode demorar
            const res = await fetch(url);
            const json = await res.json();
            setData(json); //adiciona o retorno ao data   
            setLoading(false); //dados carregados
        };
        fetchData(); //executa a função
    }, [url, callFetch]); //url e callFetch como dependecia para reexecutar a funcao caso existam alteracoes

    //5 - refatorando com o post
    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST'){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }
        };
        httpRequest();
    }, [config, url, method]) //config como variavel de monitoramento para reexecutar a funcao

    //export do resultado com o return
    return {data, httpConfig, loading}; //dado que será utilizado 
}
