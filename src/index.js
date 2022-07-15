import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App";
import "./typography.css";
//neo4j stuff
import { Neo4jProvider, createDriver } from "use-neo4j";

const driver = createDriver("bolt", "localhost", 7687, "neo4j", "pass");

ReactDOM.render(
  <Neo4jProvider driver={driver}>
    <App />
  </Neo4jProvider>,
  document.getElementById("root")
);
registerServiceWorker();
