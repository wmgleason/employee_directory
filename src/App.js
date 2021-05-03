import React from 'react';
import './App.css';
import axios from "axios";
import SiteHead from './components/Header';
import Navbar from './components/Navbar';


class App extends React.Component {

  state = {
    employees: [],
  };

//   if component mounts, do...
  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=25`)
        .then(res => {
          this.setState({ employees: res.data.results });
        });
  }


  render() {
    return (
      <div className="App">
        <SiteHead />
        {this.state.employees.length > 0 &&
        <Navbar employees={this.state.employ
      </div>
    );
  }
}

export default App;
