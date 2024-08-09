import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const nome = "Rafael";

// const App = () => {
//     return <div>Olá {nome}, bem vindo!</div>
// };

const getNome = () =>{
    return "Rafael";
}


const data = new Date();

const mensagem = () =>{
    if(data.getHours() >= 0 && data.getHours() < 12){
        return "Bom dia!";
    }else if(data.getHours() >=12 && data.getHours() < 18){
        return "Boa tarde";
    }else{
        return "Boa noite!";
    }
}

const App = () => {
    return <div>Olá {getNome() + " Campos"}, {mensagem()}!</div>
};
root.render(
    <App />
);
