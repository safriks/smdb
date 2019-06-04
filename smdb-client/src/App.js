import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Layout.css";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AllMusic from "./pages/AllMusic";

function App() {
  return (
    <>
      <Navbar />

      <div className="app-container">
        <Route exact path="/" component={Landing} />
        <Route exact path="/all_music" component={AllMusic} />
      </div>
    </>
  );
}

export default App;
