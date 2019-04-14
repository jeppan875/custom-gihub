export const getGitUser = state => {
    if (state.github.user && state.github.user.user) { return state.github.user.user } else {
        return null
    }
}