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
        repoLinks: getRepoLinks({ state, name: ownProps.name, path: ownProps.path })
    }
}

class Repo extends Component {

    componentDidMount() {
        const { name, fetchContent } = this.props
        fetchContent(name, '/')
    }

    render() {
        const { name, repoLinks, path, fetchContent } = this.props
        const isDir = isArray(repoLinks)
        const isFile = repoLinks && repoLinks.type === 'file'
        console.log(name)
        console.log(repoLinks)
        console.log(path)
        console.log(isDir)
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