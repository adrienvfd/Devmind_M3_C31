import React from 'react';
import logo from './logo.svg';
import './App.css';
import NoteList from './component/NoteList';
import AddNote from './component/AddNote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Notes" style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%"}}>
          <NoteList/>
          <div><AddNote/></div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
