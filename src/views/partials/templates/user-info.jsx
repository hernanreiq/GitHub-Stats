import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUserFriends, faCode, faFileCode } from "@fortawesome/free-solid-svg-icons"

class UserInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card shadow">
                    <div className="card-header">
                        <h2 className="card-title mb-0 text-white">{this.props.userdata.name}</h2>
                        <a href={this.props.userdata.html_url} target="_blank" rel="noreferrer" className="text-warning text-decoration-none">{this.props.userdata.login}</a>
                    </div>
                    <div className="card-body bg-dark text-white">
                        <img src={this.props.userdata.avatar_url} alt={this.props.userdata.name} className="card-img" />
                        <p className="mt-2 spaces">{this.props.userdata.bio}</p>
                        <p className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.props.userdata.location}</p> 
                        <p className="mb-0"><FontAwesomeIcon icon={faUserFriends} /> {this.props.userdata.followers} followers / {this.props.userdata.following} following</p>
                        <p className="mb-0"><FontAwesomeIcon icon={faCode} /> {this.props.userdata.public_repos} repositories</p>
                        {this.props.userdata.public_gists ?
                            <p className="mb-0"><FontAwesomeIcon icon={faFileCode} /> {this.props.userdata.public_gists} gists</p> : ''
                        }
                    </div>
                    {this.props.userdata.blog &&
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