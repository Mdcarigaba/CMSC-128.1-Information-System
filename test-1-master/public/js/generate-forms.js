let recordsData = [
    {
        cifNo: 'CIF-1',
        labNo: 'LAB-1200',
        lastName: 'dela Cruz',
        firstName: 'Juan',
        gender: 'M',
        age: '20',
        dateCollected: '11/09/2022',
        dateSubmitted: '11/07/2022',
    },
    {
        cifNo: 'CIF-2',
        labNo: 'LAB-1201',
        lastName: 'Cruz',
        firstName: 'Juana',
        middleName: 'Ibarra',
        gender: 'F',
        age: '40',
        dateEncoded: '10/13/2022',
        dateCollected: '10/05/2022',
    }, 
    {
        cifNo: 'CIF-3',
        labNo: 'LAB-1202',
        lastName: 'Santos',
        firstName: 'Maria Luna',
        middleName: 'Castro',
        gender: 'F',
        age: '38',
        dateEncoded: '08/12/2022',
        dateCollected: '07/29/2022',
        validationStatus: 'Validated',
        finalClassification: 'Suspect'
    },
    {
        cifNo: 'CIF-4',
        labNo: 'LAB-1203',
        lastName: 'Sanchez',
        firstName: 'Maria Clara',
        gender: 'F',
        age: '65',
        dateCollected: '08/12/2022',
        dateSubmitted: '07/29/2022',
    },
    {
        cifNo: 'CIF-5',
        labNo: 'LAB-1204',
        lastName: 'Rizal',
        firstName: 'Crisostomo',
        gender: 'M',
        age: '72',
        dateCollected: '08/12/2022',
        dateSubmitted: '07/29/2022',
    },
    {
        cifNo: 'CIF-5',
        labNo: 'LAB-1205',
        lastName: 'Luna',
        firstName: 'Juan',
        gender: 'M',
        age: '35',
        dateCollected: '08/12/2022',
        dateSubmitted: '07/29/2022',
    },
    {
        cifNo: 'CIF-6',
        labNo: 'LAB-1206',
        lastName: 'Reyes',
        firstName: 'Harrison',
        gender: 'M',
        age: '18',
        dateCollected: '08/12/2022',
        dateSubmitted: '07/29/2022',
    }
];

window.onload = () => {
    loadTableData(recordsData);
};

loadTableData(recordsData);

function loadTableData(recordsData) {
    const tableBody = document.getElementById('tableData');
    let dataHTML = '';

    var button = document.createElement(button);
    button.innerHTML = "+ New"

    for(let records of recordsData) {
        dataHTML += `<tr>
                        <td>${records.checkbox}</td>
                        <td>${records.cifNo}</td>
                        <td>${records.labNo}</td>
                        <td>${records.lastName}</td>
                        <td>${records.firstName}</td>
                        <td>${records.gender}</td>
                        <td>${records.age}</td>
                        <td>${records.dateCollected}</td>
                        <td>${records.dateSubmitted}</td>
                        <td>${records.DRU}</td>
                        <td><button class="new-btn">Generate Forms</button></td>
                    </tr>`;
    }

    console.log(dataHTML);

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