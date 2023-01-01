const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };

    const renderDinamico = (x) => {
        if (x) {
            return <h1>Condição verdadeira</h1>
        } else {
            return <h1>Condição falsa</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Função no proprio elemento.")}>Clique aqui também</button>
            </div>
            <div>
                {renderDinamico(true)}
                {renderDinamico(false)}
            </div>
        </div>
    );
};

export default Events;