export default function LogutButton(props) {
    const { children, logout, ...rest } = props;

    return (
        <div >
            <button onClick={logout} >Logout</button>
        </div>
    )
}