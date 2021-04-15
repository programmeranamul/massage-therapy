import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/HomePage/Home/Home';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
