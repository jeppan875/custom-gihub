import { GIT_AUTH_LOGIN } from '../api'
import styled from 'styled-components'

export const IconStyle = styled.img`
    height: 15px;
    float: left;
    margin-top: 3px;
`;

export default function IconImgStyle(props) {
    const { src } = props;

    return (
        <IconStyle src={src} />
    )
}
