import Header from 'components/Header'
import Login from 'containers/Login'
import React, { Component } from 'react';

export default class FrontPage extends Component {
    static async getInitialProps({ store }) {

        return { store };
    }

    render() {
        return (
            <div></div>
        )
    }
}
