export function parseUrl(urlParameters) {
    if (urlParameters !== '') {
        let model = {};
        let parameters = urlParameters.substring(1);
        let parametersPairs = parameters.split('&');
        parametersPairs.forEach(function (item) {
            let pair = item.split('=');
            if (pair[1] && !(pair[1] === 'null' || pair[1] === 'undefined')) {
                model[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
            }
         });
        return model;
    }
}
