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

    //7- tratando erros
    const [error, setError] = useState(null)

    //8 - desafio 6
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === 'POST'){
            setConfig({
                method,
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method);
        } else if (method === 'DELETE'){
            setConfig({
                method,
                headers:{
                    "Content-Type":"application/json"
                }
            });
            setMethod(method);
            setItemId(data);
        }
        
    }

    useEffect(() => {
        //executa um get na url
        const fetchData = async () => {
            setLoading(true); //carregando os dados
            try{
                //usamos o await pois o retorno pode demorar
                const res = await fetch(url);
                const json = await res.json();
                setData(json); //adiciona o retorno ao data  
            }catch(error){
                console.log(error.message);
                setError("Houve um erro ao carregar os dados");
            }
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
            } else if (method === 'DELETE') {
                const deleteUrl = `${url}/${itemId}`;
                const res = await fetch(deleteUrl, config);
                const json = await res.json();
                setCallFetch(json);
            }
        };
        httpRequest();
    }, [config, url, method]) //config como variavel de monitoramento para reexecutar a funcao

    //export do resultado com o return
    return {data, httpConfig, loading, error}; //dado que será utilizado 
}
