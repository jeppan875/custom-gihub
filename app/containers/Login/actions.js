import { GIT_LOGIN_ACTION, GIT_LOGOUT_ACTION } from './constants';

export function gitLoginAction({ key, data }) {
    return {
        type: GIT_LOGIN_ACTION,
        key,
        data
    };
}
export function gitLogoutAction() {
    console.log('action')
    return {
        type: GIT_LOGOUT_ACTION,
    };
}