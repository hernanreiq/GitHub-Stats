import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../views/partials/header";
import Index from "../views/index";
import Error from "../views/error";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/home" component={Index} />
                    <Route exact path="/GitHub-Stats" component={Index} />
                    <Route path="*" component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;