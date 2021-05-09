import React, { Component } from "react";
import "./index.css"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./home";
import Factors from "./factors";
import Login from "./login";
import Logout from "./logout";
import Rankings from "./rankings";
import Register from "./register";
import Search from "./search";



class Main extends Component {
    render() {
        return (
            <HashRouter>
                <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src="https://www.directivegroup.com/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg" width="50" height="50" alt="smiley face"></img>
                    </a>
                </div>
                   
                   
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                        <NavLink to="/Home" class="navbar-item">Home</NavLink>
                        <NavLink to="/rankings" class="navbar-item">Rankings</NavLink>
                        <NavLink to="/factors" class="navbar-item">Factors</NavLink>
                        <NavLink to="/search" class="navbar-item">Search</NavLink>
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
                <div className="content">
                                <Route path="/Home" component={Home} />
                                <Route path="/rankings" component={Rankings} />
                                <Route path="/factors" component={Factors} />
                                <Route path="/search" component={Search} />
                                <Route path="/register" component={Register} />
                                <Route path="/login" component={Login} />
                                <Route path="/Logout" component={Logout} />
                </div>
            </HashRouter>
        );
    }
}

export default Main;