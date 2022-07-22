import React from "react";
import FilterIcon from "./filterIcon";
import { ResponsiveNeoGraph } from "./NeoGraph";
import Logo from "../images/Cisco_Logo.png";

const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "pass";

const App = () => {
  return (
    <div
      className="App"
      style={{ position: "flex", height: "100vh", fontFamily: "Quicksand" }}
    >
      <img
        src={Logo}
        sizes="4"
        alt="Cisco Systems, Inc. logo"
        style={{ position: "fixed", height: "2rem", top: "2rem", left: "2rem" }}
      />
      <ResponsiveNeoGraph
        containerId={"id0"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
      />
      <FilterIcon />
    </div>
  );
};

export default App;
