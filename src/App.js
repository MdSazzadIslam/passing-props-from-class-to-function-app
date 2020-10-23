import React from "react";

import "./App.css";

const App = (props) => {
  //Here App component recieve a state variable called name  from Home component
  return (
    <div className="App">
      <h1>Hellow Mr. {props.name}</h1>
    </div>
  );
};

export default App;
