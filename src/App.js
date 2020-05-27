import React, { Component } from "react";
import "./App.css";
import HeaderCard from "./component/Header/HeaderCard";
import BodyCard from "./component/Body/BodyCard";
import BodyPanel from "./component/Panel/BodyPanel";
import axios from "axios";

class App extends Component {
  state = {apis:[]};

  async componentDidMount() {
    const res = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );

    this.setState({ apis: res.data });

    console.log(res.data);
    console.log(this.state.apis);
  }

  render() {
    const { apis } = this.state;
    return (
      <div className="App container">
        {apis.map((api) => (
          <h1>
            <i>" {api.quote} "</i>
          </h1>
        ))}
        <HeaderCard />
        <BodyCard apis={apis} />
        <BodyPanel />
      </div>
    );
  }
}

export default App;
