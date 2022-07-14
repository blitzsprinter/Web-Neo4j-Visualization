import React from "react";
import Filter from "./filter";
import Nav from "./nav";
import { NeoGraph, ResponsiveNeoGraph } from "./NeoGraph";

const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "pass";

const App = () => {
  return (
    <div
      className="App"
      style={{ position: "flex", height: "100vh", fontFamily: "Quicksand" }}
    >
      <ResponsiveNeoGraph
        containerId={"id0"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
      />
      <Filter />
    </div>
  );
};

export default App;
