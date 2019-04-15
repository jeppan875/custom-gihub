import { INSERT_REPOS_ACTION, INSERT_SINGLE_REPOS_ACTION, RESET_REPOS_ACTION } from './constants';

export const insertReposAction = ({ key, data }) => {
    return ({
        type: INSERT_REPOS_ACTION,
        data,
        key,
    })
};
export const insertSingleRepoAction = ({ keys, data }) => {
    console.log(keys)
    return ({
        type: INSERT_SINGLE_REPOS_ACTION,
        data,
        keys,
    })
};
export const resetReposAction = () => {
    return ({
        type: RESET_REPOS_ACTION,
    })
};
