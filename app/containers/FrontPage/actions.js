import { FETCH_REPOS } from './constants';

export function fetchRepos() {
    return {
        type: FETCH_REPOS,
    };
}
