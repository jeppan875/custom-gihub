// pages/_app.js
import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from 'next-redux-saga';
import createStore from '../app/store';
import Layout from 'components/Layout'
import { gitLogin } from 'containers/Login/actions'
import GlobalStyles from 'app/globalStyle';
/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {

        // we can dispatch from here too
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        if (ctx.req && pageProps.store) {
            let user = ctx.req.session.user
            user ? pageProps.store.dispatch(gitLogin({ user })) : null
        }

        return { pageProps };

    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <GlobalStyles />
                    <Layout >
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </Container>
        );
    }

}

export default withRedux(createStore, withReduxSaga({ async: true }))(MyApp);
