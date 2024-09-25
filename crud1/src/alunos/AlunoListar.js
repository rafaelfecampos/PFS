import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AlunoListar = () =>{
    const [objetos, setObjetos] = useState(null);

    useEffect(() =>{
        axios.get('http://localhost:3005/alunos').then(
            resposta => {
                setObjetos(resposta.data);
            }
        )
    }, [])

    if(objetos === null){
        return(
            <div>
                Loading...
            </div>
        );
    }

    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>Matrícula</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {objetos.map(x =>{
                    return (
                        <tr>
                            <td>{x.matricula}</td>
                            <td>{x.nome}</td>
                            <td><Link to={`/alunos/${x.id}`}>Consultar</Link></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

}

export default AlunoListar;