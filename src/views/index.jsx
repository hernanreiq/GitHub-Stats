import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GetUserdata } from "./helpers/graphql-querys";
import UserInfo from "./partials/user-info";
import GitHubStats from "./partials/github-stats";
import UserStreaks from "./partials/user-streaks";
import MostUsedLanguages from "./partials/most-used-langs";
import UserContributions from "./partials/user-contributions";
import Repositories from "./partials/repositories";
import LocationDevs from "./partials/user-location-devs";
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
                if (res.data.user) {
                    this.setState({
                        userdata: res.data.user,
                        message: '',
                        error: false
                    })
                    this.masonryEffect();
                } else {
                    this.setState({
                        userdata: false,
                        message: 'The user you searched for does not exist',
                        error: true
                    })
                }
            })
        } else {
            this.setState({
                userdata: false,
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
                                {this.state.userdata &&
                                    <React.Fragment>
                                        <UserInfo userdata={this.state.userdata} masonry={this.masonryEffect} />
                                        <GitHubStats userdata={this.state.userdata} masonry={this.masonryEffect} />
                                        <UserContributions userdata={this.state.userdata} masonry={this.masonryEffect} />
                                        <UserStreaks userdata={this.state.userdata} masonry={this.masonryEffect} />
                                        <MostUsedLanguages userdata={this.state.userdata} masonry={this.masonryEffect} />
                                        <Repositories userdata={this.state.userdata} masonry={this.masonryEffect} />
                                    </React.Fragment>
                                }
                                {this.state.userdata.location &&
                                    <LocationDevs userdata={this.state.userdata} masonry={this.masonryEffect} />
                                }
                            </div>
                        }
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Index;