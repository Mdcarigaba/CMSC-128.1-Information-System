//const uname = document.querySelector('.name') || null;
const lname = document.querySelector('.lastname') || null;
const fname = document.querySelector('.firstname');
const mname = document.querySelector('.middlename');
const email = document.querySelector('.email');
const contact = document.querySelector('.contact');
const password = document.querySelector('.password');
const usertype = document.querySelector('.usertype');
const submitBtn = document.querySelector('.submit-btn');

if(lname == null){
    submitBtn.addEventListener('click', () => {
        fetch('/login-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })
} else{
    let druid = 1
    submitBtn.addEventListener('click', () => {
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                username: lname.value + fname.value.charAt(0),
                firstname: fname.value,
                middlename: mname.value,
                lastname: lname.value,
                dru: druid,
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
        alert(data.username + " inc");
    } else{
        sessionStorage.username = data.username;
        sessionStorage.email = data.email;
        sessionStorage.usertype = data.usertype;
        
        if(sessionStorage.usertype == 'staff'){
            location.href = '/'
        } else{
            location.href = '/admin'
        }
    }
}

window.onload = () => {
    if(sessionStorage.username){
        location.href='/';
    }
}