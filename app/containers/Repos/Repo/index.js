import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FETCH_REPO_CONTENT_SAGA } from '../constants'
import { ListDiv, UlStyle, StyledLink, StyledLi, TopDiv } from 'components/repoNavigation'
import IconImg from 'components/fileIcon'
import { getRepoContent } from '../selector'
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
        repoContent: getRepoContent({ state, name: ownProps.name, path: ownProps.path }),
    }
}

class Repo extends Component {

    componentWillMount() {
        const { name, fetchContent, path } = this.props
        const setPath = path ? path : '/'
        fetchContent(name, setPath)
    }

    componentDidUpdate() {
        const { name, fetchContent, path, repoContent } = this.props
        if (!repoContent) {
            const setPath = path ? path : '/'
            fetchContent(name, setPath)
        }
    }

    render() {
        const { name, repoContent, fetchContent } = this.props
        console.log(repoContent)
        const isDir = isArray(repoContent)
        const isFile = repoContent && repoContent.type === 'file'
        return (
            <TopDiv>
                {isDir && <ListDiv>
                    <UlStyle>
                        {repoContent.map((item, index) =>
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
                {isFile && <Code code={atob(repoContent.content)} />
                }
            </TopDiv>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Repo)