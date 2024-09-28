import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"

const getNovoAluno = () =>{
    return {matricula:0, nome:""}
}

const AlunoInserir = () =>{
    const [objeto, setObjeto] = useState(getNovoAluno());
    const navigate = useNavigate();

    const salvar = () =>{
        axios.post('http://localhost:3005/alunos', objeto).then(
            resposta => {
                if(resposta.status === 201){
                    navigate("/alunos")
                }
            }
        )
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
            <button onClick={salvar}>Salvar</button>
            <Link to="/alunos">Voltar</Link>
        </div>
    );
};

export default AlunoInserir;