import React, { Component } from 'react';
import { fetchRepos } from './actions'

class FrontPage extends Component {
    static async getInitialProps({ store }) {
        console.log(store)
        store.dispatch(fetchRepos())
        return { store }
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
export default FrontPage