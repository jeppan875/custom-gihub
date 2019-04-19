import { GIT_AUTH_LOGIN } from '../api'
import styled from 'styled-components'

export const BigButton = styled.button`
color: white;
background-color: black;
font-size: 5em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid bklack;
border-radius: 3px;
cursor: pointer;
display: inline-block
`;
const ButtonDiv = styled.div`
  color: white;
  height: 70px;
  width: 100%;
  position: absolute;
  top: 40%;
  text-align: center;
`
export default function BigLoginButton(props) {
    const { children, ...rest } = props;

    return (
        <div>
            <ButtonDiv >
                <a href={GIT_AUTH_LOGIN} ><BigButton>Login</BigButton></a>
            </ButtonDiv >
        </div>
    )
}
