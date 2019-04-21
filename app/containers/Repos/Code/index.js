import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// Must put style in style folder or it breaks on reload,
// cant inpmort directly from node_modules
import docco from './styles';

class Code extends Component {
    render() {
        const { code } = this.props
        return (
            <SyntaxHighlighter language='javascript' style={docco}>{code}</SyntaxHighlighter>
        )
    }
}
export default Code