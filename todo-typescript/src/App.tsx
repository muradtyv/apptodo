import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from './components/List';
import { AddToList } from './components/AddToList';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([{
    name: "Murad",
    age: 21,
    url: "https://media.licdn.com/dms/image/C4E03AQHTYIHIcj9tMw/profile-displayphoto-shrink_800_800/0/1659451160515?e=1677715200&v=beta&t=ADJN8URYKzrdAohhbHZzst6vzOd2xoddjzsU7C4Nd54",
    note: "BAckend Developer"
  }]);

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people} />
      <AddToList  people = {people} setPeople = {setPeople}/>

    </div>
  );
}

export default App;
