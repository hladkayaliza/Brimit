import { mapToUserModel, mapToUserForm } from './assets/scripts/mapper.js';
import { generateRequest } from './assets/scripts/request-helper.js';
import { parseUrl } from './assets/scripts/parser.js';

document.addEventListener('DOMContentLoaded', function(e) {
    const addUserForm = document.getElementById('AddUserFormId')
    const dataFromURL = parseUrl(window.location.search);
    mapToUserForm(dataFromURL);

    addUserForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const user = mapToUserModel(e);
        console.log(user);
        addUserForm.reset();
        const requestedUrl = generateRequest(user);
        location.href = requestedUrl;
    });
});
