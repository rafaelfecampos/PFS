import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AlunoListar from "./alunos/AlunoListar.js";
import AlunoConsultar from "./alunos/AlunoConsultar.js";
import AlunoInserir from "./alunos/AlunoInserir.js";
import AlunoAlterar from "./alunos/AlunoAlterar.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<div>Pagina inicial aqui</div>} />
          <Route path='alunos' element={<AlunoListar />} />
          <Route path='alunos/:id' element={<AlunoConsultar/>} />
          <Route path='alunos-inserir' element={<AlunoInserir/>} />
          <Route path='alunos-alterar/:id' element={<AlunoAlterar/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
