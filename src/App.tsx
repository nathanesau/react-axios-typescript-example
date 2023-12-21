import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { GoogleLogin } from '@react-oauth/google';

import AddTutorial from "./components/add-tutorial-component";
import Tutorial from "./components/tutorial-component";
import TutorialsList from "./components/tutorials-list-component";

class App extends Component {
  responseMessage = (response: any) => {
    console.log(response);
  };
  errorMessage = () => {
      console.error("unable to login");
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/signin"} className="nav-link">
                Sign-In
              </Link>
            </li>
          </div>
        </nav>

        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={this.responseMessage} onError={this.errorMessage} />
        </div>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
