import React, { Component } from "react";
import CardRepositories from "./templates/card-repositories";
import { GetUserRepositories } from "../helpers/graphql-querys";

class Repositories extends Component {
    state = {
        repos: [],
        count: 0
    }

    getAllRepositories = (username) => {
        if (this.props.userdata.repositories.totalCount) {
            var getUserRepos = GetUserRepositories(username)
            getUserRepos.then(res => {
                if (res.data.user.repositories.edges.length > 0) {
                    this.setState({
                        repos: res.data.user.repositories.edges,
                        count: res.data.user.repositories.edges.length
                    })
                    this.props.masonry();
                } else {
                    this.setState({
                        repos: [],
                        count: 0
                    })
                }
            })
        } else {
            this.setState({
                repos: [],
                count: 0
            })
        }
    }

    componentDidMount() {
        this.getAllRepositories(this.props.userdata.login);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userdata.login !== this.props.userdata.login) {
            this.getAllRepositories(this.props.userdata.login);
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.count > 0 &&
                    <div className="col-md-6">
                        <div className="card shadow mb-5">
                            <div className="card-header text-center">
                                <h2 className="card-title mb-0 text-white">Repositories</h2>
                            </div>
                            <div className="card-body bg-dark text-white pb-0">
                                {this.state.repos.slice(0, 5).map((repo, i) => {
                                    return (
                                        <CardRepositories key={i} repo={repo.node} />
                                    )
                                })
                                }
                            </div>
                            {this.state.count > 5 &&
                                <div className="card-footer text-center bg-secondary">
                                    <a href={`https://github.com/${this.props.username}?tab=repositories`} target="_blank" rel="noreferrer" className="btn btn-success w-100">More repositories</a>
                                </div>
                            }
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Repositories;