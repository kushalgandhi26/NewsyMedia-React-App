import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const apiKey=process.env.REACT_APP_NEWS_API_KEY
  const pageSize = 15;

  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress={setProgress} key="General" pageSize={pageSize} apiKey={apiKey} country="in" category="general" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={setProgress} key="Technology" pageSize={pageSize} apiKey={apiKey} country="in" category="technology" />
            </Route>
            <Route exact path="/business">
              <News setProgress={setProgress} key="Business" pageSize={pageSize} apiKey={apiKey} country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={setProgress} key="Entertainment" pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment" />
            </Route>
            <Route exact path="/health">
              <News setProgress={setProgress} key="Health" pageSize={pageSize} apiKey={apiKey} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News setProgress={setProgress} key="Science" pageSize={pageSize} apiKey={apiKey} country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={setProgress} key="Sports" pageSize={pageSize} apiKey={apiKey} country="in" category="sports" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
}

export default App