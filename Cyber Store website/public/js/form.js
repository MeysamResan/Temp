// redirect to home page if user logged in
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader');

// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');

submitBtn.addEventListener('click', () => {
    if(name != null){ // sign up page
        if(name.value.length < 3){
            showAlert('Name must have more than 3 letters');
        } else if(email == null){
            showAlert('Enter your email');
        } else if(password.value.length < 8){
            showAlert('Password must have more than 8 letters');
        } else if(!number == null){
            showAlert('Enter your phone number');
        } else if(!Number(number.value) || number.value.length < 10){
            showAlert('Invalid number, please enter valid one');
        } else if(!tac.checked){
            showAlert('You must agree to our terms and conditions');
        } else{
            // submit form
            loader.style.display = 'block';
            sendData('/signup', {
                name: name.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
                notification: notification.checked,
                seller: false
            })
        }
    } else{
        // login page
        if(!email.value.length || !password.value.length){
            showAlert('fill all the inputs');
        } else{
            loader.style.display = 'block';
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }
})
