import React, { Component } from "react";
import App from "./App";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sazzad",
    };
  }

  render() {
    // Here i am passing state varibale called name to APP component
    return (
      <div>
        <App key="App" {...this.state} />
      </div>
    );
  }
}
