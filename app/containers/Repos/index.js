import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_REPOS_SAGA } from './constants'
import { getRepoNames } from './selector'
import { ListDiv, UlStyle, StyledLink } from 'components/listContainer'
import Link from 'next/link'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRepos: () => dispatch({ type: FETCH_REPOS_SAGA }),
    }
}
const mapStateToProps = (state) => {
    return {
        repoNames: getRepoNames(state)
    }
}

class Repos extends Component {

    componentDidMount() {
        const { fetchRepos } = this.props
        fetchRepos()
    }

    render() {
        const { repoNames } = this.props
        return (
            <div>
                <ListDiv>
                    <UlStyle>
                        {repoNames.map((item, index) =>
                            <Link key={index} href={`repo?name=${item}`} passHref>
                                <StyledLink><li key={index}>{item}</li></StyledLink>
                            </Link>)}
                    </UlStyle>
                </ListDiv>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Repos)