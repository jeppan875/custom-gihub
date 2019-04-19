import Header from './Header'
import Login from 'containers/Login'
import BigLoginButton from './BigLoginButton'
import styled from 'styled-components'

export const MainDiv = styled.div`
margin-top: 80px;
`;

function Layout(props) {
  const { children, user, gitLogout } = props;
  return (
    <div >
      <Header user={user} gitlogout={gitLogout} />
      <MainDiv>
        {user ? children : <BigLoginButton />}
      </MainDiv>
    </div>
  )
}

export default Login(Layout)