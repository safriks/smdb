import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Layout.css";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AllMusic from "./pages/AllMusic";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/all_music" component={AllMusic} />
        <Route exact path="/all_music/:id" component={AllMusic} />
      </Switch>
    </div>
  );
}

export default App;
