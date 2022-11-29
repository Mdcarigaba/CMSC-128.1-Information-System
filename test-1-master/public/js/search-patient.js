let recordsData = [
    {
        cifNo: 'CIF-1',
        labNo: 'LAB-1200',
        lastName: 'dela Cruz',
        firstName: 'Juan',
        middleName: 'Juancho',
        gender: 'M',
        age: '20',
        dateEncoded: '11/09/2022',
        dateCollected: '11/07/2022'
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
        dateCollected: '10/05/2022'
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
        dateCollected: '07/29/2022'
    },
    {
        cifNo: 'CIF-4',
        labNo: 'LAB-1203',
        lastName: 'Sanchez',
        firstName: 'Maria Clara',
        middleName: 'Ibarra',
        gender: 'F',
        age: '65',
        dateEncoded: '08/12/2022',
        dateCollected: '07/29/2022'
    },
    {
        cifNo: 'CIF-5',
        labNo: 'LAB-1204',
        lastName: 'Rizal',
        firstName: 'Crisostomo',
        middleName: 'Jose',
        gender: 'M',
        age: '72',
        dateEncoded: '08/12/2022',
        dateCollected: '07/29/2022'
    },
    {
        cifNo: 'CIF-5',
        labNo: 'LAB-1205',
        lastName: 'Luna',
        firstName: 'Juan',
        middleName: 'Lito',
        gender: 'M',
        age: '35',
        dateEncoded: '08/12/2022',
        dateCollected: '07/29/2022'
    },
    {
        cifNo: 'CIF-6',
        labNo: 'LAB-1206',
        lastName: 'Reyes',
        firstName: 'Harrison',
        middleName: 'Gregorio',
        gender: 'M',
        age: '18',
        dateEncoded: '08/12/2022',
        dateCollected: '07/29/2022'
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
                        <td>${records.cifNo}</td>
                        <td>${records.labNo}</td>
                        <td>${records.lastName}</td>
                        <td>${records.firstName}</td>
                        <td>${records.middleName}</td>
                        <td>${records.gender}</td>
                        <td>${records.age}</td>
                        <td>${records.dateEncoded}</td>
                        <td>${records.dateCollected}</td>
                        <td><button class="new-btn">+ New</button></td>
                    </tr>`;
    }

    console.log(dataHTML);

    tableBody.innerHTML = dataHTML;
}