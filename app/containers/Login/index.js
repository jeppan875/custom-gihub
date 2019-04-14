import React, { Component } from 'react';
import { GIT_LOGOUT_SAGA } from './constants'
import { connect } from 'react-redux';
import { getGitUser } from './selector'

const mapDispatchToProps = (dispatch) => {
    return {
        gitLogout: () => dispatch({ type: GIT_LOGOUT_SAGA }),
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