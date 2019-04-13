import BigLoginButton from 'components/BigLoginButton'
import React, { Component } from 'react';



export default class FrontPage extends Component {
    static async getInitialProps({ store }) {

        return { store };
    }
    render() {
        const { store } = this.props
        console.log(store)
        return (
            <div>
                {<BigLoginButton />}
            </div>
        )
    }
}
