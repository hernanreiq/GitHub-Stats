import React, { Component } from "react";

class MostUsedLanguages extends Component {
    state = {
        urlLangs: ''
    }

    showMostUsedLangs = (username) => {
        this.setState({
            urlLangs: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&show_icons=true&langs_count=10,html&theme=tokyonight&count_private=true`
        })
        this.props.masonry();
    }

    componentDidMount() {
        this.showMostUsedLangs(this.props.userdata.login);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userdata.login !== this.props.userdata.login) {
            this.showMostUsedLangs(this.props.userdata.login);
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.userdata.repositories.totalCount &&
                    <div className="col-md-6">
                        <div className="card shadow mb-5">
                            <div className="card-header text-center">
                                <h2 className="card-title mb-0 text-white">Top user languages</h2>
                            </div>
                            <div className="card-body bg-dark text-white">
                                <img src={this.state.urlLangs} alt={this.props.userdata.name} className="card-img" />
                            </div>
                            <div className="card-footer text-center bg-secondary">
                            <button onClick={() => {this.props.CopyCode(this.state.urlLangs)}} className="btn btn-success w-100">Put it on your GitHub profile</button>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default MostUsedLanguages;