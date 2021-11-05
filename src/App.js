import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

//https://jsonplaceholder.typicode.com/users
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchfield: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  render(){ 
    const{monsters, searchfield} = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
    <div className="App">
      <input 
      type='search' 
      placeholder='search monsters' 
      onChange={e => 
        this.setState({searchfield: e.target.value})} 
      />
      <CardList monsters={filteredMonsters} />
      
    </div>
  );
  }
}

export default App;
