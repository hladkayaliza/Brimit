export function getValueFromRadio(radio_input){
    if(!!radio_input.length) {
        let value;
        radio_input.forEach(function(item) {
            if(item.checked) {
                value = item.value;
            }
        })
        return value;
    }
}

export function getValueFromCheckbox(checkbox_input){
    if(!!checkbox_input.length) {
        let values = [];
        checkbox_input.forEach(function(item) {
            if(item.checked) {
                values.push(item.value);
            }
        })
        return values;
    }
}

export function getValueFromSelect(select_input) {
    const selectedOptions = select_input.selectedOptions;
    if(!!selectedOptions.length) {
        let values = [];
        Array.from(selectedOptions).forEach(function (item) {
            values.push(item.value);
        })
        return values;
    }
}

export function getValue(input) {
    if (!!input.value) {
        return input.value;
    }
}
