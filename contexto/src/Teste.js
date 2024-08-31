import React, {useContext, useDebugValue} from "react";
import { AppContext } from "./App"; //utiliza chaves porque ele não está sendo exportado como default


const Teste = () => {
    const [cliques, setCliques] = useContext(AppContext);

    return (
        <div>
            <h4>Teste</h4>
            <p>{cliques} cliques</p>
            <button onClick={() => setCliques(cliques + 1)}>ok</button>
        </div>
    )
};

export default Teste;