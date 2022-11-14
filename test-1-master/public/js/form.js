const username = document.querySelector('.username');
const lname = document.querySelector('.lastname') || null;
const fname = document.querySelector('.firstname');
const mname = document.querySelector('.middlename');
const email = document.querySelector('.email');
const contact = document.querySelector('.contact');
const password = document.querySelector('.password');
const usertype = document.querySelector('.usertype');
const druselect = document.querySelector('.dru');
const submitBtn = document.querySelector('.submit-btn');

if(lname == null){
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
            validateData(data);
        })
    })
} else{
    fetch('/fetch-dru', {
        method: 'get',
        headers: new Headers({ 'Content-Type': 'application/json' }),
    })
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < data.length; i++){
            var option = document.createElement('option')
            option.value = i + 1
            option.innerHTML = data[i].name
            druselect.appendChild(option)
        }
    })

    submitBtn.addEventListener('click', () => {
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                username: ((lname.value + fname.value.charAt(0)).split(" ").join("")).toLowerCase(),
                firstname: fname.value,
                middlename: mname.value,
                lastname: lname.value,
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
        sessionStorage.usertype = data.usertype;
        location.href = '/'
    }
}

window.onload = () => {
    if(sessionStorage.username){
        location.href='/';
    }
}