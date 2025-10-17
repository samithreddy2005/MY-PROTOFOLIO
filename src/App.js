// ...existing code...
import React from 'react';
// { changed code }
import Home from './pages/Home';
// ...existing code...
import { HashRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
// ...existing code...