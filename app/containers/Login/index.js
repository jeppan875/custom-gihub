import React, { Component } from 'react';
import { gitLogin, gitLogout } from './actions'
import { connect } from 'react-redux';
import { getGitUser } from './selector'

const mapDispatchToProps = (dispatch) => {
    return {
        gitLogin: () => dispatch(gitLogin()),
        gitLogout: () => dispatch(gitLogout()),
    }
}
const mapStateToProps = (state) => {
    return {
        user: getGitUser(state)
    }
}
const Login = Comp => {
    class Login extends Component {
        render() {
            return (
                <Comp {...this.props} />
            )
        }
    }
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(Login)
}

export default Login