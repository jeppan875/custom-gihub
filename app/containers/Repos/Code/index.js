import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_REPO_CONTENT_SAGA } from '../constants'
import { getRepoLinks } from '../selector'
import Prism from 'prismjs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Code extends Component {
    render() {
        const { code } = this.props
        return (
            <SyntaxHighlighter language='javascript' style={docco}>{code}</SyntaxHighlighter>
        )
    }
}
export default Code