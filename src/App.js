import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home';
import SingleBlog from './SingleBlog';

function App(){
    return (
      <Router >
      <div className="App">
          <Navbar />
          
          <Switch>
              <Route path="/blog/:id" exact component={SingleBlog}/>
          
              <Route path="/" component={Home}/>

          </Switch>
          
      </div>
      </Router>
    );
}

export default App;