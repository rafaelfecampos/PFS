import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const AlunoAlterar = () =>{
    const [objeto, setObjeto] = useState(null);
    const {id} = useParams(); //pega o valor do parametro de mesmo nome da url de direcionamento
    const navigate = useNavigate();

    const alterar = () =>{
        axios.put(`http://localhost:3005/alunos/${id}`, objeto).then(
            resposta => {
                if(resposta.status === 200){
                    navigate("/alunos")
                }
            }
        )
    }

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
            <div>
                <label>
                    Matrícula<input type="text" 
                    value={objeto.matricula} 
                    onChange={e => setObjeto({...objeto, matricula: e.target.value})}/>
                </label>
                <br/>
                <label>
                    Nome<input type="text"
                    value={objeto.nome} 
                    onChange={e => setObjeto({...objeto, nome: e.target.value})}/>
                </label>
            </div>
            <button onClick={() => alterar()}>Alterar</button>
            <Link to="/alunos">Voltar</Link>
        </div>
    );
};

export default AlunoAlterar;