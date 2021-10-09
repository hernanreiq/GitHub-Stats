import React, { Component } from "react";
import { format } from "timeago.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

class CardRepositories extends Component {
    state = {
        showDescription: false,
        showTopic: false,
        showLanguage: false,
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
        if (this.props.repo.topics.length > 0) {
            this.setState({
                showTopic: true
            })
        } else {
            this.setState({
                showTopic: false
            })
        }
        if (this.props.repo.language) {
            this.setState({
                showLanguage: true
            })
        } else {
            this.setState({
                showLanguage: false
            })
        }
        if (this.props.repo.forks_count) {
            this.setState({
                showBranch: true
            })
        } else {
            this.setState({
                showBranch: false
            })
        }
        if (this.props.repo.stargazers_count) {
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
                            <a href={this.props.repo.html_url} className="text-decoration-none text-warning" target="_blank" rel="noreferrer">{this.props.repo.name}</a>
                        </h4>
                    </div>
                    {this.state.showDescription || this.state.showTopic ?
                        <div className="card-body bg-dark-2">
                            {this.state.showDescription &&
                                <p className="card-text">{this.props.repo.description}</p>
                            }
                            {this.state.showTopic &&
                                <p className="mb-0 h5">
                                    {this.props.repo.topics.map((topic, i) => {
                                        return (
                                            <span className="badge bg-primary me-2 mb-1" key={i}>{topic}</span>
                                        )
                                    })
                                    }
                                </p>
                            }
                        </div> : ''
                    }
                    <div className="card-footer bg-info-2">
                        <p className="mb-0">
                            {this.state.showLanguage &&
                                <span className="me-3 badge bg-dark text-white">{this.props.repo.language}</span>
                            }
                            {this.state.showBranch &&
                                <span className="me-3">
                                    <FontAwesomeIcon icon={faCodeBranch} /> {this.props.repo.forks_count}
                                </span>
                            }
                            {this.state.showStar &&
                                <span className="me-3">
                                    <FontAwesomeIcon icon={faStar} /> {this.props.repo.stargazers_count}
                                </span>
                            }
                            <span className="me-3 badge bg-dark">Updated {format(this.props.repo.pushed_at)}</span>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CardRepositories;