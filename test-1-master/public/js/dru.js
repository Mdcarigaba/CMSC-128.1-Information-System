
// Minimize sidebar
document.getElementById('close-nav').addEventListener('click', () => {
    document.getElementById('nav').style.width = '100px';
    document.getElementById('open-nav').style.display = 'inline';

    const toggleElements = document.querySelectorAll('.nav-component-toggle');
    toggleElements.forEach(el => {
        el.style.display = 'none';
    });

    document.querySelector('hr').style.width = '37px';
    document.querySelector('.btn-collapse').style.display = 'none';
    document.querySelector('.btn-expand').style.display = 'block';

    const navItem = document.querySelectorAll('.nav-item');
    navItem.forEach(el => {
        el.style.textAlign = 'center';
        // el.style.backgroundColor = 'transparent';
        el.style.display = 'block';
        el.style.width = '65%';
        el.style.marginLeft = '10px';
    });

    const navItemImg = document.querySelectorAll('.nav-item > img');
    navItemImg.forEach(el => {
        el.style.paddingLeft = '0px';
    });

    document.getElementById('main-content').style.width = '100%';
});

// Maximize sidebar
document.getElementById('open-nav').addEventListener('click', () => {
    document.getElementById('nav').style.width = '325px';
    document.getElementById('open-nav').style.display = 'none';

    const toggleElements = document.querySelectorAll('.nav-component-toggle');
    toggleElements.forEach(el => {
        el.style.display = 'inline';
    });

    document.querySelector('hr').style.width = '121.48px';
    document.querySelector('.btn-expand').style.display = 'none';
    document.querySelector('.btn-collapse').style.display = 'block';

    const navItem = document.querySelectorAll('.nav-item');
    navItem.forEach(el => {
        el.style.textAlign = 'none';
        // el.style.backgroundColor = 'rgba(255,255,255, 0.3)';
        el.style.display = 'flex';
        el.style.width = '95%';
        el.style.marginLeft = '0px';
    });

    const navItemImg = document.querySelectorAll('.nav-item > img');
    navItemImg.forEach(el => {
        el.style.paddingLeft = '5px';
    });


    document.getElementById('main-content').style.width = '80%';
});

// Toggle Dropdown
function toggleDropdown() {
    var element = document.getElementById('dropdown');
    element.classList.toggle("show");
}

