
import { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import './App.css';

const App = () => {

  return (
    <div className='App'>
      <h1 className="app-title">Monster Party</h1>
    
      {/*  <SearchBox 
       onChangeHandler={onSearchChange} 
       placeholder='search monsters'
       className='monsters-search-box' />
       <CardList monsters={filteredMonsters}  />
        </div> */}
    </div>
  );
      }
{/* class App extends Component {
 constructor() {
   super();

    this.state = {
      monsters: [],
      searchField: '',
    };
 }

 componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
       this.setState(() => {
        return { monsters: users }; 
       })
      );
} */}{/* 
// returns and updates search results
  onSearchChange =  (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }
  render() {
  //  declaring variables for state to clean up and optimize code
    const { monsters, searchField} = this.state;
    const { onSearchChange } = this;
  // when deleting letters in search box the filter reverses to normal per letter
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
    <div className='App'>
      <h1 className="app-title">Monster Party</h1>
       <SearchBox 
       onChangeHandler={onSearchChange} 
       placeholder='search monsters'
       className='monsters-search-box' />
       <CardList monsters={filteredMonsters}  />
        </div>
  );
}
}
 */}

export default App;
