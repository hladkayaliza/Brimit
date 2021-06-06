const url="http://localhost:63342/Brimit/index.html"

export function generateRequest(object) {
    let parameters = Object.keys(object).map(function(key) {
        return key + "=" + object[key];
    }).join('&');
    let fullRequest = url + '?' + parameters;
    return fullRequest;
};
