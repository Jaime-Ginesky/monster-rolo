
import { Component } from 'react';

import './App.css';

class App extends Component {
 constructor() {
   super();

    this.state = {
      monster1: {
        name: 'Linda',
        id: '12e34'
      },
      monster2: {
        name: 'Frank',
        id: 'e1212e4'
      },
      monster3: {
        name: 'Jacky',
        id: '23e23e'
      }
    };
 }
  render() {
  return (
    <div className="App">
       {this.state.monsters.map((monster) => {
        return <div key={monster.id}>
          <h1>{monster.name}</h1>
          </div>
       })}
    </div>
  );
}
}


export default App;
