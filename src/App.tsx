import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// Pages
import IndexPage from "./pages/index/index.page";

function App() {
  return (
    <Router>
      <div className={"bg-white w-100 h-100"}>
          <Switch>
              <Route path={"/"}><IndexPage/></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
