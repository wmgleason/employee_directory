import axios from "axios";
import React from "react";
import Header from "./components/Header";
import "../styles/main.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="main-section">
        <Header />
        <h2>Directory</h2>
      </div>
    );
  }
}
