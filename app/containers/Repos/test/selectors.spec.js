import { getRepoContent, getRepos } from 'containers/repos/selector'
import state from './fixture'

describe('Happy path test Repos selectors', () => {
    it('should return name of repo', () => {
        const repos = getRepos(state)
        expect(repos[0].name).toEqual('gitRepo1')
    })
    it('should return content of specific repo', () => {
        const path = 'dir1'
        const name = 'gitRepo1'
        const content = getRepoContent({ state, name, path })
        expect(content[0].name).toEqual('jsFile2')
    })
})