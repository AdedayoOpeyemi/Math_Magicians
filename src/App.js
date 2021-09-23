import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="content_container">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <div className="content_container">
              <Home />
            </div>
          </Route>
          <Route path="/calculator">
            <div className="content_container">
              <div className="view_content">
                <h3>Let us do some maths</h3>
                <Calculator />
              </div>
            </div>
          </Route>
          <Route path="/quote">
            <div className="content_container">
              <div className="view_content">
                <Quote />
              </div>
            </div>
          </Route>
          <Route path="*">
            <div className="content_container">
              <div className="view_content">
                <NotMatch />
              </div>
            </div>
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
