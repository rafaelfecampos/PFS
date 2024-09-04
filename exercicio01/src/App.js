import React, { useRef, useState } from "react";

function App() {
  const [evento, setEvento] = useState()
  const inputRef = useRef()

  const mostrar = () =>{
    console.log(evento);
  }
  return (
    <div className="App">
     <div style={{display:'flex'}}>
      <label htmlFor="lembrete">Lembre-se de:</label>
      <input id="lembrete" type="text"  ref={inputRef}></input>
      <button style={{backgroundColor:'blue', color:'white'}} onClick={()=>setEvento(inputRef.current.value)}>+</button> {/*fazer uma função utilizando eventlistener para adicionar um linha na lista*/ }      <button style={{backgroundColor:'blue', color:'white'}} onClick={mostrar}>p</button>
     </div>
     <ul>
      <li>Evento 1 <button style={{backgroundColor:'red', color:'white'}}>-</button> </li>
      <li>Evento 2 <button style={{backgroundColor:'red', color:'white'}}>-</button> </li>
      <li>Evento 3 <button style={{backgroundColor:'red', color:'white'}}>-</button> </li>
      <li>Evento 4 <button style={{backgroundColor:'red', color:'white'}}>-</button> </li>
      <li>Evento 5 <button style={{backgroundColor:'red', color:'white'}}>-</button> </li>
      <li>Evento 6 <button style={{backgroundColor:'red', color:'white'}}>-</button> </li>


     </ul>
    </div>
  );
}

export default App;
