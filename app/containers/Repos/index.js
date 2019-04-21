import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_REPOS_SAGA } from './constants'
import { getRepos } from './selector'
import { ListDiv, UlStyle, StyledLink } from 'components/listContainer'
import Link from 'next/link'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRepos: () => dispatch({ type: FETCH_REPOS_SAGA }),
    }
}
const mapStateToProps = (state) => {
    return {
        repos: getRepos(state)
    }
}

const getRepoName = repos => repos.map(repo => repo.name)

class Repos extends Component {

    componentDidMount() {
        const { fetchRepos } = this.props
        fetchRepos()
    }
    render() {
        const { repos } = this.props
        const actualRepos = getRepoName(repos.repos)
        return (
            <div>
                <ListDiv>
                    <UlStyle>
                        {actualRepos.map((item, index) =>
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