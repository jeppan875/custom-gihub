import Link from 'next/link'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import styled from 'styled-components'

const HeadearDiv = styled.div`
  background-color: black;
  color: white;
  height: 70px;
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
`
const StyledLink = styled.a`
  color: white;
  font-weight: bold;
  font-size: 60px;
  text-decoration: none;
  float: left;
`;
function Header(props) {
  const { user, gitlogout } = props
  return (
    <HeadearDiv>
      <Link href="/" passHref>
        <StyledLink >Custom Github</StyledLink>
      </Link>
      {user ? <LogoutButton logout={gitlogout} /> :
        <LoginButton />}
    </HeadearDiv >
  )
}

export default Header