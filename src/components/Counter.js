import React, { useGlobal } from "reactn";

export default function Counter() {
  const [number, setNumber] = useGlobal("number");
  const [persos, setPerso] = useGlobal("persos");

  return (
    <div>
      {persos.map(perso => (
        <div key={perso.name}>
          <h4>{perso.name}</h4>
          <small>{perso.age}</small>
        </div>
      ))}
      <button onClick={() => setNumber(number + 1)}> {number}</button>
      <button
        onClick={() => setPerso([...persos, { name: "Arthur", age: 26 }])}
      >
        add Arthur
      </button>
    </div>
  );
}
