import React, { Component } from "react";
import "./App.css";
import HeaderCard from "./component/Header/HeaderCard";
import BodyCard from "./component/Body/BodyCard";
import BodyPanel from "./component/Panel/BodyPanel";
import axios from "axios";

class App extends Component {
  state = { apis: [], loading: false };

  async componentDidMount() {

    this.setState({loading: true})

    const res = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes");

    this.setState({ apis: res.data, loading: false });

    console.log(res.data);
  }

  if(loading){
    return (<h1>Loading...</h1>)
  }

  render() {
    const { apis } = this.state;
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
