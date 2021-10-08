import React, { Component } from "react";
import CardRepositories from "./templates/card-repositories";
import { GetAllRepositoriesUser } from "../helpers/axios-http";

class Repositories extends Component {
    state = {
        repos: [],
        count: 0
    }

    getAllRepositories = (username) => {
        var getUserRepos = GetAllRepositoriesUser(username)
        getUserRepos.then(res => {
            if (res.data.length > 0) {
                this.setState({
                    repos: res.data,
                    count: res.count
                })
            } else {
                this.setState({
                    repos: [],
                    count: 0
                })
            }
        })
    }

    componentDidMount() {
        this.getAllRepositories(this.props.username);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.username !== this.props.username) {
            this.getAllRepositories(this.props.username);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="card shadow">
                    <div className="card-header">
                        <h2 className="card-title mb-0 text-white">Repositories</h2>
                    </div>
                    <div className="card-body bg-dark text-white pb-0">
                        {this.state.repos.length > 0 &&
                            this.state.repos.slice(0, 5).map((repo, i) => {
                                return (
                                    <CardRepositories key={i} repo={repo} />
                                )
                            })
                        }
                    </div>
                    {this.state.count > 5 &&
                        <div className="card-footer text-center bg-secondary">
                            <a href={`https://github.com/${this.props.username}?tab=repositories`} target="_blank" rel="noreferrer" className="btn btn-success">More repositories</a>
                        </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Repositories;