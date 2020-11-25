import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';
import Header from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import { Container, } from 'react-bootstrap';
import HeaderImg from "./components/layout/header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
    <Router>
      <>
        <Header />
        <HeaderImg />
        <Container>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </Container>
      </>
    </Router>
    </Provider>
  );
}

export default App;
