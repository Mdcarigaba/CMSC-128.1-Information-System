let DRUqueue = [
    {
        druNum: 1,
        dru: 'Cavite City CHO',
        numEntries: 230,
        submissionTime: '8:00-8:20'
    },
    {
        druNum: 2,
        dru: 'Dasmarinas City CHO',
        numEntries: 187,
        submissionTime: '8:20-8;40'
    },
    {
        druNum: 3,
        dru: 'Aadeo RHU',
        numEntries: 65,
        submissionTime: '8:40-9:00'
    },
    {
        druNum: 4,
        dru: 'Tagaytay City CHO',
        numEntries: 39,
        submissionTime: '9:00-9:20'
    },
    {
        druNum: 5,
        dru: 'Dasmarinas City CHO',
        numEntries: 12,
        submissionTime: '9:20-9:40'
    },
    {
        druNum: 6,
        dru: 'Trece Martires CHO',
        numEntries: 8,
        submissionTime: '9:40-10:0'
    }
];

window.onload = () => {
    loadTableData(DRUqueue);
}

loadTableData(DRUqueue);

function loadTableData(DRUqueue) {
    const tableBody = document.getElementById('tableData');
    let dataHTML = '';

    for(let records of DRUqueue) {
        dataHTML += `<tr>
                        <td>${records.druNum}</td>
                        <td>${records.dru}</td>
                        <td>${records.numEntries}</td>
                        <td>${records.submissionTime}</td>
                    </tr>`;
    }

    tableBody.innerHTML = dataHTML;
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

