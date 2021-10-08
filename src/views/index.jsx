import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GetUser } from "./helpers/axios-http";
import UserInfo from "./partials/templates/user-info";
import Repositories from "./partials/repositories";

class Index extends Component {
    state = {
        userdata: false,
        message: 'You must perform a search',
        error: true
    }

    usernameRef = React.createRef();

    searchUser = () => {
        var username = this.usernameRef.current.value;
        if (username !== '') {
            var result = GetUser(username)
            result.then(res => {
                if (res.data) {
                    this.setState({
                        userdata: res.data,
                        message: 'You must perform a search',
                        error: false
                    })
                } else {
                    this.setState({
                        message: 'The user you searched for does not exist',
                        error: true
                    })
                }
            })
        } else {
            this.setState({
                message: 'You must perform a search',
                error: true
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 my-5">
                                <div className="input-group mb-3 rounded">
                                    <div className="input-group-prepend shadow">
                                        <span className="input-group-text" id="username">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </span>
                                    </div>
                                    <input ref={this.usernameRef} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="username" autoFocus />
                                    <div className="input-group-prepend">
                                        <button className="btn btn-success" onClick={this.searchUser}>Search user</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.state.error ?
                            <h2 className="text-center text-white">{this.state.message}</h2> :
                            <div className="row">
                                <div className="col-md-6 mb-5">
                                    <UserInfo userdata={this.state.userdata} />
                                </div>
                                <div className="col-md-6 mb-5">
                                    <Repositories />
                                </div>
                            </div>
                        }
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Index;