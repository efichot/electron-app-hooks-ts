import { Button, CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useGlobal } from "reactn";

const Counter: React.FC = () => {
  const [number, setNumber] = useGlobal("number");
  const [loading, setloading] = useState(false);

  return (
    <div>
      <Button
        disabled={loading}
        color="primary"
        variant="contained"
        onClick={() => {
          setloading(true);
          setTimeout(() => {
            setNumber(number + 1);
            setloading(false);
          }, 2000);
        }}
      >
        {loading ? (
          <CircularProgress size={24} style={{ color: "green" }} />
        ) : (
          number
        )}
      </Button>
    </div>
  );
};

export default Counter;
