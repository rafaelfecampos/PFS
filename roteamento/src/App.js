import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";
import Pagina3 from "./Pagina3";

const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/bla" element={<Layout/>}>
                    <Route index element={<Pagina1/>}/>
                    <Route path="pagina1" element={<Pagina1/>}/>
                    <Route path="pagina2" element={<Pagina2/>}/>
                    <Route path="pagina3" element={<Pagina3/>}/>
                </Route>
                    <Route path="pagina3" element={<Pagina3/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;