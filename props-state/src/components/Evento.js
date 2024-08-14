import React from "react";
import { faker } from '@faker-js/faker';


class Evento extends React.Component{
  constructor(props){
    super(props);
    }

    render(){
      return(
          <div className="ui feed">
        <div className="event">
          <div className="label">
            <img src={this.props.fotoPerfil}/>
          </div>
          <div className="content">
            <div className="summary">
              <a className="user">
                {this.props.nome}
              </a> {this.props.mensagem}
              <div className="date">
                {this.props.tempo} 
              </div>
            </div>
            <div className="meta">
              <a className="like">
                <i className="like icon"></i> {this.props.likes} Likes
              </a>
            </div>
          </div>
        </div>
      </div>
      )
    }
};



export default Evento;