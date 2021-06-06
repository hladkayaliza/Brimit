export function parseUrl(url) {
    if (url != '') {
        let model = {};
        let urlToParse = (url[0] === '?' ? url.substring(1) : url);
        let parametersPairs = urlToParse.split('&');
        parametersPairs.forEach(function (item) {
            let pair = item.split('=');
            model[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        });
        return model;
    }
}