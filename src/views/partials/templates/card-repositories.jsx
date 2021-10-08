import React, { Component } from "react";
import { format } from "timeago.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

class CardRepositories extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card shadow">
                    <div className="card-header">
                        <h4 className="card-title mb-0"><a href="/" className="text-decoration-none text-warning">Battle-Reiq</a></h4>
                    </div>
                    <div className="card-body bg-dark-2">
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dolorem accusantium laudantium voluptatum libero optio.
                        </p>
                        <p className="mb-0"><span className="badge badge-primary">Topic 1</span> <span className="badge badge-primary">Topic 3</span> <span className="badge badge-primary">Topic 2</span></p>
                    </div>
                    <div className="card-footer bg-info-2">
                        <p className="mb-0">
                            <span className="mr-3 badge badge-light text-dark">JavaScript</span>
                            <span className="mr-3">
                                <FontAwesomeIcon icon={faCodeBranch} /> 10
                            </span>
                            <span className="mr-3">
                                <FontAwesomeIcon icon={faStar} /> 10
                            </span>
                            <span className="mr-3 badge badge-dark">Updated {format('2019-12-12')}</span>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CardRepositories;