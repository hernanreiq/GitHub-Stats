import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 my-5">
                                <div className="input-group mb-3 rounded">
                                    <div className="input-group-prepend shadow">
                                        <span className="input-group-text" id="username">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="username" />
                                    <div className="input-group-prepend">
                                        <button className="btn btn-success">Search user</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Index;