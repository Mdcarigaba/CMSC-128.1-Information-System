const username = document.querySelector('.username')|| null;
const lname = document.querySelector('.lastname') ;
const fname = document.querySelector('.firstname');
const mname = document.querySelector('.middlename');
const email = document.querySelector('.email');
const contact = document.querySelector('.contact');
const password = document.querySelector('.password');
const usertype = document.querySelector('.usertype');
const druselect = document.querySelector('.dru');
const submitBtn = document.querySelector('.submit-btn');

if(username != null){
    submitBtn.addEventListener('click', () => {
        fetch('/login-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data[0]);
        })
    })
} else{
    submitBtn.addEventListener('click', () => {
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                username: ((lastname.value + firstname.value.charAt(0)).split(" ").join("")).toLowerCase(),
                firstname: firstname.value,
                middlename: middlename.value,
                lastname: lastname.value,
                dru: druselect.value,
                contact: contact.value,
                email: email.value,
                password: password.value,
                usertype: usertype.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })
}

const validateData = (data) => {
    if(!data.username){
        alert('invalid data');
    } else{
        sessionStorage.username = data.username;
        sessionStorage.email = data.email;
        sessionStorage.role = data.role;
        location.href = '/'
    }
}

window.onload = () => {
    if(sessionStorage.username){
        location.href='/';
    }
}