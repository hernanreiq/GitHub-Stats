import React, { Component } from "react";
import { UserLocationDevs } from "../helpers/graphql-querys";

class LocationDevs extends Component {
    state = {
        usersCount: 0
    }

    getAllDevs = (userdata) => {
        var userLocationDevs = UserLocationDevs(userdata.location)
        userLocationDevs.then(res => {
            this.setState({
                usersCount: res.data.search.userCount
            });
        });
        this.props.masonry();
    }

    componentDidMount() {
        this.getAllDevs(this.props.userdata);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userdata !== this.props.userdata) {
            this.getAllDevs(this.props.userdata);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <div className="card shadow mb-5">
                        <div className="card-header text-center">
                            <h2 className="card-title mb-0 text-white">These are the GitHub users that match the location</h2>
                        </div>
                        <div className="card-body bg-dark text-white">
                            <p className="display-1 text-center mb-0">{this.state.usersCount}</p>
                        </div>
                        <div className="card-footer bg-secondary ">
                            <h3 className="mb-0 text-center text-white">Location: <b>{this.props.userdata.location}</b></h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LocationDevs;