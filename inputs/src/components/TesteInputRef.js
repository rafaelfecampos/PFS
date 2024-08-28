import React, {useRef, useState} from "react";

const TesteInputRef = () => {
    const inputRef = useRef();
    const [mensagem, setMensagem] = useState('');

    return (
        <div style={{backgroundColor: "lightGreen"}}>
           <h1>Controlando input com ref</h1>
            <div style={{display: 'flex', gap: 5}}>
                <label htmlFor='nome'>Nome:</label>
                <input ref={inputRef} name='nome' type='text' />
                <button 
                    onClick={
                        () => setMensagem(`Olá ${inputRef.current.value}!`)
                    }
                >
                    Ok
                </button>
            </div>
            <p>{mensagem}</p>
        </div>
    )
}

export default TesteInputRef;