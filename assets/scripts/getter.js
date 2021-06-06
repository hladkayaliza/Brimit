export function getValueFromRadio(radioInput){
    if(radioInput) {
        let value = [...radioInput].filter(function(item) {
            return item.checked;
        });

        return value.length ? value[0].value : null;
    }
}

export function getValuesFromCheckbox(checkboxInput){
    if(checkboxInput) {
        return [...checkboxInput].reduce(function(result, item) {
            if(item.checked) {
                item.checked ? result.push(item.value) : result;
            }
            return result;
        }, []);
    }
}

export function getValuesFromSelect(selectInput) {
    if(selectInput) {
        return [...selectInput.selectedOptions].reduce(function (result, item) {
            if(item.selected) {
                item.selected ? result.push(item.value) : result;
            }
            return result;
        }, [])
    }
}

export function getValue(input) {
    if (input) {
        return input.value;
    }
}
