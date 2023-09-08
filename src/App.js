import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

import Navbar from './components/Navbar';

function App() {

  const [busca, setBusca] = useState ('');
  
  return (
    <div className="App">
      <Header value={busca} onchange={(e) => setBusca(e.target.value)} />

      <Navbar />
    </div>
  );
}

export default App;
