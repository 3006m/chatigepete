import { useState } from "react";
function inputChechecabox() {
    const [hobbies, setHobbies] = useState([]
    )
    
    const toggleHobby = (hobby) => {
        setHobbies((prev) =>
            prev.includes(hobby)
        ? prev.filter((item) => item !== hobby)
        : [...prev, hobby]
        )
    }

    return (
        <>
        <h3>Selecione seus Hobbies</h3>
        {["Ler","Correr","Viajar","Sexo"].map((hobby) => (
            <label key={hobby}>
                <input type="checkbox" value={hobby} checked={hobbies.includes(hobby)} onChange={() => toggleHobby(hobby)} />
                {hobby}
            </label>
        ))}
        <p>Hobbies: {hobbies.join(", ")}</p>
        </>
    )
}  

export default inputChechecabox;