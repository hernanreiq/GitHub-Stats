import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GetUserdata } from "./helpers/graphql-querys";
import UserInfo from "./partials/templates/user-info";
import Repositories from "./partials/repositories";
import RepositoriesVSContributions from "./partials/repositories-vs-contributions";
import { Masonry } from "./helpers/functions";

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
            var getUserData = GetUserdata(username)
            getUserData.then(res => {
                if (res.data) {
                    this.setState({
                        userdata: res.data.user,
                        message: 'You must perform a search',
                        error: false
                    })
                    this.masonryEffect();
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

    masonryEffect = () => {
        var macyInstance = Masonry();
        macyInstance.recalculate(true);
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 my-5">
                                <div className="input-group mb-3 rounded">
                                    <span className="input-group-text" id="username">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </span>
                                    <input ref={this.usernameRef} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="username" autoFocus />
                                    <button className="btn btn-success" onClick={this.searchUser}>Search user</button>
                                </div>
                            </div>
                        </div>
                        {this.state.error ?
                            <h2 className="text-center text-white">{this.state.message}</h2> :
                            <div className="row" id="masonry">
                                <div className="col-md-6">
                                    <UserInfo userdata={this.state.userdata} />
                                </div>
                                <div className="col-md-6">
                                    <Repositories username={this.state.userdata.login} />
                                </div>
                                <div className="col-md-6">
                                    <RepositoriesVSContributions userdata={this.state.userdata} />
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