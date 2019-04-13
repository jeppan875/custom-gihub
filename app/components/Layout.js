import Header from './Header'
import Login from 'containers/Login'
import BigLoginButton from './BigLoginButton'
function Layout(props) {
  const { children, user, gitLogout } = props;

  return (
    <div >
      <Header user={user} gitlogout={gitLogout} />
      {user ? children : <BigLoginButton />}
    </div>
  )
}

export default Login(Layout)