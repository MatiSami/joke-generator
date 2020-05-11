import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./app.modules.scss";

import Joke from "./Components/Joke";

class App extends Component {
  state = {
    setup: "",
    delivery: "",
    joke: "Czekam na joke",
    type: "",
  };

  handleSubmit = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Any")
      .then((response) => response.json())
      .then((res) => {
        // this.setState({
        //   joke: res.joke,
        // });
        console.log(res);
        if (res.type === "twopart") {
          this.setState({
            setup: res.setup,
            delivery: res.delivery,
            type: res.type,
            joke: "",
          });
        } else {
          this.setState({
            joke: res.joke,
            type: res.type,
          });
        }
      });
  };

  render() {
    return (
      <Container>
        <div className="App">
          <Joke
            type={this.state.type}
            setup={this.state.setup}
            delivery={this.state.delivery}
            joke={this.state.joke}
          />
          <button className="btn btn-danger" onClick={this.handleSubmit}>
            Losuj dowcip
          </button>
        </div>
      </Container>
    );
  }
}

export default App;
