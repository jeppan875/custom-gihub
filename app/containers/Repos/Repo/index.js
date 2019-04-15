import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_SINGLE_REPO_SAGA } from '../constants'
import { getRepo } from '../selector'
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleRepo: (name) => dispatch({ type: FETCH_SINGLE_REPO_SAGA, name }),
    }
}
const mapStateToProps = (state) => {
    return {
        repo: 'getRepo(state)'
    }
}

class Repo extends Component {

    componentDidMount() {
        const { name, fetchSingleRepo } = this.props
        console.log(name)
        fetchSingleRepo(name)
    }
    render() {
        const { repo } = this.props
        return (
            <div>
                <p>Repopage</p>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Repo)