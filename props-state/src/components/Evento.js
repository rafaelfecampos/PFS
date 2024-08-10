import React from "react";
import { faker } from '@faker-js/faker';


const Evento = (props) => {
    return(
        <div className="ui feed">
      <div className="event">
        <div className="label">
          <img src={faker.image.avatar()}/>
        </div>
        <div className="content">
          <div className="summary">
            <a className="user">
              {props.nome}
            </a> says that Botafogo is the best
            <div className="date">
              1 Hour Ago
            </div>
          </div>
          <div className="meta">
            <a className="like">
              <i className="like icon"></i> {props.likes} Likes
            </a>
          </div>
        </div>
      </div>
    </div>
    )
};



export default Evento;