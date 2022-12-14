

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

    try{
    document.getElementById('main-content').style.width = '100%';
    }
    catch(err){
        
    }
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

// const xlxs_gen = document.querySelector('.export-to-excel-btn')

// xlxs_gen.addEventListener('click', () => {
//     fetch('/generate-pdf', {
//         method: 'get',
//         headers: new Headers({'Content-Type': 'application/json'})
//     })
    
// })

// Toggle Dropdown
function toggleDropdown() {
    var element = document.getElementById('dropdown');
    element.classList.toggle("show");
}

const fdru = document.querySelector('#dru-label')
const ffrom = document.querySelector('#from')
const fto = document.querySelector('#to')
const flabn = document.querySelector('#laboratory-number')
const fencode = document.querySelector('#encoder-name')
const tableBody = document.getElementById('tableData');
tableBody.innerHTML = '';
function filterTable(){
    var query = []
    if(fdru.value.length) query.push(`dru.name=${fdru.value.toUpperCase()}`)
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
    if(fencode.value.length) query.push(`staff.lastname=${fencode.value}`)
    const final_query = query.join("&")
    fetch(`/filter-cif?${final_query}`, {
        method: 'get',
        headers: new Headers({'Content-Type': 'application/json'}),
    })
    .then(res => res.json())
    .then(data => {
   
   
    let dataHTML = '';

    var button = document.createElement(button);
    button.innerHTML = "+ New"
        let i = 0;
    for(let indiv of data){
        dataHTML += `<tr>`+
                    `<td><input type='checkbox' class='sel' />`+
                    `<td>CIF-${indiv.id}</td>` +
                    `<td>LAB-${indiv.lab_name}</td>` +
                    `<td>${indiv.lastname}</td>` +
                    `<td>${indiv.firstname}</td>` +
                    `<td>${indiv.sex}</td>` +
                    `<td>${indiv.age}</td>` +
                    `<td>${indiv.date_collected}</td>` +
                    `<td>${indiv.date_interview}</td>` +
                    `<td>${indiv.name}</td>` +
                    `<td><button class="new-btn" onclick="generateSpecPDF(${i})">Generate Forms</button></td>` +
                    `</tr>`
        i++
    }
    tableBody.innerHTML = dataHTML
    })
}