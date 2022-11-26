const username = document.querySelector('.username');
const usertype = document.querySelector('.user-type');
const email = document.querySelector('.user-email');

window.onload = () => {
    if(!sessionStorage.username){
        //location.href = '/login';
    } else{
        username.innerHTML = sessionStorage.username;
        usertype.innerHTML = (sessionStorage.usertype).toUpperCase();
        email.innerHTML = sessionStorage.email;
    }
}

const logOut = document.querySelector('.logout-btn');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}