export const getRepos = (state) => {
    return state.github.repos.repos
}

export const getRepoContent = ({ state, name, path }) => {
    let defaultKey = ['single', name, 'content']
    const key = !path ? defaultKey : ['single', name, ...path.split('/'), 'content']
    return state.github.repos.getIn(key)
}
