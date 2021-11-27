import { useRef } from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

import "./App.scss";

const App = () => {
  const main = useRef(null);

  return (
    <div id="app">
      <Header scrollTo={main} />
      <div id="scrollTo" ref={main}></div>
      <Main />
    </div>
  );
};

export default App;
