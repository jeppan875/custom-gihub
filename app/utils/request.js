import 'isomorphic-fetch';

import config from '../config';
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    console.log(response)
    return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
    console.log('check status')
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json().then(json => {
            const error = new Error(response.statusText);
            error.response = response;
            error.jsonMessage = json; // message from server
            throw error;
        });
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export function request(url, opts = {}) {
    const options = {
        ...opts,
        headers: {
            ...opts.headers,
            SITE: config.API_SITE,
        },
    };
    // options.headers['Content-Type'] = 'application/json';

    if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.info(`Request url: ${url}, options:`, options);
    }

    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON);
}
