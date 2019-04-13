import Header from './Header'
import Login from 'containers/Login'

function Layout(props) {
  const { children, user, gitLogout } = props;
  return (
    <div >
      <Header user={user} gitlogout={gitLogout} />
      {children}
    </div>
  )
}

export default Login(Layout)