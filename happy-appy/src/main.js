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
import Rankings from "./content/rankings";
import Register from "./content/register";
import Search from "./content/search";
import PrivateRoute from "./routes/privateRoute";
import Logout from "./content/logout";



class Main extends Component {
    render() {
        return (
            <HashRouter>
                <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item"><NavLink to="/Home" class="navbar-item">Home</NavLink></a>
                            <a class="navbar-item"><NavLink to="/rankings" class="navbar-item">Rankings</NavLink></a>
                            <a class="navbar-item"><NavLink to="/factors" class="navbar-item">Factors</NavLink></a>
                            <a class="navbar-item"><NavLink to="/search" class="navbar-item">Find Your Country</NavLink></a>
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <NavLink to="/register" class="button is-light">Register</NavLink>
                                    <NavLink to="/login" class="button is-light">Login</NavLink>
                                    <NavLink to="/logout" class="button is-light">Logout</NavLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section class="hero is-warning">
                    <div class="hero-body">
                        <p class="title">
                            The Happiness App
                    </p>
                        <p class="subtitle">
                            View and Analyse Data from the United Nations World Happiness Report
                    </p>
                    </div>
                </section>
                <div className="content">
                                <Route path="/Home" component={Home} />
                                <Route path="/register" component={Register} />
                                <Route path="/login" component={Login} />
                                <PrivateRoute path="/rankings" component={Rankings}/>
                                <PrivateRoute path="/factors" component={Factors} />
                                <PrivateRoute path="/search" component={Search} />
                                <Route path="/Logout" component={Logout} />
                </div>
            </HashRouter>
        );
    }
}

export default Main;