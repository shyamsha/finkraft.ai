import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Contacts from "./Components/Contacts/Contacts";
import Experiment from "./Components/Practices/Experiment";
import Fetching from "./Components/Practices/Fetching";
import FetchingWithUseReducer from "./Components/Practices/FetchingWithUseReducer";
import MultipleReducers from "./Components/Practices/MultipleReducers";
import ReducerHook from "./Components/Practices/ReducerHook";
const createBrowserHistory= require("history").createBrowserHistory

let history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Contacts} exact/>
          <Route path="/experiment" component={Experiment} exact/>
          <Route path="/reducer" component={ReducerHook} exact/>
          <Route path="/multiple" component={MultipleReducers} exact/>
          <Route path="/fetching" component={Fetching} exact/>
          <Route path="/fetching_reducer" component={FetchingWithUseReducer} exact/>
          {/* <Route path="/fetching_callback" component={Fetching} exact/>
          <Route path="/fetching" component={Fetching} exact/> */}
          <Route path="*" component={() => null} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
