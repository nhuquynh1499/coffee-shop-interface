import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Header from './share/components/partials/Header';
import Footer from './share/components/partials/Footer';

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
