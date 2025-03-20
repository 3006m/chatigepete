import React, { useState, useEffect } from "react";

function LocalTeste() {
  const [name, setName] = useState("");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nome");
    if (nomeSalvo) {
      setName(nomeSalvo);
    }
  }, []);

  const handleSave = () => {
    // Save the name to localStorage
    localStorage.setItem("nome", name);
  };

  const handleClear = () => {
    // Remove the name from localStorage and clear the state
    localStorage.removeItem("nome");
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Coloque o seu nome"
      />
      <button onClick={handleSave}>Salvar</button>
      <button onClick={handleClear}>Limpar</button>
      {name && <p>Nome Guardado {name}</p>}
    </div>
  );
}

export default LocalTeste;
