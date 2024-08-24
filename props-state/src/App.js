// import React, {useState, useRef, useEffect} from "react";

// const numeros = [1,2,3,4,5,6,7,8,9,10];


// const App = () => {
//   return (
//     <ul>
//       {
//         numeros.map(x => <li key={x}>{x}</li>) //é necessário adicionar a propriedade key para evitar warning
//       }
//     </ul>
//   );
// }

// export default App;











//----------------------------------------------------------
// import React, { useState, useRef, useEffect } from 'react';


// const App = () => {
//   const cliques = useRef(0);
//   const [atualizadoEm, setAtualizadoEm] = useState(Date.now());

//   //const menor10 = cliques < 10 ? <MenorQue10 cliques={cliques} /> : null;
//   return (
//     <div>
//       <h4>Clicou {cliques.current} vezes.</h4>
//       {/* {menor10} */}

//       <button onClick={() => { 
//         cliques.current = cliques.current + 1 
//         console.log(cliques.current);
//         }}>Clique
//       </button>

//       <button onClick={() => { 
//         setAtualizadoEm(Date.now());
//         }}>Mostrar
//       </button>

//       <button onClick={() => { 
//         cliques.current = 0
//         console.log(cliques.current);
//         }}>Zerar
//       </button>
//     </div>
//   );
// };

// export default App;




//-------------------------------------------

// const MenorQue10 = ({cliques}) => {
//   useEffect(() => {
//     console.log(`Iniciado ${cliques}`);

//     return (
//       () => console.log(`Finalizado: ${cliques}`)
//     );
//   }, []);

//   return <p>menor que 10...</p>;
// }

// const App = () => {
//   const [cliques, setCliques] = useState(0);

//   const menor10 = cliques < 10 ? <MenorQue10 cliques={cliques} /> : null;

//   return (
//     <div>
//       <h4>Clicou {cliques} vezes.</h4>
//       {menor10}
//       <button onClick={() => { setCliques(cliques + 1) }}>Clique</button>
//     </div>
//   );
// };

// export default App;


//----------------------------------------------------------------------------

import './App.css';
import { faker } from '@faker-js/faker';
import React, {useState, useEffect} from "react";
import Evento from './components/Evento';
import Spinner from './components/Spinner';

const App = (props) => {
  //Hooks
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      console.log(`Carregando: ${carregando}`);
      setCarregando(false);
      setDados(objetos);
    }, 2000);
  },[]);
  
  if (carregando) {
    return <Spinner />;
  }

  return (<div className="ui feed">
      {
        dados.map(x => {
          return (<Evento
            key = {x.id} 
            nome={x.nome} 
            likes={x.likes} 
            mensagem={x.mensagem} 
            fotoPerfil={x.fotoPerfil} 
            tempo={x.tempo} 
          />);
        })
      }
    </div>);
};

const objetos = [
  {
    id:1,
    nome: faker.person.firstName(),
    likes: faker.number.int({min: 0, max: 50}),
    mensagem: faker.lorem.sentence(),
    fotoPerfil: faker.image.avatar(),
    tempo: faker.number.int({min: 0, max: 50})
  },
  {
    id:2,
    nome: faker.person.firstName(),
    likes: faker.number.int({min: 0, max: 50}),
    mensagem: faker.lorem.sentence(),
    fotoPerfil: faker.image.avatar(),
    tempo: faker.number.int({min: 0, max: 50})
  },
  {
    id:3,
    nome: faker.person.firstName(),
    likes: faker.number.int({min: 0, max: 50}),
    mensagem: faker.lorem.sentence(),
    fotoPerfil: faker.image.avatar(),
    tempo: faker.number.int({min: 0, max: 50})
  },
  {
    id:4,
    nome: faker.person.firstName(),
    likes: faker.number.int({min: 0, max: 50}),
    mensagem: faker.lorem.sentence(),
    fotoPerfil: faker.image.avatar(),
    tempo: faker.number.int({min: 0, max: 50})
  },
]
export default App;
//------------------------------------------------------------------------
// function App() {
//   return (
//     <div className='ui feed'>
//       {
//         objetos.map( x => {
//           return <Evento nome={x.nome} likes={x.likes} mensagem={x.mensagem} fotoPerfil={x.fotoPerfil} tempo={x.tempo} />
//         })
//       }
//     </div>
//   );
// }

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {feeds:[], carregado: false};
//   }

//   render(){
//     if(!this.state.carregado){
//       return (
//       <Spinner/> /*mensagem="Está carregando"*/ //conseguimos deixar uma variável declarada preenchida e substituir seu valor ao utilizar o componente em que ela pertence
//       //observe o defaultProps no componente Spinner, tem-se defaultProps definindo o valor de mensagem
//       )
//     }
//     return (
//       <div className='ui feed'>
//         {
//           this.state.feeds.map( x => {
//             return <Evento nome={x.nome} likes={x.likes} mensagem={x.mensagem} fotoPerfil={x.fotoPerfil} tempo={x.tempo} />
//           })
//         }
//       </div>
//     );
//   }
  
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ feeds: objetos, carregado: true});
      
//     },1250)
//   }
// }