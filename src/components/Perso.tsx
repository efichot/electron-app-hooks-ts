import React, { useEffect } from "react";
import { useGlobal } from "reactn";

const Perso: React.FC = () => {
  const [persos, setPerso] = useGlobal("persos");
  useEffect(() => {
    console.log("cdu Perso");
  });

  return (
    <>
      {persos.map(perso => (
        <div key={perso.name}>
          <h4>{perso.name}</h4>
          <small>{perso.age}</small>
        </div>
      ))}
      <button
        onClick={() => setPerso([...persos, { name: "Arthur", age: 26 }])}
      >
        add Arthur
      </button>
    </>
  );
};

export default Perso;
