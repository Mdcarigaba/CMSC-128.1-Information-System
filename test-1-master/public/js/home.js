const user_name = document.querySelector('.username');
const user_type = document.querySelector('.user-type');
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

window.onload = () => {
    if(!sessionStorage.username){
        location.href = '/login';
    } else{
        user_name.innerHTML = sessionStorage.username;
        user_type.innerHTML = sessionStorage.role;

        if(sessionStorage.role == 'researcher'){
            nav_menu.style.visibility = 'hidden';
        }
        else{
            nav_menu.style.visibility = 'visible';
        }
        try{
        loadTableQData(DRUqueue);
        } catch(err){

        }

    }
}




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

//total number of entries
const sum = DRUqueue.reduce((accumulator, object) => {
    return accumulator + object.numEntries;
}, 0)
try{
document.getElementById('totalSamples').innerHTML = sum;
}
catch(err){

}

try{
loadTableQData(DRUqueue);
}
catch(err){

}

function loadTableQData(DRUqueue) {
    const tableBody = document.getElementById('tableQData');
    
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

