import React, {useState, useEffect} from 'react';
import './App.css'; 
import CardList from '../src/components/card-list/CardList';
import {SearchBox} from '../src/components/search-box';

function App() {

  const [users, setUsers] = useState();
  const [error, setError] = useState({});
  const [search, setSearch] = useState();
  console.log("search -------> ", users, search);
  const url = 'https://jsonplaceholder.typicode.com/users';
  useEffect(() => {
    fetch(url).then(res => res.json()).then(res => {
      setUsers(res);
    }).catch(err => {
      setError(err);
    });
  }, []);

  const filteredMonster = users? users.filter(monster => {
    return monster.name.toLowerCase().includes(search?search.toLowerCase():'');
  }) : "";
  console.log("filteredMonster --->", filteredMonster);
  
  return (
    <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox handleChange = {e => setSearch(e.target.value)}
        placeholder = 'Search Monster'/>
      <CardList monsters={filteredMonster} />
      
    </div>
  );
}

export default App;
