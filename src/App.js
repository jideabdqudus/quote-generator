import React from "react";
import "./App.css";
import HeaderCard from "./component/Header/HeaderCard";
import BodyCard from "./component/Body/BodyCard";
import BodyPanel from "./component/Panel/BodyPanel";

function App() {
  return (
    <div className="App container">
      <HeaderCard />
      <BodyCard />
      <BodyPanel />
    </div>
  );
}

export default App;
