import React, { Component } from 'react';
import Repos from 'containers/Repos'

class FrontPage extends Component {
    static async getInitialProps({ store }) {
        return { store }
    }
    render() {
        const { store } = this.props

        return (
            <div>
                <p>logged in</p>
                <Repos></Repos>
            </div>
        )
    }
}
export default FrontPage