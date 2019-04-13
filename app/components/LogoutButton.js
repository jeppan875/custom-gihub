import { AuthButton } from './LoginButton'

export default function LogutButton(props) {
    const { children, logout, ...rest } = props;

    return (
        <div >
            <AuthButton onClick={logout} >Logout</AuthButton>
        </div>
    )
}