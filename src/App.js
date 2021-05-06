import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Header from './users/components/ui/Header';
import Footer from './users/components/ui/Footer';

import Routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
