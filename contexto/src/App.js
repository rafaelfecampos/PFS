import React, { useState, createContext } from "react";
import Teste from "./Teste";

export const AppContext = createContext([0, () => {}]);

function App() {
  const [cliques, setCliques] = useState(0)

  return (
    <AppContext.Provider value={[cliques, setCliques]}>{/*provider é necessário para fazer com que o valor da variável seja passado, se não tiver é passadop o valor inserido no createContext()*/}
      <div className="App">
        <h1>Teste useContext</h1>
        <Teste />
      </div>
    </AppContext.Provider>
  );
}

export default App;
