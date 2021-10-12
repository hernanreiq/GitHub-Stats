import React, { Component } from "react";
import { format } from "timeago.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { IntFormat } from "../../helpers/functions";

class CardRepositories extends Component {
    state = {
        showDescription: false,
        showTopic: false,
        showBranch: false,
        showStar: false
    }

    dataVerify = () => {
        if (this.props.repo.description) {
            this.setState({
                showDescription: true
            })
        } else {
            this.setState({
                showDescription: false
            })
        }
        if (this.props.repo.repositoryTopics.nodes.length > 0) {
            this.setState({
                showTopic: true
            })
        } else {
            this.setState({
                showTopic: false
            })
        }
        if (this.props.repo.forkCount > 0) {
            this.setState({
                showBranch: true
            })
        } else {
            this.setState({
                showBranch: false
            })
        }
        if (this.props.repo.stargazerCount > 0) {
            this.setState({
                showStar: true
            })
        } else {
            this.setState({
                showStar: false
            })
        }
    }

    componentDidMount() {
        this.dataVerify();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.repo.name !== this.props.repo.name) {
            this.dataVerify();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="card shadow mb-3">
                    <div className="card-header">
                        <h4 className="card-title mb-0">
                            <a href={this.props.repo.url} className="text-decoration-none text-warning" target="_blank" rel="noreferrer">{this.props.repo.name}</a>
                        </h4>
                    </div>
                    {this.state.showDescription || this.state.showTopic ?
                        <div className="card-body bg-dark-2">
                            {this.state.showDescription &&
                                <p className="card-text">{this.props.repo.description}</p>
                            }
                            {this.state.showTopic &&
                                <p className="mb-0 h5">
                                    {this.props.repo.repositoryTopics.nodes.map((topic, i) => {
                                        return (
                                            <span className="badge bg-primary me-2 mb-1" key={i}>{topic.topic.name}</span>
                                        )
                                    })
                                    }
                                </p>
                            }
                        </div> : ''
                    }
                    <div className="card-footer bg-info-2">
                        <p className="mb-0">
                            {this.props.repo.primaryLanguage &&
                                <span className="me-3 badge bg-dark text-white">{this.props.repo.primaryLanguage.name}</span>
                            }
                            {this.state.showBranch &&
                                <span className="me-3">
                                    <FontAwesomeIcon icon={faCodeBranch} /> {IntFormat(this.props.repo.forkCount)}
                                </span>
                            }
                            {this.state.showStar &&
                                <span className="me-3">
                                    <FontAwesomeIcon icon={faStar} /> {IntFormat(this.props.repo.stargazerCount)}
                                </span>
                            }
                            <span className="me-3 badge bg-dark">Updated {format(this.props.repo.pushedAt)}</span>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CardRepositories;