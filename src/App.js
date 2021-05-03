import React from "react";
import Header from "./components/Header";
import axios from "axios";

export default class App extends React.Component {
  state = {
    users: [],
    isLoading: false,
    errorMsg: "",
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("https://randomuser.me/api/?page=0&results=25")
      .then((response) => {
        this.setState({ users: response.data.results, errorMsg: "" });
      })
      .catch((error) =>
        this.setState({
          errorMsg: "Error while loading data. Try again later.",
        })
      )
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { users, isLoading, errorMsg } = this.state;
    console.log(users);

    return (
      <div className="main-section">
        <Header />
        {isLoading && <p className="loading">Loading...</p>}
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      </div>
    );
  }
}
