import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
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
        <HashRouter>
          <div className="page_content">
            <div className="navigation">
              <div className="view_content">
                <Navbar />
              </div>
            </div>
            <Switch>
              <Route exact path="/">
                <div className="content_container">
                  <div className="view_content">
                    <Home />
                  </div>
                </div>
              </Route>
              <Route path="/calculator">
                <div className="content_container">
                  <div className="view_content calculator_page">
                    <div>
                      <h3>Let us do some maths this is fun!</h3>
                    </div>
                    <div>
                      <Calculator />
                    </div>
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
          </div>
        </HashRouter>
      </>
    );
  }
}

export default App;
