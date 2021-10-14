import React, { Component } from "react";

class Error extends Component {
    render() {
        return(
            <React.Fragment>
                <main>
                    <div className="container">
                        <div className="col-md-6 offset-md-3">
                            <div className="card shadow mt-5">
                                <div className="card-header text-white text-center">
                                    <h2 className="card-title">This page does not exist</h2>
                                </div>
                                <div className="card-body bg-dark text-center">
                                    <a href="/" className="btn btn-success w-75 mx-auto">Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Error;