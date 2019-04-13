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

const Avatar = styled.img`
  float: left;
  height: 60px;
  cursor: pointer;
  margin: 5px;
`;
function Header(props) {
  const { user, gitlogout } = props
  const welcomeText = user ? user.login : 'Custom Github'
  return (
    <HeadearDiv>
      {user && <Avatar src={user.avatar_url} />}
      <Link href="/" passHref>
        <StyledLink >{welcomeText}</StyledLink>
      </Link>
      {user ? <LogoutButton logout={gitlogout} /> :
        <LoginButton />}
    </HeadearDiv >
  )
}

export default Header