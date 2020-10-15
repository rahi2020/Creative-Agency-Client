import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DashBoard from './Components/DashBoard/DashBoard';
import ServiceList from './Components/ServiceList/ServiceList';
import Review from './Components/Review/Review';
import AddService from './Components/AddService/AddService';
import Admin from './Components/Admin/Admin';

export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({}); 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/addService">
            <AddService></AddService>
          </Route>
          <Route exact path="/admin">
            <Admin></Admin>
          </Route>
          <PrivateRoute exact path="/service">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <Route exact path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
