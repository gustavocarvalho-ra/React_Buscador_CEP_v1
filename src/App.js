
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..." 
        />

        <button className="buttonSearch">Procurar</button>
      </div>

    </div>
  );
}

export default App;