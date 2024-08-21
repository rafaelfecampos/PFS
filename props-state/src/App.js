import React, { useState, useEffect } from 'react';


const MenorQue10 = () => {
  useEffect(() => {
    console.log(`Iniciado`);

    return (
      () => console.log(`Finalizado`)
    );
  }, []);

  return <p>menor que 10...</p>;
}

const App = () => {
  const [cliques, setCliques] = useState(0);

  const menor10 = cliques < 10 ? <MenorQue10 /> : null;

  return (
    <div>
      <h4>Clicou {cliques} vezes.</h4>
      {menor10}
      <button onClick={() => { setCliques(cliques + 1) }}>Clique</button>
    </div>
  );
};

export default App;




// import './App.css';
// import { faker } from '@faker-js/faker';
// import React, {useState, useEffect} from "react";
// import Evento from './components/Evento';
// import Spinner from './components/Spinner';

// const App = (props) => {
//   //Hooks
//   const [dados, setDados] = useState([]);
//   const [carregando, setCarregando] = useState(true);
  
//   useEffect(() => {
//     setTimeout(() => {
//       console.log(`Carregando: ${carregando}`);
//       setCarregando(false);
//       setDados(objetos);
//     }, 2000);
//   },[]);
  
//   if (carregando) {
//     return <Spinner />;
//   }

//   return (<div className="ui feed">
//       {
//         dados.map(x => {
//           return (<Evento 
//             nome={x.nome} 
//             likes={x.likes} 
//             mensagem={x.mensagem} 
//             fotoPerfil={x.fotoPerfil} 
//             tempo={x.tempo} 
//           />);
//         })
//       }
//     </div>);
// };

// const objetos = [
//   {
//     nome: faker.person.firstName(),
//     likes: faker.number.int({min: 0, max: 50}),
//     mensagem: faker.lorem.sentence(),
//     fotoPerfil: faker.image.avatar(),
//     tempo: faker.number.int({min: 0, max: 50})
//   },
//   {
//     nome: faker.person.firstName(),
//     likes: faker.number.int({min: 0, max: 50}),
//     mensagem: faker.lorem.sentence(),
//     fotoPerfil: faker.image.avatar(),
//     tempo: faker.number.int({min: 0, max: 50})
//   },
//   {
//     nome: faker.person.firstName(),
//     likes: faker.number.int({min: 0, max: 50}),
//     mensagem: faker.lorem.sentence(),
//     fotoPerfil: faker.image.avatar(),
//     tempo: faker.number.int({min: 0, max: 50})
//   },
//   {
//     nome: faker.person.firstName(),
//     likes: faker.number.int({min: 0, max: 50}),
//     mensagem: faker.lorem.sentence(),
//     fotoPerfil: faker.image.avatar(),
//     tempo: faker.number.int({min: 0, max: 50})
//   },
// ]
// export default App;
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