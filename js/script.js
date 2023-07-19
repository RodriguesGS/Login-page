window.onload = function() {
    let signin = document.querySelector('.signin')
    signin.style.display = 'flex'
}

function change() {
    let signin = document.querySelector('.signin')
    let signup = document.querySelector('.signup')

    if (signin.style.display === 'flex') {
        signup.style.display = 'flex'
        signin.style.display = 'none'
    } else {
        signup.style.display = 'none'
        signin.style.display = 'flex'
    }
}

function cleanSignIn() {
    let user = document.querySelector('#signin-user');
    let pass = document.querySelector('#signin-password');
    user.value = '';
    pass.value = '';
}

function cleanSignUp() {
    let user = document.querySelector('#signup-user');
    let pass = document.querySelector('#signup-password');
    let cPass = document.querySelector('#confirm-password');
    user.value = '';
    pass.value = '';
    cPass.value = '';
}