export function parseUrl(urlParameters) {
    if (urlParameters !== '') {
        let parameters = urlParameters.substring(1);
        return Object.fromEntries(new URLSearchParams(parameters));
    }
}
