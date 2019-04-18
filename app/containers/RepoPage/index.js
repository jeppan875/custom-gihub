import { withRouter } from 'next/router'
import Repo from 'containers/Repos/Repo'

const Content = withRouter(props => (
    <Repo name={props.name || props.router.query.name} path={props.path} />
))

const RepoPage = props => {
    return (
        <Content name={props.name} path={props.path} />
    )
}

RepoPage.getInitialProps = ({ query }) => {
    const { name, path } = query
    return { name, path }
}

export default RepoPage