'use strict';

function onSubmit(form) {
    let data = {
        user: form.elements['name'].value,
        email: form.elements['email'].value
    };
    let result = request('/users', data);
    console.log(data, result);

}