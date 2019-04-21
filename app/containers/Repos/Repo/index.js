import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FETCH_REPO_CONTENT_SAGA } from '../constants'
import { ListDiv, UlStyle, StyledLink, StyledLi, TopDiv } from 'components/repoNavigation'
import IconImg from 'components/fileIcon'
import { getRepoLinks } from '../selector'
import Link from 'next/link'
import { isArray } from 'util';
import Code from '../Code'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchContent: (name, path) => dispatch({ type: FETCH_REPO_CONTENT_SAGA, name, path }),
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        repoLinks: getRepoLinks({ state, name: ownProps.name, path: ownProps.path }),
    }
}

class Repo extends Component {

    componentWillMount() {
        const { name, fetchContent, path } = this.props
        const pathL = path ? path : '/'
        fetchContent(name, pathL)
    }

    componentDidUpdate() {
        const { name, fetchContent, path, repoLinks } = this.props
        if (!repoLinks) {
            const pathL = path ? path : '/'
            fetchContent(name, pathL)
        }
    }

    render() {
        const { name, repoLinks, fetchContent } = this.props
        const isDir = isArray(repoLinks)
        const isFile = repoLinks && repoLinks.type === 'file'
        return (
            <TopDiv>
                {isDir && <ListDiv>
                    <UlStyle>
                        {repoLinks.map((item, index) =>
                            <Link key={index} href={`repo?name=${name}&path=${item.path}`} passHref>
                                <StyledLink>
                                    <Fragment>
                                        <IconImg src={`/static/${item.type}.png`} />
                                        <StyledLi onClick={() => fetchContent(name, item.path)} key={index}>{item.name}</StyledLi>
                                    </Fragment>
                                </StyledLink>
                            </Link>
                        )}
                    </UlStyle>
                </ListDiv>}
                {isFile && <Code code={atob(repoLinks.content)} />
                }
            </TopDiv>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Repo)