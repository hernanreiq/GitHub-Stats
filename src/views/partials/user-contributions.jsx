import React, { Component } from "react";

class UserContributions extends Component {
    state = {
        urlContributions: ''
    }

    showUserContributions = (username) => {
        this.setState({
            urlContributions: `https://activity-graph.herokuapp.com/graph?username=${username}&bg_color=1a1b27&color=ffffff&line=012b50&point=ffffff&area=true&hide_border=true&count_private=true`
        })
        this.props.masonry();
    }

    componentDidMount() {
        this.showUserContributions(this.props.username);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.username !== this.props.username) {
            this.showUserContributions(this.props.username);
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.urlContributions &&
                    <div className="col-md-6">
                        <div className="card shadow mb-5">
                            <div className="card-header text-center">
                                <h2 className="card-title mb-0 text-white">User Contributions</h2>
                            </div>
                            <div className="card-body bg-dark text-white">
                                <img src={this.state.urlContributions} alt={this.props.userdata.name} className="card-img" />
                            </div>
                            <div className="card-footer text-center bg-secondary">
                                <a href={this.state.urlContributions} target="_blank" rel="noreferrer" className="btn btn-success w-100">Put it on your GitHub profile</a>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default UserContributions;