import React from "react";
import Counter from "../components/Counter";
import FieldAddKey from "../components/FieldAddKey";
import ListKeys from "../components/ListKeys";
import Perso from "../components/Perso";
import ReadFile from "../components/ReadFile";

const Home: React.FC = () => {
  return (
    <>
      <Counter />
      <Perso />
      <ReadFile />
      <FieldAddKey />
      <ListKeys />
    </>
  );
};

export default Home;
