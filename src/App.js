import React, { Component, useState, useEffect } from "react";
import "./App.css";
import HeaderCard from "./component/Header/HeaderCard";
import BodyCard from "./component/Body/BodyCard";
import BodyPanel from "./component/Panel/BodyPanel";
import axios from "axios";

const App =()=> {
  const [apis, setApis] = useState([])

  const useEffect(() => {
    const res = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes");
    setApis(res.data)
    //esliin
  }, [])

   const componentDidMount=(async)=> {
    

  }

  
    const { apis } = this.state;
    return (
      <div className="App container">
        <HeaderCard />
        <BodyCard apis={apis} />
        <BodyPanel />
      </div>
    );
  }


export default App;
