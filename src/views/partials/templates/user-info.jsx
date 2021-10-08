import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUserFriends, faCode, faFileCode } from "@fortawesome/free-solid-svg-icons"

class UserInfo extends Component {
    state = {
        showBio: false,
        showLocation: false,
        showGists: false,
        showWebsite: false
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
        if (this.props.userdata.public_gists > 0) {
            this.setState({
                showGists: true
            })
        } else {
            this.setState({
                showGists: false
            })
        }
        if (this.props.userdata.blog) {
            this.setState({
                showWebsite: true
            })
        } else {
            this.setState({
                showWebsite: false
            })
        }
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
                <div className="card shadow">
                    <div className="card-header">
                        <h2 className="card-title mb-0 text-white">{this.props.userdata.name}</h2>
                        <a href={this.props.userdata.html_url} target="_blank" rel="noreferrer" className="text-warning text-decoration-none">{this.props.userdata.login}</a>
                    </div>
                    <div className="card-body bg-dark text-white">
                        <img src={this.props.userdata.avatar_url} alt={this.props.userdata.name} className="card-img mb-2" />
                        {this.state.showBio &&
                            <p className="spaces">{this.props.userdata.bio}</p>
                        }
                        {this.state.showLocation &&
                            <p className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.props.userdata.location}</p>
                        }
                        <p className="mb-0"><FontAwesomeIcon icon={faUserFriends} /> {this.props.userdata.followers} followers / {this.props.userdata.following} following</p>
                        <p className="mb-0"><FontAwesomeIcon icon={faCode} /> {this.props.userdata.public_repos} repositories</p>
                        {this.state.showGists ?
                            <p className="mb-0"><FontAwesomeIcon icon={faFileCode} /> {this.props.userdata.public_gists} gists</p> : ''
                        }
                    </div>
                    {this.state.showWebsite &&
                        <div className="card-footer bg-secondary">
                            <a href={this.props.userdata.blog} target="_blank" rel="noreferrer" className="btn btn-success w-100">Website</a>
                        </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default UserInfo;