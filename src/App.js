import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((user) => this.setState({ monsters: user }))
    );
  }
  handleSearch(e) {
    this.setState({ searchField: e.target.value }, () => {
      console.log('searchField');
    });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMostered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Rolodex </h1>
        <SearchBox
          placeholder='Search Monster'
          handleSearch={this.handleSearch}
        />
        <CardList monsters={filteredMostered} />
        <div className='footer'>
          &copy; 2021 <a href='https://github.com/maescode'>maescode</a>
        </div>
      </div>
    );
  }
}

export default App;
