import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const AlunoListar = () =>{
    const [objetos, setObjetos] = useState(null);
    const navigate = useNavigate();

    
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
    
    const excluir = id =>{
        axios.delete(`http://localhost:3005/alunos/${id}`).then(
            resposta => {
                if(resposta.status === 200){
                    navigate(0)
                }
            }
        )
    }
    
    return(
        <div>
        <Link to="/alunos-inserir">Inserir</Link>
       
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
                            <td>
                                <Link to={`/alunos/${x.id}`}>Consultar</Link>
                                <button onClick={()=> excluir(x.id)}>Excluir</button>
                                <Link to={`/alunos-alterar/${x.id}`}>Alterar</Link>
                                
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    );

}

export default AlunoListar;