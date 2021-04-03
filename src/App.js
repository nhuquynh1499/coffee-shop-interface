import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Header from './components/partials/header';
import Routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
