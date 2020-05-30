import React, { useState, useEffect } from "react";
import "./App.css";
import HeaderCard from "./component/Header/HeaderCard";
import BodyCard from "./component/Body/BodyCard";
import BodyPanel from "./component/Panel/BodyPanel";
import axios from "axios";

const App = () => {
  const [apis, setApis] = useState([]);

  useEffect( () => {
    const fetchApi = async ()=>{
    const res = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes");
    setApis(res.data);
    //eslint-disable-next-line
  };
  fetchApi()
}, []);

  return (
    <div className="App container">
      <HeaderCard />
      <BodyCard apis={apis} />
      <BodyPanel />
    </div>
  );
};

export default App;
