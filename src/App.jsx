import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Result from './pages/Result';
import Search from './pages/Search';
import { Container, Navbar } from 'react-bootstrap';

const App = () => {
  
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Q&A Delivery Service</Navbar.Brand>
        </Container>
      </Navbar>
      <Route exact path='/' component={Search} />
      <Route exact path='/result/:videoId' component={Result} />
    </Router>
  );
}

export default App;
