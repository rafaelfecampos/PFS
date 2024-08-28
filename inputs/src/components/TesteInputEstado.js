import React, {useDebugValue, useState} from 'react';

const TesteInputEstado = () =>{
    const [nome, setNome] = useState('Botafoguense');
    
    // const clicou = () =>{
    //     console.log("clicado");

    //     const inputNome = document.getElementById("nome");

    //     setNome(inputNome.value)
    // }

    return(
        <div style={{backgroundColor:'lightblue'}}>
           <h1>Controlando input com state</h1>
           <div style={{display:"flex", gap:5}}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" value={nome} onChange={e => setNome(e.target.value)}/>
                {/* <button onClick={clicou}>Ok</button> */}
           </div>
           <p>Olá, {nome}!</p>
           <p style={{margin:"0px"}}>{nome.length} caracteres</p>
        </div>
    );
};

export default TesteInputEstado;