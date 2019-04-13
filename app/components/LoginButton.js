import { GIT_AUTH_LOGIN } from '../api'

export default function LoginButton(props) {
    const { children, ...rest } = props;
    return (
        <div >
            <a href={GIT_AUTH_LOGIN} >Login</a>
        </div>
    )
}