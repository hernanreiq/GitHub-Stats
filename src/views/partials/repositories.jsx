import React, { Component } from "react";
import CardRepositories from "./templates/card-repositories";

class Repositories extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card shadow">
                    <div className="card-header">
                        <h2 className="card-title mb-0 text-white">Repositories</h2>
                    </div>
                    <div className="card-body bg-dark text-white">
                        <CardRepositories />
                    </div>
                    <div className="card-footer">
                        <h3>PAGINATION</h3>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Repositories;