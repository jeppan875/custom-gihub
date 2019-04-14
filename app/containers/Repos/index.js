import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_REPOS_SAGA } from './constants'
import { getRepos } from './selector'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRepos: () => dispatch({ type: FETCH_REPOS_SAGA }),
    }
}
const mapStateToProps = (state) => {
    return {
        repos: getRepos(state)
    }
}

class Repos extends Component {

    componentDidMount() {
        const { fetchRepos } = this.props
        fetchRepos()
    }
    render() {
        const { repos } = this.props
        console.log(repos)
        return (
            <div>
                <p>logged in</p>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Repos)