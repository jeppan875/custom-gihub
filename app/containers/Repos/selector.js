export const getRepos = (state) => {
    return state.github.repos
}

export const getRepoLinks = ({ state, name, path }) => {
    let pathArr = ['single', name, 'content']
    const slice = !path ? pathArr : ['single', name, ...path.split('/'), 'content']
    return state.github.repos.getIn(slice)
}
