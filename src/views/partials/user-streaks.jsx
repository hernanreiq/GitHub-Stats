import React, { Component } from "react";

class UserStreaks extends Component {
    state = {
        urlStreaks: ''
    }

    showUserStreaks = (username) => {
        this.setState({
            urlStreaks: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&count_private=true`
        })
        this.props.masonry();
    }

    componentDidMount() {
        this.showUserStreaks(this.props.username);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.username !== this.props.username) {
            this.showUserStreaks(this.props.username);
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.urlStreaks &&
                    <div className="col-md-6">
                        <div className="card shadow mb-5">
                            <div className="card-header text-center">
                                <h2 className="card-title mb-0 text-white">User Streaks</h2>
                            </div>
                            <div className="card-body bg-dark text-white">
                                <img src={this.state.urlStreaks} alt={this.props.userdata.name} className="card-img" />
                            </div>
                            <div className="card-footer text-center bg-secondary">
                                <a href={this.state.urlStreaks} target="_blank" rel="noreferrer" className="btn btn-success w-100">Put it on your GitHub profile</a>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default UserStreaks;