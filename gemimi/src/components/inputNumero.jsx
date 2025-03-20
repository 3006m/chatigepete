import { useState } from "react";

function InputNum() {
  const [idade, setIdade] = useState();
  return (
    <div>
        
      <h5>Escreva a sua Idade.</h5>
      <input
        type="number"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        placeholder="Digite a sua idade."
      />
      {idade && (
        <p>
            {idade < 18 ? `voce tem ${idade} anos, você é menor de idade` : `voce tem ${idade} anos, você é maior de idade`}
        </p>
      )}
    </div>
  );

}
export default InputNum;
