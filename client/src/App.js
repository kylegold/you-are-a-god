// Dependencies;
// =============:
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useGlobalContext } from "./context/GlobalContext";
import './App.css';
import Home from './pages/Home'

function App() {
  return (
  <Router>
    <div className="App">
					<Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
    </div>
    </Router>
  );
}

export default App;
