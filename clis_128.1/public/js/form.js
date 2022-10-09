const uname = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const usertype = document.querySelector('.usertype');
const submitBtn = document.querySelector('.submit-btn');

if(uname == null){
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
    submitBtn.addEventListener('click', () => {
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                name: uname.value,
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
    if(!data.name){
        alert("Incorrect password or email");
    } else{
        sessionStorage.name = data.name;
        sessionStorage.email = data.email;
        sessionStorage.usertype = data.usertype;
        
        if(sessionStorage.usertype == 'customer'){
            location.href = '/'
        } else{
            location.href = '/staff'
        }
    }
}

window.onload = () => {
    if(sessionStorage.name){
        location.href='/';
    }
}