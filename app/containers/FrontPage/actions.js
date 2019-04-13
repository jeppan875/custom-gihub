import { GIT_ISSUES } from './constants';

export function fetchIssues() {
    return {
        type: GIT_ISSUES,
    };
}
