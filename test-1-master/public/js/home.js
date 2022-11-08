const greeting = document.querySelector('.greeting');

window.onload = () => {
    if(!sessionStorage.username){
        location.href = '/login';
    } else{
        greeting.innerHTML = `Hello ${sessionStorage.username}`
    }
}

const logOut = document.querySelector('.logout-btn');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}