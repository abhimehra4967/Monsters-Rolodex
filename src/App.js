
import React ,{Component} from 'react';
import './App.css';
import {SearchBox} from './components/search/search.component';


import {CardList} from "./components/cardList/card-list.component";

class App extends Component{
  constructor(){
    super();
    this.state={
      avengers :[],
      searchField:""
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(response=>this.setState({avengers:response}))
  }
  render(){
    const {avengers ,searchField} = this.state;
    console.log();
    const filteredMonsters = avengers.filter(monster=>monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
     <div className="App">

       <h1 className = "heading">Monsters Rolodex</h1>
       <SearchBox
       placeholder = 'search-monsters'
       handleChange = {s=>this.setState({searchField:s.target.value})}
       / >
       
        <CardList avengers = {filteredMonsters}>
        
          </CardList> 
       
      </div>
    );
  }
}

export default App;
