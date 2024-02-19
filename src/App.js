import { FiSearch } from "react-icons/fi";

import './style.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..." 
        />

        <button className="buttonSearch">
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