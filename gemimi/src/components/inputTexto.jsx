import { useState } from "react";

function InputTexto() {
  const [texto, setTexto] = useState("");

  const clearTexto = () => {
    setTexto("");
  };

  return (
    <div>
        
      <h5>Escreva algo.</h5>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite um texto"
      />
      
      <button onClick={clearTexto}>Limpar</button>
      <h4>seu texto: {texto}</h4>
    </div>
  );
}
export default InputTexto;
