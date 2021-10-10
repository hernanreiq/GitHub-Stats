import React, { Component } from "react";
import DoughnutChart from "./templates/doughnut-chart";
import { CalPercent } from "../helpers/functions";

class RepositoriesVSContributions extends Component {
    state = {
        totalContributions: 0,
        totalRepositories: 0
    }

    getContributions = () => {
        this.setState({
            totalContributions: this.props.userdata.contributionsCollection.contributionCalendar.totalContributions,
            totalRepositories: this.props.userdata.repositories.totalCount
        });
    }

    componentDidMount() {
        this.getContributions();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userdata.login !== this.props.userdata.login) {
            this.getContributions();
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.totalContributions > 0 && this.state.totalRepositories > 0 &&
                    <div className="card shadow mb-5">
                        <div className="card-header">
                            <h2 className="card-title mb-0 text-white">Repositories VS. Contributions</h2>
                        </div>
                        <div className="card-body bg-dark text-white">
                            <DoughnutChart
                                totalContributions={this.state.totalContributions}
                                totalRepositories={this.state.totalRepositories}
                            />
                        </div>
                        {this.state.totalContributions > this.state.totalRepositories &&
                            CalPercent(this.state.totalRepositories, this.state.totalContributions)
                        }
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default RepositoriesVSContributions;