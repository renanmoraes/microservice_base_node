import request   from 'request-promise';
import ApiConfig from '../config/api.conf';
import Service   from './Service';

export class ApiRequest extends Service {

    constructor() {
        super();
        this.config = new ApiConfig().env;
    }

    /**
     * Request a POST HTTP action
     *
     * @param url
     * @param body
     * @param headers
     * @returns {*}
     */
    post(url, body, headers = {}) {
        return this._requestApi('POST', url, body, headers);
    }

    put(url, body, headers = {}) {
        return this._requestApi('PUT', url, body, headers);
    }

    /**
     * Request a GET HTTP action
     *
     * @param url
     * @param authorization
     * @returns {*}
     */
    get(url, authorization = null) {
        return this._requestApi('GET', url, null, authorization);
    }

    /**
     * Do request for any another APIs
     * @param url
     * @param body
     * @param method
     * @param headers
     * @returns {*}
     */
    _requestApi(method, url, body = null, headers = {}) {

        // Ignore self assigned certificate
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

        // Request options
        const options = {
            method : method.toUpperCase(),
            json   : body,
            uri    : url,
            headers: headers
        };

        // Return request promise
        return request(options);
    }
}

export default ApiRequest;