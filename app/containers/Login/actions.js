import { GIT_LOGIN, GIT_LOGOUT } from './constants';

export function gitLogin({ user }) {
    return {
        type: GIT_LOGIN,
        user
    };
}
export function gitLogout() {
    return {
        type: GIT_LOGOUT,
    };
}