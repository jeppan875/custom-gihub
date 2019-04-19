import React, { Component } from 'react';
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