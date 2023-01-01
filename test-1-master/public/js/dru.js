const username = document.querySelector('.username');
const usertype = document.querySelector('.user-type');
const nav_menu = document.querySelector('#nav');
let DRUqueue = [
    {   druNum: 0, dru: 'Cavite City CHO', numEntries: 97, submissionTime: '',},
    {   druNum: 0, dru: 'Dasmarinas City CHO', numEntries: 230, submissionTime: '',},
    {   druNum: 0, dru: 'Amadeo RHU', numEntries: 65, submissionTime: '',},
    {   druNum: 0, dru: 'Tagaytay City CHO', numEntries: 39, submissionTime: '',},
    {   druNum: 0, dru: 'Alfonso RHU', numEntries: 12, submissionTime: ''},
    {   druNum: 0, dru: 'Trece Martires CHO', numEntries: 90, submissionTime: ''},
    {   druNum: 0, dru: 'General Trias CHO', numEntries: 187, submissionTime: ''},
    {   druNum: 0, dru: 'Indang RHU', numEntries: 212, submissionTime: ''},
    {   druNum: 0, dru: 'Naic RHU', numEntries: 135, submissionTime: ''},
    {   druNum: 0, dru: 'Noveleta RHU', numEntries: 70, submissionTime: ''},
    {   druNum: 0, dru: 'Aguinaldo RHU', numEntries: 15, submissionTime: ''},
    {   druNum: 0, dru: 'Rosario Health Center', numEntries: 156, submissionTime: ''}
];


// Sort the DRUqueue array in descending order by the numEntries property
DRUqueue.sort((a, b) => b.numEntries - a.numEntries);

let startHour = 8; // starting time for submission times
let interval = 20; // interval in minutes between submission times

for (let i = 0; i < DRUqueue.length; i++) {
    DRUqueue[i].druNum = i + 1; //for druNum

    let minutes = interval * i;
    let hours = Math.floor(minutes / 60);
    let lowerHours = hours + startHour;
    minutes -= hours * 60;
    lowerMinutes = minutes + interval

    if (lowerMinutes == 60) {
        lowerMinutes = 0;
        lowerMinutes = `0${lowerMinutes}`;
        lowerHours = lowerHours + 1;
    }

    if (minutes == 0) {
        minutes = `0${minutes}`;
    }

    if (lowerHours != 12) {
        DRUqueue[i].submissionTime = `${startHour + hours}:${minutes} AM - ${lowerHours}:${lowerMinutes} AM`;
    } else {
        DRUqueue[i].submissionTime = `${startHour + hours}:${minutes} AM -${lowerHours}:${lowerMinutes} PM`;
    }

}

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

        loadTableQData(DRUqueue);

    }
}

loadTableQData(DRUqueue);

function loadTableQData(DRUqueue) {
    const tableBody = document.getElementById('tableQData');
    let dataHTML = '';

    var button = document.createElement(button);
    button.innerHTML = "Send Email"

    for(let records of DRUqueue) {
        dataHTML += `<tr>
                        <td>${records.druNum}</td>
                        <td>${records.dru}</td>
                        <td>${records.numEntries}</td>
                        <td>${records.submissionTime}</td>
                        <td><button class="email-btn" onclick="SendMail()">Send Email</button></td>
                    </tr>`;
    }
    tableBody.innerHTML = dataHTML;
}

// Define the SendMail() function outside the for loop
function SendMail() {
    var params = {
        subject : 'DRU Schedule',
      dru_email : 'sinag.testdru1@gmail.com', //email of dru
      from_name : 'Sinag Laboratories',
      dru_name : 'Dasmarinas City CHO',
      time_range : '8:00 AM - 8:20 AM',
      numEntries : 230
    }
    emailjs.send("service_7lws35l", "template_496gmhf", params).then(function(res) {
      alert("SUCCESS!" + res.status);
    });
}



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
