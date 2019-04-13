export const FETCH_GENERIC_START = 'main/FETCH_GENERIC_START';
export const FETCH_GENERIC_SUCCESS = 'main/FETCH_GENERIC_SUCCESS';
export const FETCH_GENERIC_FAILURE = 'main/FETCH_GENERIC_FAILURE';
export const UPDATE_GENERIC_CACHE = 'main/UPDATE_GENERIC_CACHE';
export const RESET_GENERIC = 'git/RESET_GENERIC';

export const fetchGenericStart = (model, key) => ({
    type: FETCH_GENERIC_START,
    model,
    key,
});

export const fetchGenericSuccess = (model, key, data) => {
    return ({
        type: FETCH_GENERIC_SUCCESS,
        data,
        model,
        key,
    })
};

export const fetchGenericFailure = (model, key, error) => ({
    type: FETCH_GENERIC_FAILURE,
    error,
    model,
    key,
});

export const updateGenericCache = url => ({
    type: UPDATE_GENERIC_CACHE,
    url,
});

export const resetGeneric = () => ({
    type: RESET_GENERIC,
});
