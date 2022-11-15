const greeting = document.querySelector('.greeting');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else{
        greeting.innerHTML = `Hello ${sessionStorage.name}`
    }
}

const logOut = document.querySelector('.logout-btn');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}