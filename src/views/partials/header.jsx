import React, { Component } from "react";

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <header className="shadow">
                    <div className="container text-center pt-2 pb-3">
                        <h1 className="display-3"><i>GitHub Stats</i></h1>
                        <h3>See all public stats for a GitHub profile</h3>
                        <p className="h5">Development and Web Design by: <span className="badge bg-dark"><a href="https://bit.ly/hernanreiq" target="_blank" rel="noreferrer" className="text-decoration-none text-warning">Hernan.Reiq</a></span></p>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;