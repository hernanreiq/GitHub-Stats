import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../views/partials/header";
import Index from "../views";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Index} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;