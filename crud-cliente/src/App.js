import React, {useEffect, useState} from "react";
import axios from "axios";


function App() {
  const [feeds, setFeeds] = useState(null);
  const [novoFeed, setNovoFeed] = useState({
    id: Number(new Date()),
    usuario: "",
    tempo: "",
    mensagem: "",
    fotoPerfil: "",
    likes: 0
  });

  const carregarDados = () =>{
    axios.get("http://localhost:3005/feeds")
      .then(
        result => setFeeds(result.data)
      );
  }

  const excluir = id =>{
    axios.delete(`http://localhost:3005/feeds/${id}`)
      .then(
        () => {
          carregarDados();
        }
      );
  }

  const inserir = () =>{
    axios.post(`http://localhost:3005/feeds`, novoFeed)
      .then(
        () => {
          carregarDados();
        }
      );
  }

  useEffect(() =>{
    carregarDados();
  },[]);

  if(!feeds){
    return <div>Carregando...</div>
  }

  return (
    <div>
      <fieldset>
        <legend>Inserir</legend>
        <div>
          <label>Usuário</label>
          <input type="text"
            value={novoFeed.usuario}
            onChange={e => setNovoFeed({...novoFeed, usuario:e.target.value})}/>
          <label>Tempo</label>
          <input type="text"
            value={novoFeed.tempo}
            onChange={e => setNovoFeed({...novoFeed, tempo:e.target.value})}/>
          <button onClick={()=>{inserir()}}>Inserir</button>
        </div>
      </fieldset>
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Tempo</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {feeds.map(x =>{
            return (
              <tr key={x.id}>
                <td>{x.usuario}</td>
                <td>{x.tempo}</td>
                <td><button onClick={() =>{excluir(x.id)}}>Excluir</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
