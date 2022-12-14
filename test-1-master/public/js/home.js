const username = document.querySelector('.username');
const usertype = document.querySelector('.user-type');
const nav_menu = document.querySelector('#nav');


window.onload = () => {
    if(!sessionStorage.username){
        location.href = '/login';
    } else{
        username.innerHTML = sessionStorage.username;
        usertype.innerHTML = sessionStorage.role;

        if(sessionStorage.role == 'researcher'){
            nav_menu.style.visibility = 'hidden';
        }
        else{
            nav_menu.style.visibility = 'visible';
        }

    }
}

// const logOut = document.querySelector('.logout-btn');

// logOut.onclick = () => {
//     sessionStorage.clear();
//     location.reload();
// }