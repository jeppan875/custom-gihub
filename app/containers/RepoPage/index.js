import { withRouter } from 'next/router'
import Repo from 'containers/Repos/Repo'

const Content = withRouter(props => (
    <Repo name={props.router.query.name} />
))

const repoPage = props => (
    <Content />
)

export default repoPage