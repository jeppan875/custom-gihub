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
                <Repos></Repos>
            </div>
        )
    }
}
export default FrontPage