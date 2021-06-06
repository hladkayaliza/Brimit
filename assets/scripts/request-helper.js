import { URLS } from "./constants.js";

export function generateRequest(object) {
    let parameters = Object.keys(object).reduce(function(result, item) {
        return result.concat(`${decodeURIComponent(item)}=${decodeURIComponent(object[item])}&`);
    },'');

    return `${URLS.BASE}?${parameters}`;
};
