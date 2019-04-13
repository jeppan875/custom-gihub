import BigLoginButton from 'components/BigLoginButton'
import React, { Component } from 'react';

class FrontPage extends Component {
    static async getInitialProps({ store }) {
        console.log(store)
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