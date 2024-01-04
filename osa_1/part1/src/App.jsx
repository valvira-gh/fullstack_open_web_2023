import React from "react";

const Hello = (props) => {
    console.log(props);
    return (
        <div>
            <p>
                Hello, {props.name}, you are {props.age} years old.{" "}
            </p>
        </div>
    );
};

const App = () => {
    const nimi = "Valtteri";
    const ika = 33;

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Erkki" age={26 + 10} />
            <Hello name={nimi} age={ika} />
        </div>
    );
};

export default App;
