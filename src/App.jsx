import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import viteLogo from '/vite.svg';
import './App.css';
import Index from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
