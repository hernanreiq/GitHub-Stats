import React, { Component } from "react";
import { GetContributions } from "../helpers/axios-http";
import DoughnutChart from "./templates/doughnut-chart";

class RepositoriesVSContributions extends Component {
    state = {
        totalContributions: 0,
        totalRepositories: 0
    }

    getContributions = (username) => {
        var getUserContributions = GetContributions(username)
        getUserContributions.then(res => {
            this.setState({
                totalContributions: res.data.user.contributionsCollection.contributionCalendar.totalContributions,
                totalRepositories: this.props.userdata.public_repos
            })
        })
    }

    componentDidMount() {
        this.getContributions(this.props.userdata.login);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userdata.login !== this.props.userdata.login) {
            this.getContributions(this.props.userdata.login);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="card shadow">
                    <div className="card-header">
                        <h2 className="card-title mb-0 text-white">Repositories VS. Contributions</h2>
                    </div>
                    {this.state.totalContributions > 0 && this.state.totalRepositories > 0 &&
                        <div className="card-body bg-dark text-white">
                            <DoughnutChart
                                totalContributions={this.state.totalContributions}
                                totalRepositories={this.state.totalRepositories}
                            />
                        </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default RepositoriesVSContributions;