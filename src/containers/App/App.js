// @flow
import React, { Component } from "react";
import logo from "./logo.svg";
import Button from "../../components/Button";
import "./App.css";

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Button text="Click Me" className="is-primary" />
  </div>
);

export default App;
