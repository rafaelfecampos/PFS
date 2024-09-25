import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AlunoConsultar = () =>{
    const [objeto, setObjeto] = useState(null);
    const {id} = useParams(); //pega o valor do parametro de mesmo nome da url de direcionamento

    useEffect(() =>{
        axios.get(`http://localhost:3005/alunos/${id}`).then(
            resposta => {
                setObjeto(resposta.data);
            }
        )
    }, [])
    if(objeto === null){
        return(
            <div>
                Carregando...
            </div>
        );
    }

    return (
        <div>
            <label>
                Matrícula<input type="text" readOnly={true} value={objeto.matricula} />
            </label>
            <br/>
            <label>
                Nome<input type="text" readOnly={true} value={objeto.nome} />
            </label>
        </div>
    );
};

export default AlunoConsultar;