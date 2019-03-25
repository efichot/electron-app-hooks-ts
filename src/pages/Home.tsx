import React from "react";
import FieldAddKey from "../components/FieldAddKey";
import ListKeys from "../components/ListKeys";
import ReadFile from "../components/ReadFile";

const Home: React.FC = () => {
  return (
    <>
      <ReadFile />
      <FieldAddKey />
      <ListKeys />
    </>
  );
};

export default Home;
