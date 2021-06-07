import { OPTION_NAME, OPTION_STATUS } from './constants.js';
import { getValue, getValueFromRadio, getValuesFromCheckbox, getValuesFromSelect } from './getter.js';

const modelDOMElements = {
    FName: document.getElementById('FName'),
    LName: document.getElementById('LName'),
    Email: document.getElementById('Email'),
    Phone: document.getElementById('Phone'),
    Sex: document.querySelectorAll('input[name="Sex"]'),
    Skills: document.querySelectorAll('input[name=Skills]'),
    Departments: document.querySelector('select')
};

export function mapToUserModel() {
    const model = {
        FName: getValue(modelDOMElements.FName),
        LName: getValue(modelDOMElements.LName),
        Email: getValue(modelDOMElements.Email),
        Phone: getValue(modelDOMElements.Phone),
        Sex: getValueFromRadio(modelDOMElements.Sex),
        Skills: getValuesFromCheckbox(modelDOMElements.Skills),
        Departments: getValuesFromSelect(modelDOMElements.Departments)
    };

    return model;
}

export function mapToUserForm(data) {
    
    if (data && Object.keys(data).length) {
        const keys = Object.keys(modelDOMElements);
        keys.forEach(function (key) {
            if (key === OPTION_NAME.SEX || key === OPTION_NAME.SKILLS) {
                applyValue(data[key], modelDOMElements[key], OPTION_STATUS.CHECKED);
                return;
            }
            if(key === OPTION_NAME.DEPARTMENTS) {
                applyValue(data[key], [...modelDOMElements[key].options], OPTION_STATUS.SELECTED);
                return;
            }
            modelDOMElements[key].value = data[key] ? data[key] : '';
        });
    }
}

function applyValue(val, items, prop) {
    if(val) {
        let valuesArray = val.split(',');

        items.forEach(function (item) {
            item[prop] = valuesArray.some(function(i) {
                return i === item.value;
            });
        });
    }

}
