const Challenge = () => {

    const a = 10;
    const b = 20;

    const handleSome = () => {
        console.log(a + b);
    }

    return (

       <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <div>
                <button onClick={handleSome}>Somar</button>
            </div>
       </div>

    );

};

export default Challenge;