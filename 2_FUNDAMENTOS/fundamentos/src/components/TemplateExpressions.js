const TemplateExpressions = () => {

    const name = "Wendel";

    const data = {
        age: 28,
        job: "Programmer",
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <h1>Profissão: {data.job}</h1>
            <h1>Idade: {data.age}</h1>
            <h2>{4*4}</h2>
        </div>
    );

};

export default TemplateExpressions;