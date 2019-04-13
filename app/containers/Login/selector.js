export const getGitUser = (state, name) => {
    if (state.generic.github && state.generic.github.user) { return state.generic.github.user } else {
        return null
    }
}