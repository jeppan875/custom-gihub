import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_SINGLE_REPO_SAGA } from '../constants'
import RepoNavigation from 'components/repoNavigation'
import { getRepoLinks } from '../selector'
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleRepo: (name, path) => dispatch({ type: FETCH_SINGLE_REPO_SAGA, name, path }),
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        repoLinks: getRepoLinks({ state, name: ownProps.name, path: ownProps.path })
    }
}

class Repo extends Component {

    componentDidMount() {
        const { name, fetchSingleRepo } = this.props
        fetchSingleRepo(name, '/')
    }
    render() {
        const { name, repoLinks, path, fetchSingleRepo } = this.props
        console.log(name)
        console.log(repoLinks)
        console.log(path)
        return (
            <div>
                {repoLinks && <RepoNavigation repoLinks={repoLinks} name={name} fetchSingleRepo={fetchSingleRepo} />}
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Repo)