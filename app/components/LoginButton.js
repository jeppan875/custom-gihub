import { GIT_AUTH_LOGIN } from '../api'
import styled from 'styled-components'

export const AuthButton = styled.button`
color: white;
background-color: black;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid white;
border-radius: 3px;
float: right;
cursor: pointer;
`;

export default function LoginButton(props) {
    const { children, ...rest } = props;

    return (
        <div >
            <a href={GIT_AUTH_LOGIN} ><AuthButton>Login</AuthButton></a>
        </div >
    )
}