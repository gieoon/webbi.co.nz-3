import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import './checkbox.css';
import './mobile.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import CaseStudypage from './pages/CaseStudypage';
import ScrollTo from './components/ScrollTo';

function App() {
  return (
    <div className="App">
      <Router> {/* history={history} */}
        <Header />
        <Switch>
          <Route path="/case-studies/:projectName">
            <ScrollTo />
            <CaseStudypage />
          </Route>
          <Route path="/about">
            <Aboutpage />
          </Route>
          <Route path="/">
            <ScrollTo />
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

