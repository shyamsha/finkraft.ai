import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Contacts from "./Components/Contacts/Contacts";
import Experiment from "./Components/Practices/UseContext/Experiment";
import Fetching from "./Components/Practices/Fetching";
import FetchingWithUseReducer from "./Components/Practices/UseReducer/FetchingWithUseReducer";
import MultipleReducers from "./Components/Practices/UseReducer/MultipleReducers";
import CallbackHook from "./Components/Practices/UseCallBack&UseMemo/CallbackHook";
import ReducerHook from "./Components/Practices/UseReducer/ReducerHook";
import UseMemoHook from "./Components/Practices/UseCallBack&UseMemo/UsememoHook";
import UseRefHook from "./Components/Practices/UseRef/UseRefHook";
import CustomHook from "./Components/Practices/CustomHook/CustomHook";
import counterHook from "./Components/Practices/CustomHook/CounterHook";
import InputCustomHook from "./Components/Practices/CustomHook/InputCustomHook";

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
          <Route path="/fetching_callback" component={CallbackHook} exact/>
          <Route path="/use_memo" component={UseMemoHook} exact/>
          <Route path="/use_ref" component={UseRefHook} exact/>
          <Route path="/custom_hook" component={CustomHook} exact/>
          <Route path="/custom_hook1" component={counterHook} exact/>
          <Route path="/custom_hook2" component={InputCustomHook} exact/>
          <Route path="*" component={() => null} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
