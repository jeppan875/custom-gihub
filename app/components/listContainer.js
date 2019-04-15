import styled from 'styled-components'
import Link from 'next/link'

export const ListDiv = styled.div`
background-color: #e6e9ef;
margin: 1em;
margin-top: 30px;
padding: 0.25em 1em;
border-radius: 3px;
display: inline-block;
box-shadow: 5px 5px 7px 7px #88898c;
`;

export const UlStyle = styled.ul`
font-size: 20px;
list-style-type: none;
`;

const StyledLink = styled.a`
  color: black;
  font-weight: bold;
  text-decoration: none;
`;

function listContainer(props) {
    const { itemList } = props;

    return (
        <ListDiv>
            <UlStyle>
                {itemList.map((item, index) =>
                    <Link key={index} href={`repo?name=${item}`} passHref>
                        <StyledLink><li key={index}>{item}</li></StyledLink>
                    </Link>)}
            </UlStyle>
        </ListDiv>
    )
}

export default listContainer