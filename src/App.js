import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store';

import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Provider store={store}>
            <div>
              <Navbar/>
              <Switch>
                <Route path="/post" component={Post}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/" component={Posts}></Route>
              </Switch>
            </div>
          </Provider>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
