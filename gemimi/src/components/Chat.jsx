import React, { useState, useEffect } from "react";

function ChatApi() {
  const [mensagens, setMensagens] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(1);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarComentarios() {
      try {
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        ); 

        if (!resposta.ok) {
          throw new Error(
            `Erro pra achar as parada ${resposta.status} ${resposta.statusText}`
          ); 

        }
        const comentariosObtidos = await resposta.json();

        setMensagens(comentariosObtidos.slice(0,10));
        setCarregando(false);

      } catch (err) {
        setErro(err.message);
      }
    }

    buscarComentarios();
  }, []);

  useEffect(() => {
    if (mensagens.length === 0) return;

    const idIntervalo = setInterval(() => {
      if (indiceAtual < mensagens.length) {
        setIndiceAtual((indiceAnterior) => indiceAnterior + 1);
      } else {
        clearInterval(idIntervalo);
      }
    }, 1000);

    return () => clearInterval(idIntervalo);
  }, [mensagens, indiceAtual]);

  if (carregando) return <h2>carregando as parada</h2>;

  if (erro) return <h2>Opa, deu erro: {erro}</h2>;


  return (
    <div>
      <h2>Chat API</h2>
      <div>
        {mensagens.slice(0, indiceAtual).map((mensagem) => (
          <div key={mensagem.id}>
            <strong>{mensagem.email}:</strong> {mensagem.body}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatApi;
