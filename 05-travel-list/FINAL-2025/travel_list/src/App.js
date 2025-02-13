import "./App.css";
import React from "react";

function Logo() {
  return (
    <div>
      <h1>Travel Packing List</h1>
      <img className="App-logo" alt="logo" />;
    </div>
  );
}

function Form() {
  return (
    <div className="add-form">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function PackingList() {
  const items = ["Toothbrush", "Passport", "Socks"];

  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  const totalItems = 3;
  const packedItems = 1;

  return (
    <div>
      <footer>You have</footer>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
