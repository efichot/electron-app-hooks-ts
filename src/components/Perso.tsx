import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useGlobal } from "reactn";

const useStyles = makeStyles(theme => ({
  button: {
    fontSize: "20px"
  }
}));

const Perso: React.FC = () => {
  const classes = useStyles();
  const [persos, setPerso] = useGlobal("persos");

  return (
    <div>
      {persos.map(perso => (
        <div key={perso.name}>
          <h4>{perso.name}</h4>
          <small>{perso.age}</small>
        </div>
      ))}
      <Button
        onClick={() => setPerso([...persos, { name: "Arthur", age: 26 }])}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        add Arthur
      </Button>
    </div>
  );
};

export default Perso;
