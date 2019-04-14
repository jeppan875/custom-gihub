import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from './actions'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRepos: () => dispatch(fetchRepos()),
    }
}
const mapStateToProps = (state) => {
    return {
    }
}

class Repos extends Component {

    componentDidMount() {
        const { fetchRepos } = this.props
        fetchRepos()
        console.log('monnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
    }
    render() {
        const { store } = this.props

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