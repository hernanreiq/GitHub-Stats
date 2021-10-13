import React, { Component } from "react";

class GitHubStats extends Component {
    state = {
        urlStats: ''
    }

    showGitHubStats = (username) => {
        this.setState({
            urlStats: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&line_height=27&count_private=true`
        })
        this.props.masonry();
    }

    componentDidMount() {
        this.showGitHubStats(this.props.userdata.login);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userdata.login !== this.props.userdata.login) {
            this.showGitHubStats(this.props.userdata.login);
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.urlStats &&
                    <div className="col-md-6">
                        <div className="card shadow mb-5">
                            <div className="card-header text-center">
                                <h2 className="card-title mb-0 text-white">GitHub Stats</h2>
                            </div>
                            <div className="card-body bg-dark text-white">
                                <img src={this.state.urlStats} alt={this.props.userdata.name} className="card-img" />
                            </div>
                            <div className="card-footer text-center bg-secondary">
                                <a href={this.state.urlStats} target="_blank" rel="noreferrer" className="btn btn-success w-100">Put it on your GitHub profile</a>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default GitHubStats;