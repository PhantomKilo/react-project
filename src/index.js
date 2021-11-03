import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css"
import App from './Components/App/App'
import { BrowserRouter as Router } from 'react-router-dom';

// anytime a component wraps around another component...its called
// as Higher Order Component

ReactDOM.render(
    <Router>
      <App />
    </Router>, 
  
document.getElementById("root"));