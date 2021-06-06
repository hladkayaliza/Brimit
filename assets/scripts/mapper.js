import {getValue, getValueFromRadio, getValueFromCheckbox, getValueFromSelect} from './getter.js';

const fNameInput = document.getElementById('FName');
const lNameInput = document.getElementById('LName');
const emailInput = document.getElementById('Email');
const phoneInput = document.getElementById('Phone');
const sexInput = document.querySelectorAll('input[name="Sex"]');
const skillsInput = document.querySelectorAll('input[name=Skills]');
const departmentInput = document.querySelector('select');

export function mapToUserModel() {
    const model = {
        FName: getValue(fNameInput),
        LName: getValue(lNameInput),
        Email: getValue(emailInput),
        Phone: getValue(phoneInput),
        Sex: getValueFromRadio(sexInput),
        Skills: getValueFromCheckbox(skillsInput),
        Departments: getValueFromSelect(departmentInput)
    };

    return model;
}

export function mapToUserForm(data) {
    if (!!Object.keys(data).length) {
        fNameInput.value = ((data["FName"] === "null" || String(data["FName"]) == "undefined") ? '' : data["FName"]);
        lNameInput.value = ((data["LName"] === "null" || String(data["LName"]) == "undefined") ? '' : data["LName"]);
        emailInput.value = ((data["Email"] === "null" || String(data["Email"]) == "undefined") ? '' : data["Email"]);
        phoneInput.value = ((data["Phone"] === "null" || String(data["Phone"]) == "undefined") ? '' : data["Phone"]);
        sexInput.forEach(function (item) {
            if (item.value === data["Sex"]) {
                item.checked = true;
             }
        })
        skillsInput.forEach(function (item) {
            if (data["Skills"] != null || data["Skills"] != undefined) {
                data["Skills"].split(',').reduce(function ( acc, elem) {
                    if (item.value === elem) {
                        item.checked = true;
                    }
                }, 0)
            }
        })
        Array.from(departmentInput.options).forEach(function (option) {
            if (data["Departments"] != null || data["Departments"] != undefined) {
                data["Departments"].split(',').reduce(function(acc, elem) {
                    if (option.value === elem) {
                        option.selected = true;
                    }
                },0)
            }
        })
    }
}
