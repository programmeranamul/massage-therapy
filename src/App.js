import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/HomePage/Home/Home';
import LogIn from './Component/AdminPage/LogIn/LogIn'
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import DashBoard from './Component/AdminPage/DashBoard/DashBoard';
import PrivateRoute from './Component/AdminPage/PrivateRoute/PrivateRoute';
export const userContext = createContext();

function App() {
  const [logedInUser, setLogedInUser] = useState({});
  return (
    <userContext.Provider value={[logedInUser, setLogedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path="/admin">
            <DashBoard />
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
