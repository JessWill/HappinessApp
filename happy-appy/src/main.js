import React, { Component } from "react";
import "./index.css"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./content/home";
import Factors from "./content/factors";
import Login from "./content/login";
import Logout from "./content/logout";
import Rankings from "./content/rankings";
import Register from "./content/register";
import Search from "./content/search";
import PrivateRoute from "./routes/privateRoute";



class Main extends Component {
    render() {
        return (
            <HashRouter>
                <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                        <NavLink to="/Home" class="navbar-item">Home</NavLink>
                        <NavLink to="/rankings" class="navbar-item">Rankings</NavLink>
                        <NavLink to="/factors" class="navbar-item">Factors</NavLink>
                        <NavLink to="/search" class="navbar-item">Find Your Country</NavLink>
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <NavLink to="/register" class="button is-light">Register</NavLink>
                                    <NavLink to="/login" class="button is-light">Login</NavLink>
                                    {/* <NavLink to="/logout" class="button is-light">Logout</NavLink> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="content">
                                <Route path="/Home" component={Home} />
                                <Route path="/register" component={Register} />
                                <Route path="/login" component={Login} />
                                <PrivateRoute path="/rankings" component={Rankings}/>
                                <PrivateRoute path="/factors" component={Factors} />
                                <PrivateRoute path="/search" component={Search} />
                                {/* <Route path="/Logout" component={Logout} /> */}
                </div>
            </HashRouter>
        );
    }
}

export default Main;