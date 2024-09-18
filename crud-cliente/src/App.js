import React, {useEffect} from "react";
import axios from "axios";


function App() {
  useEffect(() =>{
    axios.get("http://localhost:3005/feeds")
      .then(
        result => console.log(result.data)
      );
  });


  return (
    <div>
      Teste
    </div>
  );
}

export default App;
