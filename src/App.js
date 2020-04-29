import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Signup from "./Components/Authentication/Signup";

function App() {
  return (
    <section>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </section>
  );
}

export default App;
