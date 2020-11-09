import React, { Component } from 'react';
import getJokes from '../helpers/data/jokeData';
import Setup from './Setup';
import Punchline from './Punchline';

class App extends Component {
  state = {
    jokes: [],
    showSetup: false,
    showPunchline: false,
    getNewJoke: false,
  };

  componentDidMount() {
    getJokes().then((resp) => {
      this.setState({
        jokes: resp,
      });
    });
  }

  // Get new joke data from API, print joke setup to DOM
  getNewJoke = () => {
    getJokes().then((resp) => {
      this.setState({
        jokes: resp,
        showSetup: true,
        showPunchline: false,
        getNewJoke: false,
      });
    });
  }

  // Print joke setup to DOM
  showSetup = () => {
    this.setState({
      showSetup: true,
      showPunchline: false,
      getNewJoke: false,
    });
  }

  // Print punchline to DOM
  showPunchline = () => {
    this.setState({
      showPunchline: true,
      getNewJoke: false,
    });
  }

  render() {
    const { setup, punchline } = this.state.jokes;
    const { showSetup, showPunchline, getNewJoke } = this.state;
    // const setup = this.state.jokes.setup
    // {
    //   id:
    //   type:
    //   setup:
    //   punchline:
    // }

    // Make button dynamic based on state logic
    let jokeButton;
    if (showSetup === false && showPunchline === false) {
      jokeButton = <button onClick={() => this.showSetup()}>get joke</button>;
    } else if (showSetup === true && showPunchline === false) {
      jokeButton = <button onClick={() => this.showPunchline()}>get punchline</button>;
    } else if (showSetup === true && showPunchline === true) {
      jokeButton = <button onClick={() => this.getNewJoke()}>get new joke</button>;
    }
    return (
      <div className="App">
        {showSetup ? <Setup setup={setup}/> : null}
        {showPunchline ? <Punchline punchline={punchline}/> : null}
        {getNewJoke ? <Setup setup={setup}/> : null}
        { jokeButton }
      </div>
    );
  }
}

export default App;
