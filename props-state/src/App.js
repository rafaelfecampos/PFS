import './App.css';

import Evento from './components/Evento';

function App() {
  return (
    <div className='ui feed'>
      {
        objetos.map( x => {
          return <Evento nome={x.nome} likes={x.likes} />
        })
      }
    </div>
  );
}

const objetos = [
  {nome: "Joao", likes: 40},
  {nome: "Ana", likes: 4},
  {nome: "Maria", likes: 45},
  {nome: "Tiao", likes: 5}
]
export default App;
