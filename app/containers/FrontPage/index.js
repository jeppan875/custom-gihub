import React, { Component } from 'react';
import Repos from 'containers/Repos'

// must return store or state breaks
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