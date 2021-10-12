import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUserFriends, faCode, faFileCode, faHistory } from "@fortawesome/free-solid-svg-icons";
import { IntFormat } from "../helpers/functions";

class UserInfo extends Component {
    state = {
        showBio: false,
        showLocation: false,
        showGists: false,
        showWebsite: false,
        showHistory: false
    }

    dataVerify = () => {
        if (this.props.userdata.bio) {
            this.setState({
                showBio: true
            })
        } else {
            this.setState({
                showBio: false
            })
        }
        if (this.props.userdata.location) {
            this.setState({
                showLocation: true
            })
        } else {
            this.setState({
                showLocation: false
            })
        }
        if (this.props.userdata.gists.totalCount > 0) {
            this.setState({
                showGists: true
            })
        } else {
            this.setState({
                showGists: false
            })
        }
        if (this.props.userdata.websiteUrl) {
            this.setState({
                showWebsite: true
            })
        } else {
            this.setState({
                showWebsite: false
            })
        }
        if (this.props.userdata.contributionsCollection.contributionCalendar.totalContributions > 0) {
            this.setState({
                showHistory: true
            })
        } else {
            this.setState({
                showHistory: false
            })
        }
        this.props.masonry();
    }

    componentDidMount() {
        this.dataVerify();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userdata.login !== this.props.userdata.login) {
            this.dataVerify();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <div className="card shadow mb-5">
                        <div className="card-header text-center">
                            <h2 className="card-title mb-0 text-white">{this.props.userdata.name}</h2>
                            <a href={this.props.userdata.url} target="_blank" rel="noreferrer" className="text-warning text-decoration-none">{this.props.userdata.login}</a>
                        </div>
                        <div className="card-body bg-dark text-white">
                            <img src={this.props.userdata.avatarUrl} alt={this.props.userdata.name} className="card-img mb-2" />
                            {this.state.showBio &&
                                <p className="spaces">{this.props.userdata.bio}</p>
                            }
                            {this.state.showLocation &&
                                <p className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.props.userdata.location}</p>
                            }
                            <p className="mb-0"><FontAwesomeIcon icon={faUserFriends} /> {IntFormat(this.props.userdata.followers.totalCount)} followers / {IntFormat(this.props.userdata.following.totalCount)} following</p>
                            <p className="mb-0"><FontAwesomeIcon icon={faCode} /> {IntFormat(this.props.userdata.repositories.totalCount)} repositories</p>
                            {this.state.showGists ?
                                <p className="mb-0"><FontAwesomeIcon icon={faFileCode} /> {IntFormat(this.props.userdata.gists.totalCount)} gists</p> : ''
                            }
                            {this.state.showHistory &&
                                <p className="mb-0"><FontAwesomeIcon icon={faHistory} /> {IntFormat(this.props.userdata.contributionsCollection.contributionCalendar.totalContributions)} total contributions</p>
                            }
                        </div>
                        {this.state.showWebsite &&
                            <div className="card-footer bg-secondary">
                                <a href={this.props.userdata.websiteUrl} target="_blank" rel="noreferrer" className="btn btn-success w-100">Website</a>
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default UserInfo;