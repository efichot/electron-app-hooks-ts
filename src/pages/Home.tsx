import React from "react";
import Counter from "../components/Counter";
import Perso from "../components/Perso";
import ReadFile from "../components/ReadFile";

const Home: React.FC = () => {
  return (
    <>
      <Counter />
      <Perso />
      <ReadFile />
    </>
  );
};

export default Home;
