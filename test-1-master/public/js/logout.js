const logOut = document.querySelector('.logout-btn');

logOut.onclick = () => {
    sessionStorage.clear();
    location.href = '/login'
}