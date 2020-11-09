// import React, { Component } from 'react';
// import getJokes from '../helpers/data/jokeData';

// export default class AppCorral extends Component {
// state = {
//   jokes: [],
// }

// componentDidMount() {
//   getJokes().then((resp) => {
//     this.setState({
//       jokes: resp,
//     });
//   });
// }

// render() {
//   const { jokes } = this.state;
//   const renderJokeToDom = () => (
//     jokes.map((joke) => < setup={joke.setup} punchline={joke.punchline} removeGoat={this.removeGoat}/>)
//   );

//   return (
//     <div>
//       <h2>Joke</h2>
//       {renderJokeToDom()}
//     </div>
//   );
// }
// }
