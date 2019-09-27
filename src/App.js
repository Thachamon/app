import React, { Component } from 'react';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';


//const word = "Hello";
class App extends Component {
  newgame = () => {
    window.location.reload(false);
  }

 render() {
 return (
  <div>
    {
    <WordCard value="hanoi"/>
    }
    <button id="newgame" className="button" onClick={this.newgame} class="buttons">New Game</button>
  </div>
 );
 }
}
export default App;