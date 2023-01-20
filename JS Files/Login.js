

const name = document.getElementById('user');
const pass = document.getElementById('pass');
const button = document.getElementById('btn');
const Error = document.getElementById('error');

button.addEventListener((e) => {
    const errors = [];

    if(Email.ariaValueMax.trim() === ('')){
        errors.push('Email required');
    }
    if(errors.length > 0) {
        e.preventDefault();
        Error.toggleAttributes('hidden');
        Error.innerHTML = errors.join('');
    }
});

