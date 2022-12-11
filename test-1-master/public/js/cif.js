const investigator = document.querySelector('.investigator');

const philhealthNo = document.querySelector('.philhealth-no');

const fname = document.querySelector('.first-name');
const mname = document.querySelector('.middle-name');
const lname = document.querySelector('.last-name') || null;

const age = document.querySelector('.age');
const sex = document.querySelector('.sex');
const birthday = document.querySelector('.birthday');
const occupation = document.querySelector('.occupation');
const civil_status = document.querySelector('.civil-status');
const nationality = document.querySelector('.nationality');

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

//Employer

//added part in server.js
const employer_name = document.querySelector('.employer-name');
const employer_occupation = document.querySelector('.employer-occupation');
//end added part
const place_of_work = document.querySelector('.place-of-work'); //workplace_name in server
const building_name = document.querySelector('.employer-house'); //workplace_hn_bl_lot_buildno in server
const employer_street = document.querySelector('.employer-street'); //workplace_barangay in server
const employer_city = document.querySelector('.employer-city'); //workplace_muni_city
const employer_province = document.querySelector('.employer-province'); //workplace_province
const employer_country = document.querySelector('.employer-country'); //workplace_region
const office_phone_number = document.querySelector('.office-phone-no'); //workplace_home_no
const office_cellphone_number = document.querySelector('.office-cellphone-no'); //workplace_cell_no
//missing for employer part in server.js
//workplace_email 
//works_in_closed_settings
//end missing

//wala sa cif pero nasa server
//---------missing----------
//informant_name, informant_contactno
//relation_to_patient
//health_facility_name
//health_facility_address
//---------end missing-------


//---------missing----------
// city_mun_origin, 
//province_origin, 
//is_lsi, 
//is_apor_localtraveler,
// institution_name, 
// institution_type,
// country_origin, 
// returning_overseas_filipino_health_facility_address,
const interviewDate = document.querySelector('.interview-date'); // date_interview, 
// client_classification, 
//testing_category, 
//validation_status, 
//cif_patient_id, 
//cif_investigator_id,
//is_new_case, 
//is_unknown, 
//other,
//symptoms,
//health_status, 
//case_classification, 
//vaccination, 
//lab_result, 
//chest_image_findings, 
//disposition, 
//exposure,
//health_status_at_consult, 
//case_classification_at_consult,
//date_of_consultation, 
//consultation_facility_name,
//admitted_in, 
//name_of_facility, 
//datetime_admission_isolation
//name_of_vaccine, 
//vaccination_date, 
//dose_number, 
//vaccination_facility_name, 
//vaccination_facility_region, 
//adverse_effect,

const psTOD = document.querySelector('.tod-patient');
const psPriority = document.querySelector('.priority-patient');
const labNo = document.querySelector('.lab-no');
const dru = document.querySelector('.dru_hospital');
const other_investigator = document.querySelector('.other-investigator'); //added
const testingCategory = document.querySelector('.testing-category');
const passport_no = document.querySelector('.passport-no');
const gross_income = document.querySelector('.gross-income');

//to add buttons 

//buttons

//travel history
//to add radio buttons
const travel_yes = document.querySelector('.travel-yes');
const travel_no = document.querySelector('.travel-no');
const port_of_exit = document.querySelector('.exit-port');
const airline_or_seavessel = document.querySelector('.airline-seavessel');
const flight_or_vessel_no = document.querySelector('.flight-vessel-no');
const dop = document.querySelector('.departure-date');
const doa = document.querySelector('.arrival-date');

//buttons
//exposure history

//to add radio buttons
const expo_yes = document.querySelector('.expo-yes');
const expo_no = document.querySelector('.expo-no');
const expo_unknown = document.querySelector('.expose-unknown');
const date_of_contact = document.querySelector('.date-of-contact');
const place_yes = document.querySelector('.place-yes');
const place_no = document.querySelector('.place-no');
const place_unknown = document.querySelector('.place-unknown');

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
//added
const disposition_inpatient = document.querySelector('.disposition-inpatient');
const disposition_outpatient = document.querySelector('.disposition-outpatient');
const disposition_died = document.querySelector('.disposition-died');
const disposition_discharged = document.querySelector('.disposition-discharged');
const disposition_unknown = document.querySelector('.dispositio-unknown');

const illness_date = document.querySelector('.illness-date');
const admission_date = document.querySelector('.admission-date');
const temperature = document.querySelector('.fever-celsius');

//sign symptoms
//checkbox
const asymptomatic = document.querySelector('.asymptomatic');
const fever = document.querySelector('.fever');
const cough = document.querySelector('.cough');
const weakness = document.querySelector('.weakness');
const fatigue = document.querySelector('.fatigue');
const headache = document.querySelector('.headache');
const myalgia = document.querySelector('.myalgia');
const sorethroat = document.querySelector('.sorethroat');
const coryza = document.querySelector('.coryza')
//const cough = document.querySelect - DOUBLE CHECK 
const dyspnea = document.querySelector('.dyspnea');
const anorexia = document.querySelector('.anorexia');
const nausea = document.querySelector('.nausea');
const vomiting = document.querySelector('.vomiting');
const diarrhea = document.querySelector('.diarrhea');
const altered = document.querySelector('.altered');
const anosmia = document.querySelector('.anosmia');
const ageusia = document.querySelector('.ageusia');

//is there any history of other illness options - radio
const history_yes = document.querySelector('.history-yes');
const history_no = document.querySelector('.history-no');
const other_illness_date = document.querySelector('.other-illness-date');

//chest XRAY - radio 
const xray_yes = document.querySelector('.xray-yes');
const xray_no = document.querySelector('.xray-no');
const xray_date = document.querySelector('.xray-date');

//CXR results - radio
const pneumonia_yes = document.querySelector('.pneumonia-yes');
const pneumonia_no = document.querySelector('.pneumonia-no');
const pneumonia_pending = document.querySelector('.pneumonia-pending');
const pneumonia_na = document.querySelector('.pneumonia-na');

//Other radiological findings - radio
const other_findings = document.querySelector('.other_findings');

//assessed as high risk pregnancy - radio
const pregnant_yes = document.querySelector('.pregnant-yes');
const pregnant_no = document.querySelector('.pregnant-no');
const pregnant_na = document.querySelector('.pregnant-na');
const high_yes = document.querySelector('.high-yes');
const high_no = document.querySelector('.high-no');
const high_na = document.querySelector('.high-na');

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
    var inv_surname = investigator.value.split(",")[0]
    console.log(inv_surname)
    var trv_yes = travel_yes
    var trv_no = travel_no
    console.log(trv_yes)
    console.log(trv_no)
    console.log(trv_yes.value)
    console.log(trv_no.value)
    /*fetch('/insert-cif', {
        method: 'post',
        headers: new Headers({ 'Content-Type' : 'application/json'}),
        body: JSON.stringify({
<<<<<<< HEAD
            investigator: inv_surname, //surname for test only, add first name here
=======

            //investigator
>>>>>>> 602b4b5260682a9674232d944b9153d087b28a22

            philhealthNo: philhealthNo.value,
            
            lname: lname.value,
            mname: mname.value,
            fname: fname.value,
            age: age.value,
            sex: sex.value,
            birthday: birthday.value,
<<<<<<< HEAD
=======
            
>>>>>>> 602b4b5260682a9674232d944b9153d087b28a22
            occupation: occupation.value,
            civil_status: civil_status.value,
            nationality: nationality.value,

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
            curr_cellphone_number: curr_cellphone_number.value,
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

            
            psTOD: psTOD.value,
            psPriority: psPriority.value,
            labNo: labNo.value,
            dru: dru.value,
            investigator: investigator.value,
            other_investigator: other_investigator.value,
            interviewDate: interviewDate.value,
            testingCategory: testingCategory.value,

            passport_no: passport_no.value,
            gross_income: gross_income.value,
            
            
            //radio buttons
            //has exposure place element in req.body
            //travel_yes: travel_yes.value,
            //travel_no: travel_no.value,
            has_exposure_place: 
            port_of_exit: port_of_exit.value,
            airline_or_seavessel: airline_or_seavessel.value,
            flight_or_vessel_no: flight_or_vessel_no.value,
            dop: dop.value,
            doa: doa.value,
            expo_yes: expo_yes.value,
            expo_no: expo_no.value,
            expo_unknown: expo_unknown.value,
            date_of_contact: date_of_contact.value,
            place_yes: place_yes.value,
            place_no: place_no.value,
            place_unknown: place_unknown.value,
            //
            place_visited: place_visited.value,
            name_of_place: name_of_place.value,
            date_visited: date_visited.value,
            //
            close_contact_name: close_contact_name.value,
            close_contact_number: close_contact_number.value,
            close_contact_name2: close_contact_name2.value,
            close_contact_number2: close_contact_number2.value,
            disposition_inpatient: disposition_inpatient.value,
            disposition_outpatient: disposition_outpatient.value,
            disposition_died: disposition_died.value,
            disposition_discharged: disposition_charged.value,
            disposition_unknown: disposition_died.value,
            illness_date: illness_date.value,
            admission_date: admission_date.value,
            temperature: temperature.value,

            asymptomatic: asymptomatic.value,
            fever: fever.value,
            cough: cough.value,
            weakness: weakness.value,
            fatigue: fatigue.value,
            headache: headache.value,
            myalgia: myalgia.value,
            sorethroat: sorethroat.value,
            coryza: coryza.value,
            //cough again
            dyspnea: dyspnea.value,
            anorexia: anorexia.value,
            nausea: nausea.value,
            vomiting: vomiting.value,
            diarrhea: diarrhea.value,
            altered: altered.value,
            anomia: anosmia.value,
            ageusia: ageusia.value,
            
            history_yes: history_yes.value,
            history_no: history_no.value,
            other_illness_date: other_illness_date.value,
            xray_yes: xray_yes.value,
            xray_no: xray_no.value,
            xray_date: xray_date.value,
            pneumonia_yes: pneumonia_yes.value,
            pneumonia_no: pneumonia_no.value,
            pneumonia_pending: pneumonia_pending.value,
            pneumonia_na: pneumonia_na.value,
            other_findings: other_findings.value,
            pregnant_yes: pregnant_yes.value,
            pregnant_na: pregnant_na.value,
            high_yes: high_yes.value,
            high_no: high_no.value,
            high_na: high_na.value,

            serum_hr_collected: serum_hr_collected.value,
            serum_min_collected: serum_min_collected.value,
            serum_hr_sent: serum_hr_sent.value,
            serum_min_sent: serum_min_sent.value,
            serum_hr_received: serum_hr_received.value,
            serum_min_received: serum_min_received.value,
            serum_virus_isolation: serum_virus_isolation.value,
            serum_pcr: serum_pcr.value,

            naso_hr_collected: naso_hr_collected.value,
            naso_min_collected: naso_min_collected.value,
            naso_hr_sent: naso_hr_sent.value,
            naso_min_sent: naso_min_sent.value,
            naso_hr_received: naso_hr_received.value,
            naso_min_received: naso_min_received.value,
            naso_virus_isolation: naso_virus_isolation.value,
            naso_pcr: naso_pcr.value,

            oro_hr_collected: oro_hr_collected.value,
            oro_hr_received: oro_hr_received.value,
            oro_hr_sent: oro_hr_sent.value,
            oro_min_sent: oro_min_sent.value,
            oro_hr_received: oro_hr_received.value,
            oro_min_received: oro_min_received.value,
            oro_virus_isolation: oro_virus_isolation.value,
            oro_pcr: oro_pcr.value,

            other_hr_collected: other_hr_collected.value,
            other_min_collected: other_min_collected.value,
            other_hr_sent: other_hr_sent.value,
            other_min_sent: other_min_sent.value,
            other_hr_received: other_hr_received.value,
            other_min_received: other_min_received.value,
            other_virus_isolation: other_virus_isolation.value,
            other_pcr: other_pcr.value,

            final_suspect: final_suspect.value,
            final_probable: final_probable.value,
            final_confirmed: final_confirmed.value,
            final_discharged: final_discharged.value,
            final_unknown: final_unknown.value,

            psTOD: psTOD.value,
            psPriority: psPriority.value,
            labNo: labNo.value,
            dru: dru.value,
            other_investigator: other_investigator.value,
            interviewDate: interviewDate.value,
            passport_no: passport_no.value,
            gross_income: gross_income.value,
        })
    })*/
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

//fill input fields with n/a

const naBtn = document.querySelector('.na-button');

naBtn.addEventListener('click', () => { 
    employer_name.value = "N/A"
    employer_occupation.value = "N/A"
    place_of_work.value = "N/A"
    building_name.value = "N/A"
    employer_street.value = "N/A"
    employer_city.value = "N/A"
    employer_province.value = "N/A"
    employer_country.value = "N/A"
    office_phone_number.value = "N/A"
    office_cellphone_number.value = "N/A"
})

function fillNA () {
    port_of_exit.value = "N/A"
    airline_or_seavessel.value = "N/A"
    flight_or_vessel_no.value = "N/A"
    dop.value = "N/A"
    doa.value = "N/A"
}

function clear_employer_details() {
    employer_name.value = ""
    employer_occupation.value = ""
    place_of_work.value = ""
    building_name.value = ""
    employer_street.value = ""
    employer_city.value = ""
    employer_province.value = ""
    employer_country.value = ""
    office_phone_number.value = ""
    office_cellphone_number.value = ""
}

function clear_travel_history() {
    port_of_exit.value = ""
    airline_or_seavessel.value = ""
    flight_or_vessel_no.value = ""
    dop.value = ""
    doa.value = ""
}