import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


// Connection to a broadcast channel
const bc = new BroadcastChannel('test_channel');

// A handler that only logs the event to the console:
bc.onmessage = event => { console.log(event); }

function App() {

  useEffect(() => {

  }, [])

  function PostMessage() {
    bc.postMessage("sent from broadcastChannel test")
  }


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
        <button onClick={PostMessage}>postMessage</button>
      </header>
    </div>
  );
}

export default App;
