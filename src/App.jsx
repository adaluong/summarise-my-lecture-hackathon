import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Result from './pages/Result';
import Search from './pages/Search';

const App = () => {
  
  return (
    <Router>
      <Route exact path='/' component={Search} />
      <Route exact path='/result/:videoId' component={Result} />
    </Router>
  );
}

export default App;
