import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerDetail from './components/PlayerDetail';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={PlayerList} />
          <Route path="/player/:id" component={PlayerDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
