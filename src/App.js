import React, { Component } from "react";
import "./App.css";
import HeaderCard from "./component/Header/HeaderCard";
import BodyCard from "./component/Body/BodyCard";
import BodyPanel from "./component/Panel/BodyPanel";

class App extends Component {
  state = {
    apis: [
      {
        quote:
          "When I look at people I don't see colors; I just see crackpot religions.",
        character: "Chief Wiggum",
      },
    ],
  };

  render() {
    const {apis} = this.state
    return (
      <div className="App container">
        <HeaderCard />
        <BodyCard apis={apis} />
        <BodyPanel />
      </div>
    );
  }
}

export default App;
