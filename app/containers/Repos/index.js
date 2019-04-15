import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_REPOS_SAGA } from './constants'
import { getRepos } from './selector'
import ListContainer from 'components/listContainer'
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

const getRepoName = repos => repos.map(repo => repo.name)

class Repos extends Component {

    componentDidMount() {
        const { fetchRepos } = this.props
        fetchRepos()
    }
    render() {
        const { repos } = this.props
        const actualRepos = getRepoName(repos.repos)
        return (
            <div>
                <ListContainer itemList={actualRepos} />
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Repos)