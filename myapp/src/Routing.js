import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import Error from "./error";
import PatientLogin from "./patient/login";
import PatientSignup from "./patient/signup";
import PatientDashboard from "./patient/dashboard";
import PatientApplicationstatus from "./patient/Applicationstatus";
import AdminLogin from "./admin/login"; 
import AdminDashboard from "./admin/dashboard";
import AdminAddBeds from "./admin/addbeds";
import PatientTest from "./patient/test";
import PatientRetrieve from "./patient/Retirvetable"
const base_url = "http://localhost:3000";

class UrlMapping extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home
              patient={base_url + "/patient/login"}
              admin={base_url + "/admin/login"}
            />
          </Route>
          <Route exact path="/patient/login">
            <PatientLogin login={base_url + "/patient/login"} />
          </Route>
          <Route exact path="/patient/signup">
            <PatientSignup signup={base_url + "/patient/signup"} />
          </Route>
          <Route exact path="/patient/dashboard">
            <PatientDashboard dashboard={base_url + "/patient/dashboard"} />
          </Route>
          <Route exact path="/patient/applicationstatus">
            <PatientApplicationstatus applicationstatus={base_url + "/patient/login"} />
          </Route>
          <Route exact path="/patient/test">
            <PatientTest test={base_url + "/patient/test"} />
          </Route>
          <Route exact path="/patient/retrive">
            <PatientRetrieve Retrieve={base_url + "/patient/retrive"} />
          </Route>
          <Route exact path="/admin/login">
            <AdminLogin signin={base_url + "/admin/login"} />
          </Route>
          <Route exact path="/admin/dashboard">
            <AdminDashboard admin_dashboard={base_url + "/admin/dashboard"} />
          </Route>
          <Route exact path="/admin/addbeds">
            <AdminAddBeds admin_addbeds={base_url + "/admin/addbeds"} />
          </Route>
          <Router path="*">
            <Error />
          </Router>
        </Switch>
      </Router>
    );
  }
}

export default UrlMapping;
