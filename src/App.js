import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Header from './users/components/ui/Header';
import Footer from './users/components/ui/Footer';

import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
