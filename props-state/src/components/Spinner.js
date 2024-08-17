import React from "react";

// class Spinner extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return (
//             <div>
//                 <div class="ui active inline loader"></div>
//             </div>);
//     }
// }
const Spinner = ({mensagem}) => {  //js é muita doidera/// declarar como objeto faz com que nao precisa especificar
    return (
        <div className="ui active dimmer">
          <div className="ui text loader">{mensagem}</div>
        </div>    
    );
}

Spinner.defaultProps = {
    mensagem: 'Carregando...'
};
export default Spinner;
