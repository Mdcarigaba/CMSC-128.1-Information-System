const psTOD = document.querySelector('.tod-patient');
const psPriority = document.querySelector('.priority-patient');
const labNo = document.querySelector('.lab-no');
const dru = document.querySelector('.dru_hospital');
const investigator = document.querySelector('.investigator');
const interviewDate = document.querySelector('.interview-date');
const philhealthNo = document.querySelector('.philhealth-no');
const testingCategory = document.querySelector('.testing-category');
const lname = document.querySelector('.last-name') || null;
const fname = document.querySelector('.first-name');
const mname = document.querySelector('.middle-name');
const birthday = document.querySelector('.birthday');
const age = document.querySelector('.age');
const sex = document.querySelector('.sex');
const occupation = document.querySelector('.occupation');
const civil_status = document.querySelector('.civil-status');
const nationality = document.querySelector('.nationality');
const passport_no = document.querySelector('.passport-no');
const gross_income = document.querySelector('.gross-income');
const perm_house = document.querySelector('.permanent-house');
const perm_barangay = document.querySelector('.perm-brgy');
const perm_municipality = document.querySelector('.perm-municipality');
const perm_province = document.querySelector('.perm-province');
const perm_region = document.querySelector('.perm-region');
const perm_home_phone_number = document.querySelector('.perm-phone-no');
const perm_cellphone_number = document.querySelector('.perm-cellphone-no')
const perm_email = document.querySelector('.email');
const curr_house = document.querySelector('.curr-house');
const curr_barangay = document.querySelector('.curr-brgy');
const curr_municipality = document.querySelector('.curr-municipality');
const curr_province = document.querySelector('.curr-province');
const curr_region = document.querySelector('.curr-region');
const curr_home_phone_number = document.querySelector('.curr-phone-no');
const curr_cellphone_number = document.querySelector('curr-cellphone-no')
const curr_email = document.querySelector('.curr-email');

//to add buttons 

//Employer

const employer_name = document.querySelector('.employer-name');
const employer_occupation = document.querySelector('.employer-occupation');
const place_of_work = document.querySelector('.place-of-work');
const building_name = document.querySelector('.employer-house');
const employer_street = document.querySelector('.employer-street');
const employer_city = document.querySelector('.employer-city');
const employer_province = document.querySelector('.employer-province');
const employer_country = document.querySelector('.employer-country');
const office_phone_number = document.querySelector('.office-phone-no');
const office_cellphone_number = document.querySelector('.office-cellphone-no');

//buttons

//travel history
//to add radio buttons

const port_of_exit = document.querySelector('.exit-port');
const airline_or_seavessel = document.querySelector('.airline-seavessel');
const flight_or_vessel_no = document.querySelector('.flight-vessel-no');
const dop = document.querySelector('.departure-date');
const doa = document.querySelector('.arrival-date');

//buttons
//exposure history

//to add radio buttons

const place_visited = document.querySelector('.visited-place');
const name_of_place = document.querySelector('.place-name');
const date_visited = document.querySelector('.date-visited');


//add more rows
//close contact details
const close_contact_name = document.querySelector('.close-contact-name1');
const close_contact_number = document.querySelector('.close-contact-no1');
const close_contact_name2 = document.querySelector('.close-contact-name2');
const close_contact_number2 = document.querySelector('.close-contact-no2');

//add more rows button

//clinical information
//to add radio buttons

const illness_date = document.querySelector('.illness-date');
const admission_date = document.querySelector('.admission-date');
const temperature = document.querySelector('.fever-celsius');

//sign symptoms
//checkbox

//is there any history of other illness options - radio

//chest XRAY - radio 

//CXR results - radio

//Other radiological findings - radio

//assessed as high risk pregnancy - radio

//specimen information
//const serum = document.querySelector('.')
const serum_hr_collected = document.querySelector('.serum-hr-collected')
const serum_min_collected = document.querySelector('.serum-min-collected')
const serum_hr_sent = document.querySelector('.serum-hr-sent')
const serum_min_sent = document.querySelector('.serum-min-sent')
const serum_hr_received = document.querySelector('.serum-hr-received')
const serum_min_received = document.querySelector('.serum-min-received')
const serum_virus_isolation = document.querySelector('serum-virus-isolation')
const serum_pcr = document.querySelector('serum-pcr')

const naso_hr_collected = document.querySelector('.naso-hr-collected')
const naso_min_collected = document.querySelector('.naso-min-collected')
const naso_hr_sent = document.querySelector('.naso-hr-sent')
const naso_min_sent = document.querySelector('.naso-min-sent')
const naso_hr_received = document.querySelector('.naso-hr-received')
const naso_min_received = document.querySelector('.naso-min-received')
const naso_virus_isolation = document.querySelector('naso-virus-isolation')
const naso_pcr = document.querySelector('naso-pcr')

const oro_hr_collected = document.querySelector('.oro-hr-collected')
const oro_min_collected = document.querySelector('.oro-min-collected')
const oro_hr_sent = document.querySelector('.oro-sent')
const oro_min_sent = document.querySelector('.oro-min-sent')
const oro_hr_received = document.querySelector('.oro-hr-received')
const oro_min_received = document.querySelector('.oro-min-received')
const oro_virus_isolation = document.querySelector('oro-virus-isolation')
const oro_pcr = document.querySelector('oro-pcr')

const other_hr_collected = document.querySelector('.other-hr-collected')
const other_min_collected = document.querySelector('.other-min-collected')
const other_hr_sent = document.querySelector('.other-hr-sent')
const other_min_sent = document.querySelector('.other-min-sent')
const other_hr_received = document.querySelector('.other-hr-received')
const other_min_received = document.querySelector('.other-min-received')
const other_virus_isolation = document.querySelector('other-virus-isolation')
const other_pcr = document.querySelector('other-pcr')

const final_suspect = document.querySelector('.final-suspect')
const final_probable = document.querySelector('.final-probable')
const final_confirmed = document.querySelector('.final-confirmed')
const final_discharged = document.querySelector('.final-discharged')
const final_unknown = document.querySelector('.final-unknown')

//Final Classification
//const serum_min_received = document.querySelector('.serum-min-received')
//const serum_virus_isolation = document.querySelector('serum-virus-isolation')
//const serum_pcr = document.querySelector('serum-pcr')
//checkbox
//const 

//const close_contact_number = document.querySelector('.close-contact-no1');





const email = document.querySelector('.email');

const password = document.querySelector('.password');
const usertype = document.querySelector('.usertype');
const druselect = document.querySelector('.dru');
const submitBtn = document.querySelector('.save-button');

submitBtn.addEventListener('click', () => {
    //console.log(fname.value)
    fetch('/insert-cif', {
        method: 'post',
        headers: new Headers({ 'Content-Type' : 'application/json'}),
        body: JSON.stringify({
            psTOD: psTOD.value,
            psPriority: psPriority.value,
            labNo: labNo.value,
            dru: dru.value,
            investigator: investigator.value,
            interviewDate: interviewDate.value,
            philhealthNo: philhealthNo.value,
            testingCategory: testingCategory.value,
            lname: lname.value,
            fname: fname.value,
            mname: mname.value,
            birthday: birthday.value,
            age: age.value,
            sex: sex.value,
            occupation: occupation.value,
            civil_status: civil_status.value,
            nationality: nationality.value,
            passport_no: passport_no.value,
            gross_income: gross_income.value,
            perm_house: perm_house.value,
            perm_barangay: perm_barangay.value,
            perm_municipality: perm_municipality.value,
            perm_province: perm_province.value,
            perm_region: perm_region.value,
            perm_home_phone_number: perm_home_phone_number.value,
            perm_cellphone_number: perm_cellphone_number.value,
            perm_email: perm_email.value,
            curr_house: curr_house.value,
            curr_barangay: curr_barangay.value,
            curr_municipality: curr_municipality.value,
            curr_province: curr_province.value,
            curr_region: curr_region.value,
            curr_home_phone_number: curr_home_phone_number.value,
            curr_email: curr_email.value,
            employer_name: employer_name.value,
            employer_occupation: employer_occupation.value,
            place_of_work: place_of_work.value,
            building_name: building_name.value,
            employer_street: employer_street.value,
            employer_city: employer_city.value,
            employer_province: employer_province.value,
            employer_country: employer_country.value,
            office_phone_number: office_phone_number.value,
            office_cellphone_number: office_cellphone_number.value,
            //buttons
            place_visited: place_visited.value,
            name_of_place: name_of_place.value,
            date_visited: date_visited.value,
            //
            close_contact_name: close_contact_name.value,
            close_contact_number: close_contact_number.value,
            close_contact_name2: close_contact_name2.value,
            close_contact_number2: close_contact_number2.value,
            illness_date: illness_date.value,
            admission_date: admission_date.value,
            temperature: temperature.value,
            serum_hr_collected: serum_hr_collected.value,
            serum_min_collected: serum_min_collected.value,
            serum_hr_sent: serum_hr_sent.value,
            serum_min_sent: serum_min_sent.value,
            serum_hr_received: serum_hr_received.value,
            serum_min_received: serum_min_received.value,
            serum_virus_isolation: serum_virus_isolation.value,
            serum_pcr: serum_pcr.value
        })
    })
})



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
