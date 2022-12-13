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

// window.onload = () => {
//     loadTableData(recordsData);
// };

//loadTableData(recordsData);

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
                        <td><a class="new-btn" href="/cif">+ New</a></td>
                    </tr>`;
    }

    console.log(dataHTML);

    tableBody.innerHTML = dataHTML;
}

const flname = document.querySelector('#last-name')
const ffrom = document.querySelector('#from')
const fto = document.querySelector('#to')
const flabn = document.querySelector('#laboratory-number')
const ffname = document.querySelector('#first-name')
const tableBody = document.getElementById('tableData');
tableBody.innerHTML = '';
function searchTable(){
    var query = []
    if(flname.value.length) query.push(`patient.lastname=${flname.value}`)
    if(ffrom.value.length) {
        var format_from = ffrom.value.split('/')
        var temp = format_from.pop()
        format_from.unshift(temp)
        var date_from = format_from.join("/")
        query.push(`from=${date_from}`)
    }
    if(fto.value.length)  {
        var format_to = fto.value.split('/')
        var temp = format_to.pop()
        format_to.unshift(temp)
        var date_to = format_to.join("/")
        query.push(`to=${date_to}`)
    }
    if(flabn.value.length) query.push(`tests.lab_name=${flabn.value}`)
    if(ffname.value.length) query.push(`patient.firstname=${ffname.value}`)
    const final_query = query.join("&")
    fetch(`/search-cif?${final_query}`, {
        method: 'get',
        headers: new Headers({'Content-Type': 'application/json'}),
    })
    .then(res => res.json())
    .then(data => {
   
   
    let dataHTML = '';

    var button = document.createElement(button);
    button.innerHTML = "+ New"

    for(let indiv of data){
        dataHTML += `<tr>`+
                    `<td>CIF-${indiv.id}</td>` +
                    `<td>LAB-${indiv.lab_name}</td>` +
                    `<td>${indiv.lastname}</td>` +
                    `<td>${indiv.firstname}</td>` +
                    `<td>${indiv.middlename}</td>` +
                    `<td>${indiv.sex}</td>` +
                    `<td>${indiv.age}</td>` +
                    `<td>${indiv.date_interview}</td>` +
                    `<td>${indiv.date_collected}</td>` +
                    `<td><button class="new-btn" href='/cif'>New</button></td>` +
                    `</tr>`
    }
    tableBody.innerHTML = dataHTML
    })
}