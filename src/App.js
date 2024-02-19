import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './style.css'

import api from "./services/api";


function App() {

  const [input, setInput] = useState('')

  async function handleSearch() {
    
    
    if(input ===''){
      alert('Preencha um CEP')
      return
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response)

    }catch{
      alert("Erro ao buscar");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..." 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 45648741</h2>

        <span>Rua teste</span>
        <span>Complemento: Casa/AP</span>
        <span>Bairro</span>
        <span>Localidade/Estado</span>
      </main>

    </div>
  );
}

export default App;