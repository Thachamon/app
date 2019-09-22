import React, { Component } from 'react';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

//const word = "Hello";
class App extends Component {
 render() {
 return (
  <div>
    {
    <WordCard value="hanoi"/>
    }
  </div>
 );
 }
}
export default App;