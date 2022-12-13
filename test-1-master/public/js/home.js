const username = document.querySelector('.username');
const usertype = document.querySelector('.user-type');
const email = document.querySelector('.user-email');

let DRUqueue = [
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
    {   submissionTime: '', dru: 'Cavite City CHO', numEntries: 187,
    },
];


// Sort the DRUqueue array in descending order by the numEntries property
DRUqueue.sort((a, b) => b.numEntries - a.numEntries);

let startHour = 8; // starting time for submission times
let interval = 20; // interval in minutes between submission times

for (let i = 0; i < DRUqueue.length; i++) {
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
    loadTableData(DRUqueue);
}

loadTableData(DRUqueue);

function loadTableData(DRUqueue) {
    const tableBody = document.getElementById('tableData');
    let dataHTML = '';

    for(let records of DRUqueue) {
        dataHTML += `<tr>
                        <td>${records.submissionTime}</td>
                        <td>${records.dru}</td>
                        <td>${records.numEntries}</td>
                    </tr>`;
    }
    tableBody.innerHTML = dataHTML;
}

const today = document.getElementById('.to-date');
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
today.textContent = currentDate;

console.log(currentDate); // "17-6-2022"

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
